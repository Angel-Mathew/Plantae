import React, { useState } from 'react';
import './mainpg.css';

const API_KEY = 'sk-Vxc86a2793b48ce2918052';

const Mainpg = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    // This handles the season search logic
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        // Define valid seasons
        const seasons = ['spring', 'summer', 'autumn', 'winter', 'year-round'];
        
        // Show category buttons if a valid season is typed
        if (seasons.includes(value.toLowerCase().trim())) {
            setShowCategories(true);
        } else {
            setShowCategories(false);
            setPlants([]); // Clear results if season is cleared
        }
    };

    // Main fetch for the list of plants based on categories
    const fetchFromAPI = async (categoryType) => {
        setLoading(true);
        try {
            let url = `https://perenual.com/api/species-list?key=${API_KEY}`;
            
            // Perenual API filters
            if (categoryType === 'fruit') {
                url += "&edible=1";
            } else if (categoryType === 'flower') {
                url += "&cycle=perennial"; 
            } else if (categoryType === 'tree') {
                url += "&cycle=annual"; 
            }

            const response = await fetch(url);
            const data = await response.json();
            setPlants(data.data || []);
        } catch (error) {
            console.error("Error fetching plant list:", error);
        }
        setLoading(false);
    };

    return (
        <div className="mainpg-container">
            {/* About Section */}
            <section id="about" className="about-section">
                <div className="about-content">
                    <div className="about-image">
                        <img src="/imgforabout.png" alt="About" onError={(e) => e.target.style.display='none'}/>
                    </div>
                    <div className="about-text">
                        <p>This website ensures that the right plants are grown in the right season. Enter a season to begin.</p>
                    </div>
                </div>
            </section>

            {/* Search Bar */}
            <div className="search-container">
              <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter season (Spring, Summer, Autumn, Winter, Year-round)"
                    value={searchTerm}
                    onChange={handleInputChange} 
                />
                <button className="search-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="search"/>
                </button>
                </div>
            </div>

            {/* 3 Category Buttons */}
            {showCategories && (
                <div className="category-buttons">
                    <button className="cat-btn" onClick={() => fetchFromAPI('flower')}>Flowers 🌸</button>
                    <button className="cat-btn" onClick={() => fetchFromAPI('tree')}>Trees & Plants 🌿</button>
                    <button className="cat-btn" onClick={() => fetchFromAPI('fruit')}>Fruits 🍎</button>
                </div>
            )}

            {/* Plants Grid */}
            <div className="plants-grid">
                {loading ? (
                    <p style={{color: 'olive', textAlign: 'center', width: '100%', fontSize: '22px'}}>Gathering plants...</p>
                ) : plants.length > 0 ? (
                    plants.map((plant)=>(
                        <Plantcard key={plant.id} plant={plant}/>
                    ))
                ) : showCategories && (
                    <p style={{color: 'olive', textAlign: 'center', width: '100%'}}>Choose a category to display plants for {searchTerm}.</p>
                )}
            </div>
        </div>
    );
}

/* --- Plant Card Component with Deep Detail Fetching & Fallbacks --- */
const Plantcard = ({ plant }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [extraInfo, setExtraInfo] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(false);

    // This function runs when 'More' is clicked
    const toggleDetails = async () => {
        if (!showDetails) {
            setShowDetails(true);
            
           
            if (!extraInfo) {
                setLoadingDetails(true);
                try {
                    const res = await fetch(`https://perenual.com/api/species/details/${plant.id}?key=${API_KEY}`);
                    const data = await res.json();
                    setExtraInfo(data);
                } catch (error) {
                    console.error("Error fetching deep details:", error);
                }
                setLoadingDetails(false);
            }
        } else {
            setShowDetails(false);
        }
    };

   
    const apiImg = plant.default_image?.regular_url || plant.default_image?.thumbnail;
    const isRestricted = apiImg?.includes("upgrade_access") || apiImg?.includes("premium");
    
    
    const imageUrl = (apiImg && !isRestricted) 
        ? apiImg 
        : "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=500&auto=format&fit=crop";

    return (
    <div className="plant-card">
        <div className="card-inner">
            <div className="image-holder">
                <img 
                    src={imageUrl} 
                    alt={plant.common_name} 
                    className="plant-image"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=500&auto=format&fit=crop"; 
                    }}
                />
            </div>
            <h3>{plant.common_name || "Garden Species"}</h3>
        </div>
        
        <button className="more-btn" onClick={toggleDetails}>
            {showDetails ? "Less" : "More"}
        </button>

        {showDetails && (
            <div className="details-dropdown">
                {loadingDetails ? (
                    <p>Loading care info...</p>
                ) : (
                    <>
                        
                        <p><strong>Sunlight:</strong> {
                            extraInfo?.sunlight?.join(', ') || 
                            (Array.isArray(plant.sunlight) ? plant.sunlight.join(', ') : "Full Sun")
                        }</p>
                        
                        <p><strong>Watering:</strong> {
                            extraInfo?.watering || plant.watering || "Average"
                        }</p>

                        <p><strong>Cycle:</strong> {
                            extraInfo?.cycle && extraInfo.cycle !== "Upgrade Plan" 
                            ? extraInfo.cycle 
                            : (plant.cycle && plant.cycle !== "N/A" ? plant.cycle : "Perennial")
                        }</p>

                        <p><strong>Origin:</strong> {
                            extraInfo?.origin?.[0] || "Global"
                        }</p>
                    </>
                )}
            </div>
        )}
    </div>
    );
}

export default Mainpg;