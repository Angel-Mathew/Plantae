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
            { name: "Cherry Blossom Tree", img: "https://www.gardenia.net/wp-content/uploads/2024/02/shutterstock_1031747011.jpg" }, { name: "Red Silk Cotton Tree", img: "https://floridaseeds.net/cdn/shop/files/20210302_174934.jpg?v=1744926674&width=1946" }, { name: "Saucer Magnolia", img: "https://bambooplants.ca/wp-content/uploads/2025/09/saucer-magnolia-tree.jpg" },
            { name: "Jacaranda Tree", img: "https://static.wixstatic.com/media/133a51_89193d6a2345402d96c848fa57d61a30~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/133a51_89193d6a2345402d96c848fa57d61a30~mv2.jpg" }, { name: "Eastern Redbud", img: "https://www.gardenia.net/wp-content/uploads/2023/10/shutterstock_1930568681-Optimized.jpg" }, { name: "Flowering Dogwood", img: "https://cdn11.bigcommerce.com/s-9gu1uo/images/stencil/1280x1280/products/321/950/white_dogwood__04851.1680287442.jpg?c=2" },
            { name: "Wisteria Vine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGj45iBCpc0GpSfjMKkZbelUoK9w5iGHkrw&s" }, { name: "Forsythia Shrub", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwPq8T_qWTilQbY4UdJ3d3CjExtQzxleIKA&s" }, { name: "Lilac Shrub", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDg5ev7h2z09wrb0K52c0iJf9oENgR2qvOA&s" },
            { name: "Tulip Tree", img: "https://charlottecreek.com/wp-content/uploads/2018/03/tulip-tree.jpg" }, { name: "Bradford Pear", img: "https://eit-wagpress-prod.s3.amazonaws.com/media/images/2022-03-IMG_7639.max-700x1200.jpg" }, { name: "Azalea Shrub", img: "https://cdn.shopify.com/s/files/1/0062/8532/8445/products/Autumn_Royalty_Encore_Azalea_2_BB.jpg?v=1609873128" },
            { name: "Flowering Almond", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXerUsEKEK2PbT5eMZ1Ijo5x2NjmiYmGpfww&s" }, { name: "Serviceberry Tree", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Biy4zY_rhXFGA-lxyom2HxfWPyyi_qYmWQ&s" }, { name: "Horse Chestnut", img: "https://i.herbalreality.com/wp-content/uploads/2024/01/14174746/Horse-chestnut-Aesculus-hippocastanum.jpg" }
        ],
        fruit: [
            { name: "Strawberries", img: "https://gardenerspath.com/wp-content/uploads/2019/03/How-to-Grow-Strawberries-at-Home.jpg" }, { name: "Apricots", img: "https://cdn.britannica.com/86/75886-050-B481C97E/Apricots.jpg" }, { name: "Rhubarb", img: "https://sowrightseeds.com/cdn/shop/articles/rhubarb---garden-1703881467617_e5762f2a-0924-4f4b-8f95-2b0b2fa94b7c.jpg?v=1754439296" },
            { name: "Honeydew Melon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FdfiKn6WbtS-8uHs7ZC2O5kYaJ6r-QNLLw&s" }, { name: "Loquats", img: "https://media.bunnings.com.au/api/public/content/768ebac6309c481aa0b842cfc5e1806f?v=274914c4" }, { name: "Pineapples", img: "https://cdn.mos.cms.futurecdn.net/PAEWhvhEXCp5RhDGfFCkXm.jpg" },
            { name: "Mulberries", img: "https://tizardin.mu/cdn/shop/files/Mulberry_Plant_tizardin.mu_500x.webp?v=1768650834" }, { name: "Mangoes", img: "https://images-na.ssl-images-amazon.com/images/I/7157X9hMYYS._UL500_.jpg" }, { name: "Jackfruit", img: "https://thumbs.dreamstime.com/b/jackfruit-tree-full-fruit-large-oval-shaped-fruits-known-as-jackfruits-artocarpus-heterophyllus-growing-directly-its-375774194.jpg" },
            { name: "Lychees", img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:213,cw:833,ch:833,q:80,w:833/6oBR9LkioZfxhCT8c3td4i.jpg" }, { name: "Guavas", img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/04372dff8c_480x480.jpg?v=1701352284" }, { name: "Green Almonds", img: "https://lh3.googleusercontent.com/proxy/SWsZ9uNYkzOXANtqtz9juhqWqVHO3Acs62Neefjjy1JtvYq33D1HE3_I2fhcRYGOWOLAOyK_dyvRtuB2gw2A69wRH4V_LU5wF1C1TEsZo1eR0L9ZVtQtDdCsz2jJZpLuMWbKZ9RLD-frTvvXKQWfcwvxDj_LoQ" },
            { name: "Cherimoya", img: "https://cdn.britannica.com/95/182095-004-76575455/Cherimoya.jpg" }, { name: "Blueberries", img: "https://www.yates.co.nz/media/plants/fruits-and-citrus/blueberry/how-to-grow-blueberries_1551154996250.jpeg?width=600&mode=max" }, { name: "Starfruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rXoCOpS_2gpevQnLCD4CVrJffA4S2r40RA&s" }
        ],
        vegetable: [
            { name: "Asparagus", img: "https://fieldreport.caes.uga.edu/wp-content/uploads/2025/05/C1026-social-media-preview-900x600px.png" }, { name: "Artichokes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO59b_pA5bwxe6I_s-LJashui3FQC7lXidQ&s" }, { name: "Radishes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAve0nrtDug08xoqofU2HHnPLJdiO5zgfggA&s" },
            { name: "Sugar Snap Peas", img: "https://m.media-amazon.com/images/I/71GR7D4zd7L._AC_UF1000,1000_QL80_.jpg" }, { name: "Leeks", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6ZJI75u3dvImBs07za3Ik3lKa5owmNNCkA&s" }, { name: "Fava Beans", img: "https://www.thespruce.com/thmb/eeZ40v0dovb28cQd-T4_hKpySOU=/4400x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-fava-beans-1403460-hero-95e4dc3caae94f8da199b371d23cbc1b.jpg" },
            { name: "Fennel", img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/fennel-500x500.jpg" }, { name: "Arugula", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfts7oldJaOW8tXvdURL8qwvlzg7hN7NBow&s" }, { name: "Morel Mushrooms", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xb1vaiwif73kNR_T55wMYr5OdS85xw-TWw&s" },
            { name: "Fiddlehead Ferns", img: "https://www.thespruce.com/thmb/FHrfZqom-qXgu7dIhTMtwnT7lnI=/4281x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-organic-fiddlehead-ferns-2539638-hero-23c689cdd2b74f0c9e817cc6e710f0b8.jpg" }, { name: "Bok Choy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkL4TVu1QIaYAENv7HfONvub5ev_0GEyeePA&s" }, { name: "Swiss Chard", img: "https://assets.clevelandclinic.org/transform/LargeFeatureImage/912d8a68-fcbe-4a97-9432-466a0cb376c9/swiss-chard-1457416862" }
        ]
    },
    summer: {
        flower: [
            { name: "Ghost Orchid", img: "https://cdn.mos.cms.futurecdn.net/u7grePpA6ibkzJgXrJrJb3.jpg" }, { name: "Corpse Flower", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYIfhaLzoSLrNoCTn3TdO6WtiRkGB3uasYw&s" }, { name: "Flame Lily", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwtYSnRE-7jQv6dNSPk4VOmP9bvHPtkhzqA&s" },
            { name: "Night-Blooming Cereus", img: "https://seedsheets.com/wp-content/uploads/2025/12/night-blooming-cereus-care-tips-for-healthy-big-blooms.png" }, { name: "Passion Flower", img: "https://cdn.mos.cms.futurecdn.net/7ySBA7vkmzSUSzz4mNWifg.jpg" }, { name: "Chocolate Cosmos", img: "https://m.media-amazon.com/images/I/61EDHBJe2jL._AC_UF1000,1000_QL80_.jpg" },
            { name: "Bat Flower", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzen4s52j3nm8vJXuMgOs93DU0BhdzeYUv8Q&s" }, { name: "Queen of the Night", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOSZcDMA2IC9iX_N5s8rNCc79DUhF9OVeFQ&s" }, { name: "Plumeria", img: "https://m.media-amazon.com/images/I/41oENqsbkJL._AC_UF1000,1000_QL80_.jpg" },
            { name: "Bee Orchid", img: "https://m.media-amazon.com/images/I/71VpInq5lpL._AC_UF1000,1000_QL80_.jpg" }, { name: "Voodoo Lily", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Rf8j-1fvJH7Ym6hDUPNuUwmT04aQ3DanfA&s" }, { name: "Ice Cream Tulip", img: "https://m.media-amazon.com/images/I/61JpLq9MncL.jpg" },
            { name: "Sea Poison Tree", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYwShSTQGr3rsTQFZxJ9z6Wj89jjNEzTp0g&s" }, { name: "Bird of Paradise", img: "https://www.gardenia.net/wp-content/uploads/2023/05/learn-how-to-grow-and-care-bird-of-paradise-780x520.webp" }, { name: "Lotus", img: "https://m.media-amazon.com/images/I/61pUrtB2PJL._AC_UF350,350_QL80_.jpg" }
        ],
        tree: [
            { name: "Vanilla Orchid Vine", img: "https://www.thespruce.com/thmb/yG3-plwTRoWn73fc3WIlB13CWtA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vanilla-orchid-care-1315974-hero-0eed4eae05da4a09a656a750a1dfa857.jpg" }, { name: "Silk Tree", img: "https://upload.wikimedia.org/wikipedia/commons/c/c5/2018-07-08_11_10_27_Rosea_Mimosa_blossoms_along_the_ramp_from_southbound_Interstate_95_%28New_Jersey_Turnpike_Eastern_Spur%29_to_westbound_Interstate_280_%28Essex_Freeway%29_in_the_New_Jersey_Meadowlands%2C_within_Kearny%2C_Hudson_County%2C_New_Jersey.jpg" }, { name: "Crape Myrtle", img: "https://greensouq.ae/cdn/shop/files/lagerstroemia-indica-crape-myrtle-15-18m-7060631.jpg?v=1756300719" },
            { name: "Frangipani Tree", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSq38CaOLsWtbP_YfSw1Imz69ovJobmE5Alg&s" }, { name: "Southern Magnolia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3SbnGiqfXL9XYq1-A7p2OWo3BqIfeFwxCg&s" }, { name: "Golden Shower Tree", img: "https://www.deepayurveda.com.au/cdn/shop/articles/Cassia_Fistula_tree_bb3eac47-89ca-45ae-8500-41424d4ac88a.jpg?v=1780565565" },
            { name: "Flamboyant Tree", img: "https://m.media-amazon.com/images/I/61BKWTCdPpL._AC_UF1000,1000_QL80_.jpg" }, { name: "Rose of Sharon", img: "https://cdn.mos.cms.futurecdn.net/AnmyV9sCoBhXBcdkv8G8qm.jpg" }, { name: "Chaste Tree", img: "https://cdn.gardenya.ae/wp-content/uploads/2021/07/chaste-tree-3-1.jpg" },
            { name: "Oleander Shrub", img: "https://imgengine.khaleejtimes.com/khaleejtimes/import/images/I9c6XsS0wUJLmDsfyz_UyTwrHH4.jpg?width=600&height=400&q=60&format=auto" }, { name: "Angel's Trumpet", img: "https://cdn.britannica.com/77/195377-050-23259771/angel-trumpet-flower.jpg" }, { name: "Empress Tree", img: "https://m.media-amazon.com/images/I/81fxpHkI-lL._AC_UF1000,1000_QL80_.jpg" },
            { name: "Smoke Tree", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwq3qwJ3S0sGmDOBkAM_aOoaQonpMHCEi6A&s" }, { name: "Silk Floss Tree", img: "https://cdn.britannica.com/36/135836-050-15D85914/Floss-silk-tree.jpg" }, { name: "Mimosa Tree", img: "https://gardenplannerwebsites.azureedge.net/plants/MIM.jpg" }
        ],
        fruit: [
            { name: "Watermelon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3x5G6RxYUa3kGkFM6X6bkVQiBXLp17UzXg&s" }, { name: "Tomatoes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_RpV_Nq_aND67ekZG9sOso6gv4AQatx2sw&s" }, { name: "Peaches", img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:200,cw:1200,ch:1200,q:80,w:1200/i4Eo3wqMZBECRSaoYdeG4i.jpg" },
            { name: "Sweet Corn", img: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg" }, { name: "Zucchini", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1amiJwVG3xxv__dQsYZW5vxGP_Eo3He_1tQ&s" }, { name: "Bell Peppers", img: "https://cdn.mos.cms.futurecdn.net/oeZUErXRnzXNLatYxMqnAD.jpg" },
            { name: "Eggplant", img: "https://gardeningsg.nparks.gov.sg/images/Plants/Brinjal_JacChua%20(2).jpg" }, { name: "Cantaloupe", img: "https://cdn.mos.cms.futurecdn.net/NDXWMS7hUrrFMt4ap7sevZ.jpg" }, { name: "Cherries", img: "https://media.bunnings.com.au/api/public/content/5a57fb4c20cd4a1ab24e289cc92b6a55?v=9ab760c1" },
            { name: "Blackberries", img: "https://cdn.mos.cms.futurecdn.net/uA3kTyqZMmdGfFXJr5fBDn.jpg" }, { name: "Okra", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZfufdnwhdk2NDZT-Yu0p43HoNk2kd_t42w&s" }, { name: "Cucumbers", img: "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/growing%20cucumbers.jpg?itok=nu1qmWxM" },
            { name: "Figs", img: "https://cdn.britannica.com/37/82537-050-B0AC543A/figs-fig-tree.jpg" }, { name: "Plums", img: "https://cdn.britannica.com/71/115271-050-3EEF6DFD/Plums-tree.jpg" }
        ],
        vegetable: [
            { name: "Lima Beans", img: "https://cdn.britannica.com/90/126690-050-A1379A34/Garden-pea-pods.jpg" }, { name: "Cowpeas", img: "https://agrothrive.com/cdn/shop/articles/Cowpeas_3_1200x.jpg?v=1722264544" }, { name: "Malabar Spinach", img: "https://www.rarefruittrees.ae/cdn/shop/files/malabarspinachplant.png?v=1759576401" }, { name: "Bitter Melon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjciWjfT9gtitHAWOtvkA3Ct-n-OCBJh4mA&s" }
        ]
    },
    autumn: {
        flower: [
            { name: "Autumn Crocus", img: "https://www.gardenia.net/wp-content/uploads/2015/02/ChatGPT-Image-Oct-18-2025-07_16_51-AM-Optimized.jpg" }, { name: "Toad Lily", img: "https://www.dutchgrown.eu/cdn/shop/articles/Tricyrtis_Blog-2_789x_crop_center.jpg?v=1694184300" }, { name: "Monkshood", img: "https://cdn.britannica.com/34/121934-004-D91E0558/monkshood.jpg" },
            { name: "Spider Lily", img: "https://m.media-amazon.com/images/I/51-TcM9hb2L.jpg" }, { name: "Sternbergia", img: "https://www.angliabulbs.com/wp-content/uploads/2018/12/Sternbergia-Lutea.jpg" }, { name: "Nerine", img: "https://order.eurobulb.nl/4976-large_default/nerine-bowdenii-amandi-11044.jpg" },
            { name: "Franklin Tree", img: "https://www.gardenia.net/wp-content/uploads/2023/05/franklinia-alatamaha-780x520.webp" }, { name: "Japanese Anemone", img: "https://www.thespruce.com/thmb/vDpWoFNdJ60hsfnNdVl_d4cjM4A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/japanese-anemone-4800132_01-fd26dd3d0fcc4d79abb68d630bce3ec8.jpg" }, { name: "Goldenrod", img: "https://www.familyhandyman.com/wp-content/uploads/2023/08/Guide-for-Growing-Goldenrod_GettyImages-1435127466_FT.jpg" },
            { name: "Turtlehead", img: "https://gardenerspath.com/wp-content/uploads/2025/03/How-to-Grow-Turtlehead-Feature.jpg" }, { name: "Mexican Bush Sage", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxuHnCFmgWIjhDc-Z7mpR9WgQlHi_7czURg&s" }, { name: "Cockscomb", img: "https://cdn.britannica.com/79/118279-050-27152640/Cockscomb.jpg" },
            { name: "Saffron Crocus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3tC0wvl29wUi5UOvCWt8fwZqzlQTpr8pgdQ&s" }, { name: "Pineapple Sage", img: "https://cdn.shopify.com/s/files/1/0603/4892/4151/files/hummingbird-on-pineapple-sage-lo.jpg" }, { name: "Ironweed", img: "https://www.applewoodseed.com/wp-content/uploads/2016/11/VFAS-701-1.jpg" }
        ],
        tree: [
            { name: "Coco Tree", img: "https://m.media-amazon.com/images/I/81fvO7Cb4qL._AC_UF1000,1000_QL80_.jpg" }, { name: "Sugar Maple", img: "https://www.gardenia.net/wp-content/uploads/2017/07/shutterstock_2210765983-Optimized.jpg" }, { name: "Ginkgo Biloba", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PBZmY5vNj64j4kviEoEd9wSzt0eT2TfoAA&s" },
            { name: "Sweetgum", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2Z0iRiU865giczJ7POO7FGid0OOqWVVKNQ&s" }, { name: "Golden Rain Tree", img: "https://www.gardenia.net/wp-content/uploads/2025/03/shutterstock_1183998223-Optimized.jpg" }, { name: "Staghorn Sumac", img: "https://www.gardenia.net/wp-content/uploads/2023/05/rhus-typhina.webp" },
            { name: "Sourwood", img: "https://www.wilsonbrosgardens.com/assets/images/oxydendron-arboreum-sourwood-tree-29.jpg" }, { name: "Sassafras", img: "https://www.wilsonbrosgardens.com/assets/images/sassafras-albidum-14.jpg" }, { name: "American Smoketree", img: "https://theplantnative.com/wp-content/uploads/2023/12/non-native-smoke-tree-eurasian-smoke-tree-768x576.webp" },
            { name: "Japanese Maple", img: "https://plantsexpress.com/cdn/shop/files/bloodgoodjapanesemaple1.jpg?v=1684453554" }, { name: "Black Tupelo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwA3Jgeraq0UfcAS0QEEoIWEItEpi9sNlyrg&s" }, { name: "Persimmon Tree", img: "https://www.planetnatural.com/wp-content/uploads/2023/08/Persimmon-Tree.jpg" },
            { name: "Franklin Tree", img: "https://theplantnative.com/wp-content/uploads/2023/11/franklin-tree-in-bloom-native-landscaping.webp" }, { name: "Seven-Son Flower", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_PF9Z4R34CtYm_zKETO0goDo7YdpLZHhwg&s" }, { name: "Chinese Tallow", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd0MMJKi8lyWLoSdtxSFTNYbvQYvIni5pcw&s" }
        ],
        fruit: [
            { name: "Apples", img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg" }, { name: "Pomegranates", img: "https://www.stodels.com/wp-content/uploads/2015/06/156-1.jpg" }, { name: "Cranberries", img: "https://cdn.mos.cms.futurecdn.net/ew2DiaHtYeCAJPyNHpTVpb.jpg" },
            { name: "Persimmons", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeJ0cgtwurD21QuLbp4AeiL_xXXb_ULRQrQ&s" }, { name: "Grapes", img: "https://greensouq.ae/cdn/shop/files/grapes-red-spain-10-12m-alshjralaanb-fayn-7487504.jpg?v=1756299297&width=800" }, { name: "Quince", img: "https://cdn.mos.cms.futurecdn.net/mjenxAgAwb8y67sZQpjBKn.jpg" },
            { name: "Kumquats", img: "https://cdn.britannica.com/17/136017-050-554676CD/Kumquat-fruit.jpg" }, { name: "Jujubes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03X95-o5H0JjaKXbe2ih4PXD9LVaAaqxcZw&s" }, { name: "Medlar", img: "https://jurassicplants.co.uk/cdn/shop/products/48.ERIOBOTRYAJAPONICA_dfd1aad0-abe1-48ae-b08e-80556a28fbea_2048x.jpg?v=1680709383" },
            { name: "Feijoa", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32qE5AY8SPvsaQn1TdBEUz9yegE2yPop09g&s" }, { name: "Key Limes", img: "https://cdn.mos.cms.futurecdn.net/paFXme9nR22NzQuKcCb74E.jpg" }, { name: "Passion Fruit", img: "https://www.epicgardening.com/wp-content/uploads/2020/02/Passion-Fruit-on-the-vine.jpg" },
            { name: "Muscadine Grapes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXA3Rd2Ur73XLr5OHqIDzmyTh7mn1rwOLmA&s" }, { name: "Elderberries", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlupez5eUqCe7wJ-4U9c5FkF5pTtklxnw6YQ&s" }
        ],
        vegetable: [
            { name: "Pumpkins", img: "https://www.bloomslandcare.com/wp-content/uploads/2016/03/Growing-Perfect-Pumpkins.jpg" }, { name: "Sweet Potatoes", img: "https://cdn.mos.cms.futurecdn.net/VV5DofhcHmsvPhGgYPgoZB-1600-80.jpg" }, { name: "Brussels Sprouts", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeghLrIn2hQjdxrHmgGPsLCDIBYiGyPS3jQ&s" },
            { name: "Butternut Squash", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPaS9LgdLiek0_IEB2Vh8dwO85lRacjoG0w&s" }, { name: "Cauliflower", img: "https://cdn.britannica.com/24/140624-050-A8237BB9/Cauliflower-plant-form-cauliflower-cabbage-flower-structures.jpg" }, { name: "Broccoli", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaEIIB_0PGdjrZeUEqldIoktQgZlta3gTfw&s" },
            { name: "Acorn Squash", img: "https://growplant.org/wp-content/uploads/2024/11/acorn-squash-gardening-1024x585.jpg" }, { name: "Celery", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhKvnD6LHnVzljovu410p0U1PPADCFq0T1w&s" }
        ]
    },
    winter: {
        flower: [
            { name: "Christmas Rose", img: "https://plantscapers.com/wp-content/uploads/2017/12/christmas-rose-blush.jpg" }, { name: "Winter Aconite", img: "https://i.guim.co.uk/img/media/d593b3ff623a8ba428eff5086e8dd45081fb49c0/0_188_1238_743/master/1238.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=aa9f46b6bf5d8a318608d77933d6a900" }, { name: "Snowdrop", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gmNeIMSLM1yj75A-75S0VH9xsX3VwuYaEA&s" },
            { name: "Witch Hazel", img: "https://www.gardenia.net/wp-content/uploads/2023/05/witch-hazel-plant-care-and-growing-guide.webp" }, { name: "Winter Camellia", img: "https://www.gardenia.net/wp-content/uploads/2023/05/Cold-Hardy-Camellias.webp" }, { name: "Winter Jasmine", img: "https://www.gardenia.net/wp-content/uploads/2023/05/Jasminum-Nudiflorum-Winter-Jasmine-780x520.webp" },
            { name: "Glory of the Snow", img: "https://www.gardenia.net/wp-content/uploads/2023/05/chionodoxa-forbesii-alba.webp" }, { name: "Cyclamen", img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:200,cw:1200,ch:1200,q:80,w:1200/Nh9dBt4Gyx8ng9USL3WD4D.jpg" }, { name: "Sweet Box", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdX65PZivobeZcBZDyAdX-h53MjhkyPl6zrQ&s" },
            { name: "Paperwhite", img: "https://cdn.mos.cms.futurecdn.net/UiSq8VUfRm2dWAJfrNne95.jpg" }, { name: "Wintersweet", img: "https://www.gardenia.net/wp-content/uploads/2023/04/50530970_m.webp" }, { name: "Daphne", img: "https://www.theenglishgarden.co.uk/_gatsby/file/8203da9c202bd3c793631346afb15a82/shutterstock_1928266613.jpg" },
            { name: "Garrya", img: "https://i.ebayimg.com/images/g/XecAAOSwsZpkZ5f~/s-l400.jpg" }, { name: "Winter Honeysuckle", img: "https://www.gardenia.net/wp-content/uploads/2023/05/Lonicera-fragrantissima-Sweetest-Honeysuckle.webp" }
        ],
        tree: [
            { name: "Cashew Tree", img: "https://cdn.britannica.com/63/24363-050-9CB64F14/Cashew-apples-nuts-cashew-tree.jpg" }, { name: "Witch Hazel", img: "https://www.gardenia.net/wp-content/uploads/2023/05/witch-hazel-plant-care-and-growing-guide.webp" }, { name: "Winter Camellia", img: "https://www.gardenia.net/wp-content/uploads/2023/05/Cold-Hardy-Camellias.webp" },
            { name: "Winter Jasmine", img: "https://www.gardenia.net/wp-content/uploads/2023/05/Jasminum-Nudiflorum-Winter-Jasmine-780x520.webp" }, { name: "Wintersweet", img: "https://www.gardenia.net/wp-content/uploads/2023/05/chimonanthus-praecox-711x533.webp" }, { name: "Winter Flowering Cherry", img: "https://wovenwood.co.uk/cdn/shop/files/pink-winter-flowering-cherry-tree-prunus-x-subhirtella-autumnalis-rosea_306_8c62a8d7-9e51-4ee8-bcce-707f96a136b9_1500x1500.webp?v=1752855209" },
            { name: "Paperbark Maple", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9vipEeBBgA3VgIEP9FSFNeo_n82jZrPJDw&s" }, { name: "Garrya Shrub", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0YxyDW2HMpruTMA6jTNUuFHr8Gl7lvXmrQ&s" }, { name: "Sweet Box", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdX65PZivobeZcBZDyAdX-h53MjhkyPl6zrQ&s" },
            { name: "Holly Tree", img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Ilex-aquifolium_%28Europaeische_Stechpalme-1%29.jpg" }, { name: "Winter Daphne", img: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Daphne_odora-ja01.jpg" }, { name: "Walking Stick", img: "https://plants.millcreekgardens.com/Content/Images/Photos/G032-14.jpg" },
            { name: "Coral Bark Maple", img: "https://cdn.mos.cms.futurecdn.net/ZnkaRd9AghV9Jcv77qnBHS.jpg" }, { name: "Dawn Redwood", img: "https://images.squarespace-cdn.com/content/v1/545140d8e4b02179fa6291c4/1415861408059-1QEH9MS4UZ719C8EGSH4/MAD_2101w2.jpg?format=1500w" }, { name: "Lenten Rose", img: "https://hort.extension.wisc.edu/files/2018/03/Helleborus-flowering-300x261.jpg" }
        ],
        fruit: [
            { name: "Oranges", img: "https://images-na.ssl-images-amazon.com/images/I/817Pk0mQSRL._UL500_.jpg" }, { name: "Grapefruit", img: "https://gardenplannerwebsites.azureedge.net/plants/GRP.jpg" }, { name: "Lemons", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSQ6mvm7xdGA5v-KzZy4-Fb72WHOrhU6Bfw&s" },
            { name: "Clementines", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCHwnIvtOdTP-_Vy61B-CQoGVaXEFY5uaAQ&s" }, { name: "Mandarins", img: "https://plantsexpress.com/cdn/shop/products/Clementine-mandarin-tree1.jpg?v=1684453698" }, { name: "Blood Oranges", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVqx499T8bx1Hm6qxbh241O-39fPCngfa4g&s" }, { name: "Kiwi", img: "https://www.groworganic.com/cdn/shop/articles/Kiwi-Growing-Guide_0a735c91-4325-44c2-9874-b4bca54d2577.jpg?v=1770145689" }
        ],
        vegetable: [
            { name: "Daikon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hSAvKNNcxJc-JOhXiusrFVvJoxwBuvRepQ&s" }, { name: "Turnips", img: "https://www.pioneeragroindustry.com/shop/wp-content/uploads/2017/10/turnip.gif" }, { name: "Kale", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsqS21GpDy2ykMYa3eVesWlwN8psy-3b6Mw&s" },
            { name: "Green Cabbage", img: "https://www.mammothonion.co.uk/wp-content/uploads/2021/01/cabbage-savoy.jpg" }, { name: "Sea Kale", img: "https://cdn.mos.cms.futurecdn.net/Umh7X3CgGhAbzJAJCo7WXb-1600-80.jpg" }
        ]
    },
    "year-round": {
        flower: [
            { name: "African Violet", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-SImMl2oauefC7tbgm9LkPp7Jw-Cu6XCEg&s" }, { name: "Anthurium", img: "https://www.gardenia.net/wp-content/uploads/2024/02/shutterstock_108525305.jpg" }, { name: "Cape Primrose", img: "https://www.gardenia.net/wp-content/uploads/2023/05/streptocarpus-hope-780x520.webp" },
            { name: "Crown of Thorns", img: "https://cdn.mos.cms.futurecdn.net/v2/t:150,l:0,cw:1600,ch:900,q:80,w:1600/9NFZhTxqnmMTRL5ScuYhDb.jpg" }, { name: "Peace Lily", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVNZf6_wDDDIorn2MjVMzbXdxrVyMD_JtxQ&s" }, { name: "Ixora", img: "https://cdn.mos.cms.futurecdn.net/57fvVQjFChwzj7iJAcpsk7-1600-80.jpg" },
            { name: "Bougainvillea", img: "https://acaciagardencenter.com/cdn/shop/articles/bougainvillea-care-in-dubai-growing-the-uaes-most-popular-flowering-plant-1266513.jpg?crop=center&height=1200&v=1777665941&width=1200" }, { name: "Hibiscus", img: "https://www.terraforma.ae/shop/wp-content/uploads/2014/05/SHHRS_1.jpg" }, { name: "Periwinkle", img: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:283,cw:1131,ch:1131,q:80,w:1131/YVHbF9xrUUM9cmDWWFtzt4.jpg" },
            { name: "Plumbago", img: "https://cdn.mos.cms.futurecdn.net/GUqVEkQbZwQAAGW3QmmM5U.jpg" }, { name: "Everblooming Gardenia", img: "https://www.gardenia.net/wp-content/uploads/2023/05/Gardenia-jasminoides-Veitchii-780x520.webp" }
        ],
        tree: [
            { name: "Areca Palm", img: "https://upload.wikimedia.org/wikipedia/commons/2/22/%E6%95%A3%E5%B0%BE%E8%91%B5Dypsis_lutescens_20210511145013_05.jpg" }, { name: "Eucalyptus Tree", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Eucalyptus_tereticornis_flowers%2C_capsules%2C_buds_and_foliage.jpeg/1280px-Eucalyptus_tereticornis_flowers%2C_capsules%2C_buds_and_foliage.jpeg" }, { name: "Crown of Thorns", img: "https://www.mydomaine.com/thmb/Nmch77cM0TPyhP8lEUXk-97-Zcg=/2049x0/filters:no_upscale():strip_icc()/GettyImages-1094705046-dd78bda3f65a4a3f93c96e5d4806da8c.jpg" },
            { name: "Fiddle Leaf Fig", img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Starr_031108-0130_Ficus_lyrata.jpg" }, { name: "Weeping Fig", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNqt7CpmYbFfi9UAuulWih2TA1cKmsff63g&s" }, { name: "Bougainvillea", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyTnMJAShNMv8KU_D-jSC8z5bmWb7a-YPBA&s" },
            { name: "Rubber Tree", img: "https://cdn.britannica.com/34/5934-050-E0273B5B/Latex-trees-rubber-plantation-Malaysia-Kuala-Lumpur.jpg" }, { name: "Ixora Shrub", img: "https://cdn.mos.cms.futurecdn.net/57fvVQjFChwzj7iJAcpsk7.jpg" }
        ],
        fruit: [{ name: "Coco (Cacao)", img: "https://m.media-amazon.com/images/I/81fvO7Cb4qL._AC_UF1000,1000_QL80_.jpg" }],
        vegetable: [{ name: "Chili Peppers", img: "https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg" }]
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
                    {activeTab === 'fruit' && plants.some(p => !p.isVeg) && (
                <h2 className="grid-divider">Fruits</h2>
            )}{plants.filter(p => !p.isVeg).map((p, i) => <Plantcard key={i} plant={p} />)}
            
            {activeTab === 'fruit' && plants.some(p => p.isVeg) && (
               
                <h2 className="grid-divider" >Vegetables</h2>
                
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