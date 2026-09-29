const sampleListings = [

    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1500,
        location: "Goa",
        country: "India"
    },

    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish modern loft apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2200,
        location: "Mumbai",
        country: "India"
    },

    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin surrounded by nature.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1800,
        location: "Manali",
        country: "India"
    },

    {
        title: "Luxury Villa with Pool",
        description: "Enjoy a luxurious stay in this beautiful private villa with a swimming pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80"
        },
        price: 4500,
        location: "Lonavala",
        country: "India"
    },

    {
        title: "Peaceful Lake House",
        description: "Relax beside the lake in this beautiful and peaceful holiday home.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2800,
        location: "Udaipur",
        country: "India"
    },

    {
        title: "Forest Cabin",
        description: "A cozy wooden cabin surrounded by beautiful green forests.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1900,
        location: "Jim Corbett",
        country: "India"
    },

    {
        title: "Royal Heritage Haveli",
        description: "Experience traditional Indian architecture in this beautiful heritage haveli.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3200,
        location: "Jaipur",
        country: "India"
    },

    {
        title: "Hilltop Wooden Cottage",
        description: "Enjoy stunning mountain views from this peaceful wooden cottage.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2100,
        location: "Shimla",
        country: "India"
    },

    {
        title: "Riverside Retreat",
        description: "Spend a relaxing weekend in this beautiful riverside property.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2500,
        location: "Rishikesh",
        country: "India"
    },

    {
        title: "Beach View Apartment",
        description: "Wake up to beautiful ocean views from this comfortable apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3000,
        location: "Pondicherry",
        country: "India"
    },

    {
        title: "Luxury City Apartment",
        description: "A modern apartment located close to the city's best attractions.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3500,
        location: "Delhi",
        country: "India"
    },

    {
        title: "Countryside Farm Stay",
        description: "Enjoy a peaceful farm stay surrounded by fields and fresh air.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1600,
        location: "Nashik",
        country: "India"
    },

    {
        title: "Snow Mountain Chalet",
        description: "A warm and cozy chalet perfect for a winter vacation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1000&q=80"
        },
        price: 4200,
        location: "Gulmarg",
        country: "India"
    },

    {
        title: "Tropical Garden Villa",
        description: "Stay in a beautiful villa surrounded by tropical gardens.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3800,
        location: "Alibaug",
        country: "India"
    },

    {
        title: "Minimalist Studio",
        description: "A clean and stylish studio for solo travelers and couples.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1700,
        location: "Bangalore",
        country: "India"
    },

    {
        title: "Desert Camp Stay",
        description: "Experience the magic of the desert with a unique camping stay.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2300,
        location: "Jaisalmer",
        country: "India"
    },

    {
        title: "Cliffside Ocean Villa",
        description: "Enjoy breathtaking ocean views from this stunning cliffside villa.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
        },
        price: 5000,
        location: "Varkala",
        country: "India"
    },

    {
        title: "Cozy City Home",
        description: "A comfortable home located in a quiet neighborhood near the city.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2000,
        location: "Pune",
        country: "India"
    },

    {
        title: "Tea Garden Cottage",
        description: "Relax among beautiful tea gardens in this peaceful cottage.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520637836862-4d197d17c92a?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2400,
        location: "Munnar",
        country: "India"
    },

    {
        title: "Lakefront Wooden House",
        description: "A beautiful wooden house with peaceful views of the lake.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2900,
        location: "Nainital",
        country: "India"
    },

    {
        title: "Luxury Palace Stay",
        description: "Experience royal hospitality in a luxurious palace-style property.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80"
        },
        price: 6000,
        location: "Udaipur",
        country: "India"
    },

    {
        title: "Modern Beach House",
        description: "A stylish beach house perfect for a relaxing vacation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3600,
        location: "Gokarna",
        country: "India"
    },

    {
        title: "Forest View Resort",
        description: "Wake up surrounded by trees and peaceful forest views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2700,
        location: "Mussoorie",
        country: "India"
    },

    {
        title: "Rooftop City Stay",
        description: "Enjoy amazing city views from this modern rooftop apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2600,
        location: "Hyderabad",
        country: "India"
    },

    {
        title: "Village Cottage",
        description: "Experience simple village life in this charming countryside cottage.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1200,
        location: "Seoni",
        country: "India"
    },

    {
        title: "Luxury Mountain Resort",
        description: "A premium resort surrounded by breathtaking Himalayan mountains.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80"
        },
        price: 4800,
        location: "Manali",
        country: "India"
    },

    {
        title: "Backwater Houseboat",
        description: "Enjoy a unique stay on a traditional houseboat surrounded by water.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80"
        },
        price: 4000,
        location: "Alappuzha",
        country: "India"
    },

    {
        title: "Heritage City Home",
        description: "Stay in a beautifully restored traditional home in the old city.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2800,
        location: "Jodhpur",
        country: "India"
    },

    {
        title: "Ocean Breeze Cottage",
        description: "A peaceful cottage where you can enjoy fresh ocean air.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2200,
        location: "Goa",
        country: "India"
    },

    {
        title: "Mountain View Apartment",
        description: "Comfortable apartment with beautiful views of the mountains.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2000,
        location: "Kasauli",
        country: "India"
    },

    {
        title: "Luxury Countryside Villa",
        description: "Relax in a spacious luxury villa surrounded by greenery.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80"
        },
        price: 4300,
        location: "Lonavala",
        country: "India"
    },

    {
        title: "Cozy Forest Retreat",
        description: "A peaceful retreat for travelers who love nature and quiet places.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1900,
        location: "Satpura",
        country: "India"
    },

    {
        title: "Sunset Beach Villa",
        description: "Watch beautiful sunsets from this comfortable beach villa.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3900,
        location: "Diu",
        country: "India"
    },

    {
        title: "Peaceful Hill House",
        description: "A quiet hill house perfect for families and friends.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2500,
        location: "Darjeeling",
        country: "India"
    },

    {
        title: "Urban Luxury Loft",
        description: "Modern luxury loft with premium interiors in the city center.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3300,
        location: "Gurgaon",
        country: "India"
    },

    {
        title: "Riverside Wooden Cabin",
        description: "Enjoy peaceful mornings beside the river in this wooden cabin.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2100,
        location: "Rishikesh",
        country: "India"
    },

    {
        title: "Garden Homestay",
        description: "A comfortable homestay with a beautiful private garden.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1500,
        location: "Bhopal",
        country: "India"
    },

    {
        title: "Royal Fort View Stay",
        description: "Stay close to historic forts and experience the culture of Rajasthan.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3100,
        location: "Jaisalmer",
        country: "India"
    },

    {
        title: "Tropical Island Cottage",
        description: "A peaceful island cottage surrounded by tropical beauty.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3400,
        location: "Andaman",
        country: "India"
    },

    {
        title: "Snow Valley Cabin",
        description: "Stay in a warm cabin surrounded by beautiful snowy mountains.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3700,
        location: "Auli",
        country: "India"
    },

    {
        title: "Modern Riverside Apartment",
        description: "A stylish apartment with beautiful views and modern facilities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2300,
        location: "Ahmedabad",
        country: "India"
    },

    {
        title: "Peaceful Farm Cottage",
        description: "Enjoy a relaxing countryside holiday surrounded by farmland.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1400,
        location: "Indore",
        country: "India"
    },

    {
        title: "Luxury Pool House",
        description: "A spacious holiday home with a private pool and modern interiors.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
        },
        price: 5200,
        location: "Goa",
        country: "India"
    },

    {
        title: "Quiet Lakeside Cottage",
        description: "Enjoy peaceful evenings beside the lake in this cozy cottage.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2400,
        location: "Bhimtal",
        country: "India"
    },

    {
        title: "City Center Studio",
        description: "A compact and comfortable studio in the center of the city.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1800,
        location: "Kolkata",
        country: "India"
    },

    {
        title: "Jungle Retreat",
        description: "Stay close to nature in this peaceful jungle retreat.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2600,
        location: "Kanha",
        country: "India"
    },

    {
        title: "Beachside Luxury Apartment",
        description: "Modern apartment just a short walk away from the beautiful beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3200,
        location: "Mumbai",
        country: "India"
    },

    {
        title: "Traditional Village Home",
        description: "Experience authentic local life in this traditional village home.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80"
        },
        price: 1100,
        location: "Seoni",
        country: "India"
    },

    {
        title: "Premium Hill Resort",
        description: "Enjoy premium comfort and stunning views at this hill resort.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1000&q=80"
        },
        price: 4100,
        location: "Mussoorie",
        country: "India"
    },

    {
        title: "Sunrise Mountain Cottage",
        description: "Wake up early and enjoy spectacular sunrise views from this cottage.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2300,
        location: "Kasol",
        country: "India"
    },

    {
        title: "Oceanfront Luxury Home",
        description: "A beautiful luxury home with stunning views of the ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
        },
        price: 5500,
        location: "Goa",
        country: "India"
    },

    {
        title: "Peaceful Nature Lodge",
        description: "A quiet lodge surrounded by trees and beautiful natural scenery.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2000,
        location: "Pachmarhi",
        country: "India"
    },

    {
        title: "Modern Holiday Home",
        description: "A stylish holiday home with comfortable rooms and modern facilities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3000,
        location: "Pune",
        country: "India"
    },

    {
        title: "Himalayan View Cottage",
        description: "Enjoy breathtaking Himalayan views from this cozy cottage.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2700,
        location: "Dharamshala",
        country: "India"
    },

    {
        title: "Beautiful Garden Villa",
        description: "A spacious villa surrounded by a beautiful green garden.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80"
        },
        price: 4400,
        location: "Bangalore",
        country: "India"
    },

    {
        title: "Lakeside Luxury Resort",
        description: "Relax in this premium resort with beautiful lakeside surroundings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3800,
        location: "Udaipur",
        country: "India"
    },

    {
        title: "Coastal Family Home",
        description: "A comfortable family home located close to the beautiful coastline.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2900,
        location: "Ratnagiri",
        country: "India"
    },

    {
        title: "Peaceful Forest Villa",
        description: "Enjoy a quiet vacation in this beautiful villa surrounded by forest.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=80"
        },
        price: 3500,
        location: "Coorg",
        country: "India"
    },

    {
        title: "Royal Rajasthan Home",
        description: "Experience the colors and culture of Rajasthan in this traditional home.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2600,
        location: "Jodhpur",
        country: "India"
    },

    {
        title: "Green Valley Retreat",
        description: "A peaceful retreat located in a beautiful green valley.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1000&q=80"
        },
        price: 2200,
        location: "Munnar",
        country: "India"
    }

];

module.exports = { data: sampleListings };


//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];

module.exports = { data: sampleListings };