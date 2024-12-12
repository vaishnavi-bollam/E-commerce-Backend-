1. Login API
    Request URL: `https://apis.ccbp.in/login`
    Request Method: [POST]
    Status Code: {200 OK} 
    # Payload: 
    ```json
    {
    "username":"rahul",
    "password":"rahul@2021"
    }
    ```
    # response:
    ```json
    {
    "jwt_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"
    }
    ```


2. Prime Deals API 
    Request URL: `https://apis.ccbp.in/prime-deals`
    Request Method:[GET]
    Status Code:{200 OK}
    # response:
    ```json  
    { 
    "prime_deals": [
        {
            "id": 1001,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-silver-hair-dryer.png",
            "title": "Hair Dryer",
            "style": "Philips HP8100/46 Hair Dryer - Salon Dry Compact",
            "price": 760,
            "description": "Cleverly designed, this compact hairdryer is easy to handle and lightweight. The ThermoProtect temperature setting provides the optimal hair drying rate while protecting your hair from overheating. An efficient hairdryer sets your hair dry in just a few seconds. It also comes with a rubber storage hook.",
            "brand": "Phillips",
            "total_reviews": 5463,
            "rating": 3.9,
            "availability": "In Stock"
        },
        {
            "id": 1002,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-people-toys.png",
            "title": "Minifigures",
            "style": "Minifigures",
            "price": 760,
            "description": "Collect all mystery mini-figures in the new series 11 and grow your LEGO Minifigure Collection. Each mini-figure comes in a sealed “mystery” bag with its accessories, display plate, and collector’s booklet. Only 1 of 16 individual mini-figures will be available in each “mystery” bag.",
            "brand": "LEGO",
            "total_reviews": 5463,
            "rating": 3.9,
            "availability": "In Stock"
        },
        {
            "id": 1003,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-short-tri-pod.png",
            "title": "Lightweight Tripod",
            "style": "Lightweight Tripod",
            "price": 760,
            "description": "Capture vivid, professional-style photographs with help from this Lightweight Tripod. The tripod makes it easy to achieve reliable stability and score just the right angle when going after that award-winning shot. The handy tripod accommodates a wide range of digital, video, and still cameras.",
            "brand": "LEGO",
            "total_rev9iews": 5463,
            "rating": 3.9,
            "availability": "In Stock"
        }
    ],
    "total": 3
    }
    ```


