import React, { useState } from 'react';
import './mainpg.css';

const API_KEY = 'sk-Vxc86a2793b48ce2918052';

// --- MASTER DATABASE ---
// To add an image, simply paste the link between the "" in the img property.
const plantDatabase = {
    spring: {
        flower: [
            { name: "Irises", img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/uCojyuPdddZ6LNR8DyfP3Z.jpg" }, { name: "Pansies & Violas", img: "https://completelandscapingservice.com/wp-content/uploads/2016/09/Viola-tricolor-Wild-Pansy1-300x225.jpg" }, { name: "Primrose", img: "https://cdn.britannica.com/78/118078-050-7F3EB0FA/primrose.jpg" },
            { name: "Marigolds", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzX67lnTrULfYnNQ3Goxt6zO00LaabU2zLg&s" }, { name: "Petunias", img: "https://www.botanicalinterests.com/community/blog/wp-content/uploads/2024/08/petunia-sow-and-grow.jpg" }, { name: "Snake's Head Fritillary", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8h0-aYtX8Ab5fYKXYKm1g9mqZIcwZIqO04A&s" },
            { name: "Parrot's Beak", img: "https://www.nurserywarehouse.com.au/cdn/shop/files/Lotus-Vine-Parrot-s-Beak-1.jpg?v=1779160458" }, { name: "White Egret Orchid", img: "https://m.media-amazon.com/images/I/61I4hE2wbrL._AC_UF1000,1000_QL80_.jpg" }, { name: "Dutchman's Breeches", img: "https://gardenerspath.com/wp-content/uploads/2026/04/How-to-Grow-Dutchmans-Breeches-Feature.jpg" },
            { name: "Jack-in-the-Pulpit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAStDs8Ja9w7H_nCoMqwcpeDpXonMCR9pRA&s" }, { name: "Himalayan Blue Poppy", img: "https://www.gardenia.net/wp-content/uploads/2023/03/a5E69QZIfj131KFcvjdE3HLQ3RfxdtzUTsGSwvWc-1.webp" }, { name: "Black Hyacinth", img: "https://bulbi.co.uk/media/catalog/product/H/y/Hyacinthus_orientalis_Dark_Dimension_1_4.jpg" },
            { name: "Lady's Slipper Orchid", img: "https://sargentsnursery.com/wp-content/uploads/2022/05/453202890_e06ff35a1f_b.jpg" }, { name: "Bleeding Heart", img: "https://cdn.britannica.com/99/6699-050-378D6601/Asian-bleeding-heart-dicentra-spectabilis.jpg" }, { name: "Trout Lily", img: "https://cdn.mos.cms.futurecdn.net/bKPv5rYoDg9jd3ubaJdLVU.jpg" },
            { name: "Tulips", img: "https://cdn11.bigcommerce.com/s-i7i23daso6/products/10507/images/46795/GAP_1730788__12655.1760517758.386.513.jpg?c=1" }, { name: "Hyacinths", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqtb1Qma1LC4jmYbSKOkNcTB-PBGzPHxt-Q&s" }, { name: "Snowdrops", img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:350,cw:900,ch:900,q:80,w:900/BMs2gJgPv4a3PDGXiAL6oC.jpg" }, { name: "Daffodils", img: "https://www.almanac.com/sites/default/files/images/daffodil-mini-shutterstock_1933345733.jpg" }
        ],
        tree: [
            { name: "Cherry Blossom Tree", img: "" }, { name: "Red Silk Cotton Tree", img: "" }, { name: "Saucer Magnolia", img: "" },
            { name: "Jacaranda Tree", img: "" }, { name: "Eastern Redbud", img: "" }, { name: "Flowering Dogwood", img: "" },
            { name: "Wisteria Vine", img: "" }, { name: "Forsythia Shrub", img: "" }, { name: "Lilac Shrub", img: "" },
            { name: "Tulip Tree", img: "" }, { name: "Bradford Pear", img: "" }, { name: "Azalea Shrub", img: "" },
            { name: "Flowering Almond", img: "" }, { name: "Serviceberry Tree", img: "" }, { name: "Horse Chestnut", img: "" }
        ],
        fruit: [
            { name: "Strawberries", img: "" }, { name: "Apricots", img: "" }, { name: "Rhubarb", img: "" },
            { name: "Honeydew Melon", img: "" }, { name: "Loquats", img: "" }, { name: "Pineapples", img: "" },
            { name: "Mulberries", img: "" }, { name: "Mangoes", img: "" }, { name: "Jackfruit", img: "" },
            { name: "Lychees", img: "" }, { name: "Guavas", img: "" }, { name: "Green Almonds", img: "" },
            { name: "Cherimoya", img: "" }, { name: "Blueberries", img: "" }, { name: "Starfruit", img: "" }
        ],
        vegetable: [
            { name: "Asparagus", img: "" }, { name: "Artichokes", img: "" }, { name: "Radishes", img: "" },
            { name: "Sugar Snap Peas", img: "" }, { name: "Leeks", img: "" }, { name: "Fava Beans", img: "" },
            { name: "Fennel", img: "" }, { name: "Arugula", img: "" }, { name: "Morel Mushrooms", img: "" },
            { name: "Fiddlehead Ferns", img: "" }, { name: "Bok Choy", img: "" }, { name: "Swiss Chard", img: "" }
        ]
    },
    summer: {
        flower: [
            { name: "Ghost Orchid", img: "" }, { name: "Corpse Flower", img: "" }, { name: "Flame Lily", img: "" },
            { name: "Night-Blooming Cereus", img: "" }, { name: "Passion Flower", img: "" }, { name: "Chocolate Cosmos", img: "" },
            { name: "Bat Flower", img: "" }, { name: "Queen of the Night", img: "" }, { name: "Plumeria", img: "" },
            { name: "Bee Orchid", img: "" }, { name: "Voodoo Lily", img: "" }, { name: "Ice Cream Tulip", img: "" },
            { name: "Sea Poison Tree", img: "" }, { name: "Bird of Paradise", img: "" }, { name: "Lotus", img: "" }
        ],
        tree: [
            { name: "Vanilla Orchid Vine", img: "" }, { name: "Silk Tree", img: "" }, { name: "Crape Myrtle", img: "" },
            { name: "Frangipani Tree", img: "" }, { name: "Southern Magnolia", img: "" }, { name: "Golden Shower Tree", img: "" },
            { name: "Flamboyant Tree", img: "" }, { name: "Rose of Sharon", img: "" }, { name: "Chaste Tree", img: "" },
            { name: "Oleander Shrub", img: "" }, { name: "Angel's Trumpet", img: "" }, { name: "Empress Tree", img: "" },
            { name: "Smoke Tree", img: "" }, { name: "Silk Floss Tree", img: "" }, { name: "Mimosa Tree", img: "" }
        ],
        fruit: [
            { name: "Watermelon", img: "" }, { name: "Tomatoes", img: "" }, { name: "Peaches", img: "" },
            { name: "Sweet Corn", img: "" }, { name: "Zucchini", img: "" }, { name: "Bell Peppers", img: "" },
            { name: "Eggplant", img: "" }, { name: "Cantaloupe", img: "" }, { name: "Cherries", img: "" },
            { name: "Blackberries", img: "" }, { name: "Okra", img: "" }, { name: "Cucumbers", img: "" },
            { name: "Figs", img: "" }, { name: "Plums", img: "" }
        ],
        vegetable: [
            { name: "Lima Beans", img: "" }, { name: "Cowpeas", img: "" }, { name: "Malabar Spinach", img: "" }, { name: "Bitter Melon", img: "" }
        ]
    },
    autumn: {
        flower: [
            { name: "Autumn Crocus", img: "" }, { name: "Toad Lily", img: "" }, { name: "Monkshood", img: "" },
            { name: "Spider Lily", img: "" }, { name: "Sternbergia", img: "" }, { name: "Nerine", img: "" },
            { name: "Franklin Tree", img: "" }, { name: "Japanese Anemone", img: "" }, { name: "Goldenrod", img: "" },
            { name: "Turtlehead", img: "" }, { name: "Mexican Bush Sage", img: "" }, { name: "Cockscomb", img: "" },
            { name: "Saffron Crocus", img: "" }, { name: "Pineapple Sage", img: "" }, { name: "Ironweed", img: "" }
        ],
        tree: [
            { name: "Coco Tree", img: "" }, { name: "Sugar Maple", img: "" }, { name: "Ginkgo Biloba", img: "" },
            { name: "Sweetgum", img: "" }, { name: "Golden Rain Tree", img: "" }, { name: "Staghorn Sumac", img: "" },
            { name: "Sourwood", img: "" }, { name: "Sassafras", img: "" }, { name: "American Smoketree", img: "" },
            { name: "Japanese Maple", img: "" }, { name: "Black Tupelo", img: "" }, { name: "Persimmon Tree", img: "" },
            { name: "Franklin Tree", img: "" }, { name: "Seven-Son Flower", img: "" }, { name: "Chinese Tallow", img: "" }
        ],
        fruit: [
            { name: "Apples", img: "" }, { name: "Pomegranates", img: "" }, { name: "Cranberries", img: "" },
            { name: "Persimmons", img: "" }, { name: "Grapes", img: "" }, { name: "Quince", img: "" },
            { name: "Kumquats", img: "" }, { name: "Jujubes", img: "" }, { name: "Medlar", img: "" },
            { name: "Feijoa", img: "" }, { name: "Key Limes", img: "" }, { name: "Passion Fruit", img: "" },
            { name: "Muscadine Grapes", img: "" }, { name: "Elderberries", img: "" }
        ],
        vegetable: [
            { name: "Pumpkins", img: "" }, { name: "Sweet Potatoes", img: "" }, { name: "Brussels Sprouts", img: "" },
            { name: "Butternut Squash", img: "" }, { name: "Cauliflower", img: "" }, { name: "Broccoli", img: "" },
            { name: "Acorn Squash", img: "" }, { name: "Celery", img: "" }
        ]
    },
    winter: {
        flower: [
            { name: "Christmas Rose", img: "" }, { name: "Winter Aconite", img: "" }, { name: "Snowdrop", img: "" },
            { name: "Witch Hazel", img: "" }, { name: "Winter Camellia", img: "" }, { name: "Winter Jasmine", img: "" },
            { name: "Glory of the Snow", img: "" }, { name: "Cyclamen", img: "" }, { name: "Sweet Box", img: "" },
            { name: "Paperwhite", img: "" }, { name: "Wintersweet", img: "" }, { name: "Daphne", img: "" },
            { name: "Garrya", img: "" }, { name: "Winter Honeysuckle", img: "" }
        ],
        tree: [
            { name: "Cashew Tree", img: "" }, { name: "Witch Hazel", img: "" }, { name: "Winter Camellia", img: "" },
            { name: "Winter Jasmine", img: "" }, { name: "Wintersweet", img: "" }, { name: "Winter Flowering Cherry", img: "" },
            { name: "Paperbark Maple", img: "" }, { name: "Garrya Shrub", img: "" }, { name: "Sweet Box", img: "" },
            { name: "Holly Tree", img: "" }, { name: "Winter Daphne", img: "" }, { name: "Walking Stick", img: "" },
            { name: "Coral Bark Maple", img: "" }, { name: "Dawn Redwood", img: "" }, { name: "Lenten Rose", img: "" }
        ],
        fruit: [
            { name: "Oranges", img: "" }, { name: "Grapefruit", img: "" }, { name: "Lemons", img: "" },
            { name: "Clementines", img: "" }, { name: "Mandarins", img: "" }, { name: "Blood Oranges", img: "" }, { name: "Kiwi", img: "" }
        ],
        vegetable: [
            { name: "Daikon", img: "" }, { name: "Turnips", img: "" }, { name: "Kale", img: "" },
            { name: "Green Cabbage", img: "" }, { name: "Sea Kale", img: "" }
        ]
    },
    "year-round": {
        flower: [
            { name: "African Violet", img: "" }, { name: "Anthurium", img: "" }, { name: "Cape Primrose", img: "" },
            { name: "Crown of Thorns", img: "" }, { name: "Peace Lily", img: "" }, { name: "Ixora", img: "" },
            { name: "Bougainvillea", img: "" }, { name: "Hibiscus", img: "" }, { name: "Periwinkle", img: "" },
            { name: "Plumbago", img: "" }, { name: "Everblooming Gardenia", img: "" }
        ],
        tree: [
            { name: "Areca Palm", img: "" }, { name: "Eucalyptus Tree", img: "" }, { name: "Crown of Thorns", img: "" },
            { name: "Fiddle Leaf Fig", img: "" }, { name: "Weeping Fig", img: "" }, { name: "Bougainvillea", img: "" },
            { name: "Rubber Tree", img: "" }, { name: "Ixora Shrub", img: "" }
        ],
        fruit: [{ name: "Coco (Cacao)", img: "" }],
        vegetable: [{ name: "Chili Peppers", img: "" }]
    }
};

const Mainpg = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    const handleInputChange = (e) => {
        const val = e.target.value.toLowerCase().trim();
        setSearchTerm(val);
        if (plantDatabase[val]) {
            setShowCategories(true);
        } else {
            setShowCategories(false);
            setPlants([]);
        }
    };

    const loadCategory = (cat) => {
        setLoading(true);
        setActiveTab(cat);
        const season = searchTerm;
        
        let list = [];
        if (cat === 'fruit') {
            const fruits = (plantDatabase[season].fruit || []).map(f => ({ ...f, isVeg: false }));
            const vegs = (plantDatabase[season].vegetable || []).map(v => ({ ...v, isVeg: true }));
            list = [...fruits, ...vegs];
        } else {
            list = (plantDatabase[season][cat] || []).map(item => ({ ...item, isVeg: false }));
        }

        setPlants(list);
        setLoading(false);
    };

    return (
        <div className="mainpg-container">
            <section id="about" className="about-section">
                <div className="about-content">
                    <div className="about-image"><img src="/imgforabout.png" alt="Plantae" /></div>
                    <div className="about-text">
                        <p>Right touch, right plant for the right season. Discover species curated for your garden.</p>
                    </div>
                </div>
            </section>

            <div className="search-container">
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder="Enter season (Spring, Summer, Autumn, Winter, Year-round)" 
                        value={searchTerm} 
                        onChange={handleInputChange} 
                    />
                    <button className="search-button"><img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Search"/></button>
                </div>
            </div>

            {showCategories && (
                <div className="category-buttons">
                    <button className="cat-btn" onClick={() => loadCategory('flower')}>Flowers 🌸</button>
                    <button className="cat-btn" onClick={() => loadCategory('tree')}>Trees & Plants 🌿</button>
                    <button className="cat-btn" onClick={() => loadCategory('fruit')}>Fruits & Veg 🍎</button>
                </div>
            )}

            <div className="plants-grid">
                {loading ? <p className="status-msg">Loading your garden...</p> : (
                    <>
                        {plants.filter(p => !p.isVeg).map((p, i) => <Plantcard key={i} plant={p} />)}
                        {activeTab === 'fruit' && plants.some(p => p.isVeg) && (
                            <h2 className="grid-divider">Vegetables</h2>
                        )}
                        {plants.filter(p => p.isVeg).map((p, i) => <Plantcard key={i} plant={p} />)}
                    </>
                )}
            </div>
            

        </div>
    );
};

const Plantcard = ({ plant }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [loadingApi, setLoadingApi] = useState(false);

    // If the img property is empty, it uses a placeholder. 
    // You can replace this logic with your specific image path logic.
    const imageSrc = plant.img || "https://via.placeholder.com/400x400?text=Add+Image";

    const handleMore = async () => {
        setShowDetails(!showDetails);
        if (!apiData && !showDetails) {
            setLoadingApi(true);
            try {
                const res = await fetch(`https://perenual.com/api/species-list?key=${API_KEY}&q=${plant.name}`);
                const data = await res.json();
                if (data.data && data.data[0]) setApiData(data.data[0]);
            } catch (e) { console.log("API limit."); }
            setLoadingApi(false);
        }
    };

    return (
        <div className="plant-card">
            <div className="image-holder">
                <img src={imageSrc} alt={plant.name} className="plant-image" 
                     onError={(e) => { e.target.src = "https://via.placeholder.com/400"; }} />
            </div>
            <h3>{plant.name}</h3>
            <button className="more-btn" onClick={handleMore}>{showDetails ? "Less" : "More"}</button>
            {showDetails && (
                <div className="details-dropdown">
                    {loadingApi ? <p>Searching details...</p> : (
                        <>
                            <p><strong>Sun:</strong> {apiData?.sunlight?.join(', ') || "Full Sun"}</p>
                            <p><strong>Water:</strong> {apiData?.watering || "Moderate"}</p>
                            <p><strong>Cycle:</strong> {apiData?.cycle || "Perennial"}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Mainpg;