3. Products API
    Request URL: `https://apis.ccbp.in/products?sort_by=PRICE_HIGH&category=&title_search=&rating=`
    Request Method: [GET]
    Status Code: {200 OK}
    # response:
    ```json
    {
     "products": [
        {
            "title": "Embroidered Net Gown",
            "brand": "Manyavar",
            "price": 62990,
            "id": 16,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
            "rating": "3.2"
        },
        {
            "title": "Front Load Machine",
            "brand": "Samsung",
            "price": 22490,
            "id": 24,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png",
            "rating": "4.5"
        },
        {
            "title": "Collider Black Dial Men's Watch",
            "brand": "Fossil",
            "price": 14995,
            "id": 33,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-belt-watch.png",
            "rating": "4.3"
        },
        {
            "title": "True Wireless Earbuds",
            "brand": "LG",
            "price": 13499,
            "id": 18,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
            "rating": "4.4"
        },
        {
            "title": "Maritime Men's Watch",
            "brand": "Titan",
            "price": 11999,
            "id": 35,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-tatar-watch.png",
            "rating": "4.3"
        },
        {
            "title": "Neutra Analog Men's Watch",
            "brand": "Fossil",
            "price": 10995,
            "id": 34,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png",
            "rating": "4.1"
        },
        {
            "title": "Monsters Charm Toy",
            "brand": "Trendytap",
            "price": 8600,
            "id": 48,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
            "rating": "4.2"
        },
        {
            "title": "Privateer Quartz Watch",
            "brand": "Fossil",
            "price": 8122,
            "id": 31,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-black-watch.png",
            "rating": "4.4"
        },
        {
            "title": "Chronograph black Watch",
            "brand": "Fossil",
            "price": 6395,
            "id": 32,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-watch.png",
            "rating": "3.8"
        },
        {
            "title": "Podcast Microphone",
            "brand": "MAONO",
            "price": 5555,
            "id": 22,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png",
            "rating": "4.4"
        },
        {
            "title": "Virgin Avocado Oil",
            "brand": "ProV",
            "price": 4144,
            "id": 42,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png",
            "rating": "4.4"
        },
        {
            "title": "Wrap Dress",
            "brand": "Vero Moda",
            "price": 3039,
            "id": 12,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-simple-formal.png",
            "rating": "3.2"
        },
        {
            "title": "Warm Up Jacket",
            "brand": "Monte Carlo",
            "price": 2796,
            "id": 11,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png",
            "rating": "4.4"
        },
        {
            "title": "Slim Fit Blazer",
            "brand": "LEVIS",
            "price": 2599,
            "id": 8,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-purple-jacket.png",
            "rating": "4.2"
        },
        {
            "title": "Men's Waistcoat",
            "brand": "LEVIS",
            "price": 2500,
            "id": 4,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
            "rating": "4.3"
        },
        {
            "title": "Sheer Anarkali",
            "brand": "Saadgi",
            "price": 2172,
            "id": 14,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-white-punjabi.png",
            "rating": "3.2"
        },
        {
            "title": "SilverBullet Mixer Grinder",
            "brand": "COOKWELL",
            "price": 1899,
            "id": 20,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder-white.png",
            "rating": "4.1"
        },
        {
            "title": "Zari Design Kurta",
            "brand": "Libas",
            "price": 1869,
            "id": 7,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-punjabi.png",
            "rating": "4.4"
        },
        {
            "title": "Analog Men's Watch",
            "brand": "Fastrack",
            "price": 1850,
            "id": 25,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
            "rating": "4.2"
        },
        {
            "title": "Embellished Maxi Dress",
            "brand": "STREET 9",
            "price": 1799,
            "id": 15,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-blue-fork.png",
            "rating": "3.2"
        },
        {
            "title": "PS5 Controller Charger",
            "brand": "New World",
            "price": 1749,
            "id": 21,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ps5-controller.png",
            "rating": "3.3"
        },
        {
            "title": "Mixer Grinder",
            "brand": "Lifelong",
            "price": 1699,
            "id": 19,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
            "rating": "3.9"
        },
        {
            "title": "Dynamic Microphone",
            "brand": "JTS Store",
            "price": 1699,
            "id": 23,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-solo-mike.png",
            "rating": "3.9"
        },
        {
            "title": "Tea Kettle Pot",
            "brand": "Indian Art Villa",
            "price": 1685,
            "id": 26,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
            "rating": "3.8"
        },
        {
            "title": "Non-Toxic Robot Toys",
            "brand": "FunBlast",
            "price": 1545,
            "id": 52,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-short-green-robot.png",
            "rating": "3.3"
        },
        {
            "title": "Slim Fit Jeans",
            "brand": "LEVIS",
            "price": 1469,
            "id": 5,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png",
            "rating": "3.1"
        },
        {
            "title": "Panda Baby Product",
            "brand": "Panda",
            "price": 1399,
            "id": 47,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
            "rating": "4.3"
        },
        {
            "title": "Handheld Full Body Massager",
            "brand": "AGARO REGAL",
            "price": 1299,
            "id": 17,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
            "rating": "4.3"
        },
        {
            "title": "Turmeric Powder",
            "brand": "Patanjali",
            "price": 1234,
            "id": 45,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-turmeric.png",
            "rating": "2.8"
        },
        {
            "title": "Nova SuperGroom Multi-kit",
            "brand": "Nova",
            "price": 1199,
            "id": 30,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nover-v2-trimmer.png",
            "rating": "4.4"
        },
        {
            "title": "Animal Printed Shirt",
            "brand": "Mufti",
            "price": 1017,
            "id": 9,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-short-sleeves-shirt.png",
            "rating": "4"
        },
        {
            "title": "Knit Cream Sweater",
            "brand": "MansiCollections",
            "price": 996,
            "id": 13,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-stylish-sweater.png",
            "rating": "3.2"
        },
        {
            "title": "Miss Chase Bodycon Dress",
            "brand": "LEVIS",
            "price": 974,
            "id": 6,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-modren-net.png",
            "rating": "3.8"
        },
        {
            "title": "Chilli Extract Sauce",
            "brand": "Everin",
            "price": 788,
            "id": 37,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
            "rating": "4.1"
        },
        {
            "title": "Batman Batmobile",
            "brand": "Funskool",
            "price": 745,
            "id": 46,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
            "rating": "4.7"
        },
        {
            "title": "Knitted Rabbit",
            "brand": "Ira",
            "price": 620,
            "id": 49,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-rabbit.png",
            "rating": "4.4"
        },
        {
            "title": "Kids Toy Train",
            "brand": "FIONA",
            "price": 599,
            "id": 51,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-red-train.png",
            "rating": "4.1"
        },
        {
            "title": "Honey Teddy Bear",
            "brand": "Honey",
            "price": 599,
            "id": 53,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-simple-teddy.png",
            "rating": "4.3"
        },
        {
            "title": "Cotton Hoodie",
            "brand": "Scott International",
            "price": 498,
            "id": 3,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
            "rating": "3.8"
        },
        {
            "title": "Nexa Yellow Car",
            "brand": "Quinergys",
            "price": 490,
            "id": 54,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-yellow-car.png",
            "rating": "4.1"
        },
        {
            "title": "Polyester Saree",
            "brand": "Ahalyaa",
            "price": 419,
            "id": 10,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-side-sareee.png",
            "rating": "3.8"
        },
        {
            "title": "Aluminium 4 Cup Tea Kettle",
            "brand": "Kitchen Expert",
            "price": 399,
            "id": 27,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
            "rating": "4.3"
        },
        {
            "title": "Beard Trimmer",
            "brand": "Nova",
            "price": 398,
            "id": 29,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nova-trimmer.png",
            "rating": "4.5"
        },
        {
            "title": "Plain Round Neck T-shirt",
            "brand": "Huetrap",
            "price": 395,
            "id": 2,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
            "rating": "4.1"
        },
        {
            "title": "Tripod Stand",
            "brand": "Sketchfab",
            "price": 390,
            "id": 28,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-medium-tripod.png",
            "rating": "4.2"
        },
        {
            "title": "Bot Robot Toy",
            "brand": "WireScorts",
            "price": 355,
            "id": 50,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-robot.png",
            "rating": "3.8"
        },
        {
            "title": "Wide Bowknot Hat",
            "brand": "MAJIK",
            "price": 288,
            "id": 1,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
            "rating": "3.6"
        },
        {
            "title": "Crystal Sugar",
            "brand": "NatureVit",
            "price": 278,
            "id": 44,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-sugar-cubes.png",
            "rating": "3.6"
        },
        {
            "title": "Basmati Rice",
            "brand": "Fortune",
            "price": 244,
            "id": 43,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-rice.png",
            "rating": "3.6"
        },
        {
            "title": "Flour Unbleached",
            "brand": "TWF Store",
            "price": 200,
            "id": 38,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
            "rating": "4.3"
        },
        {
            "title": "Maroon Kumkum ",
            "brand": "Amazon",
            "price": 200,
            "id": 40,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--kumkum.png",
            "rating": "3.9"
        },
        {
            "title": "Eggs",
            "brand": "Naturoz",
            "price": 60,
            "id": 36,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
            "rating": "3.6"
        },
        {
            "title": "Fresh Lemon, 100g",
            "brand": "Amazon",
            "price": 50,
            "id": 41,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-lemons.png",
            "rating": "4.5"
        },
        {
            "title": "Fresh Produce Green Chilli",
            "brand": "Amazon",
            "price": 30,
            "id": 39,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png",
            "rating": "4.2"
        }
    ],
    "total": 54
    }
    ```
    

4. Sort by low to high API
    Request URL: `https://apis.ccbp.in/products?sort_by=PRICE_LOW&category=&title_search=&rating=`
    Request Method: [GET]
    Status Code: {200 OK}


5. Category: clothing API
    Request URL: `https://apis.ccbp.in/products?sort_by=PRICE_LOW&category=1&title_search=&rating=`
    Request Method: [GET]
    Status Code: {200 OK}
    ```js
    const categories = ["Clothing","Electronics","Appliances","Grocery","Toys"]
    ```
 
6. Search by title name along with filters applied API
    Request URL: `https://apis.ccbp.in/products?sort_by=PRICE_LOW&category=1&title_search=hat&rating=`
    Request Method: [GET]
    Status Code: {200 OK}
    ```json
    // Example object for title search in products list 
    {
        "title": "Wide Bowknot Hat",
        "brand": "MAJIK",
        "price": 288,
        "id": 1,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
        "rating": "3.6"
    }
    ```

7. Rating filter API 
    Request URL: `https://apis.ccbp.in/products?sort_by=PRICE_HIGH&category=&title_search=&rating=4`
    Request Method:[GET]
    Status Code:{200 OK}


8. Get product details by id API 
    Request URL: `https://apis.ccbp.in/products/16`
    Request Method: [GET]
    Status Code: {200 OK} 
    ```json
    {
            "title": "Embroidered Net Gown",
            "brand": "Manyavar",
            "price": 62990,
            "id": 16,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
            "rating": "3.2"
        }
    ```

    ```json
    {
    "id": 16,
    "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
    "title": "Embroidered Net Gown",
    "style": "Embroidered Net Gown",
    "price": 62990,
    "description": "An Embroidered Net Gown is the clothing worn by a bride during a wedding ceremony. It enhances your beauty wearing this vibrant, gorgeous, and beautiful Wedding Gown. Find your dream wedding dress today. It features foldable, one hoop steel, two layers of tulles, and is elastic in the waist part. ",
    "brand": "Manyavar",
    "total_reviews": 879,
    "rating": 3.2,
    "availability": "In Stock",
    "similar_products": [
        {
            "id": 1,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
            "title": "Wide Bowknot Hat",
            "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
            "price": 288,
            "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
            "brand": "MAJIK",
            "total_reviews": 245,
            "rating": 3.6,
            "availability": "In Stock"
        },
        {
            "id": 2,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
            "title": "Plain Round Neck T-shirt",
            "style": "Plain Round Neck T-shirt",
            "price": 395,
            "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
            "brand": "Huetrap",
            "total_reviews": 120,
            "rating": 4.1,
            "availability": "In Stock"
        },
        {
            "id": 3,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
            "title": "Cotton Hoodie",
            "style": "Scott International Men's Cotton Hooded Hoodies",
            "price": 498,
            "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
            "brand": "Scott International",
            "total_reviews": 229,
            "rating": 3.8,
            "availability": "In Stock"
        }
    ]
    }
    ```