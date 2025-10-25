import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.js';

dotenv.config();

// All products data
const products = [
  // Vegetables
  {
    name: "Fresh Potato 1kg",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"],
    description: [
      "Farm fresh potatoes",
      "Perfect for cooking",
      "Rich in nutrients",
    ],
    inStock: true,
  },
  {
    _id: "ve02b02c",
    name: "Fresh Tomato 500g",
    category: "Vegetables",
    price: 30,
    offerPrice: 25,
    image: ["https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500"],
    description: [
      "Juicy red tomatoes",
      "Perfect for salads",
      "Rich in vitamins",
    ],
    inStock: true,
  },
  {
    _id: "ve03c03d",
    name: "Fresh Carrot 500g",
    category: "Vegetables",
    price: 35,
    offerPrice: 30,
    image: ["https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500"],
    description: [
      "Crunchy and sweet",
      "High in beta-carotene",
      "Great for snacking",
    ],
    inStock: true,
  },
  {
    _id: "ve04d04e",
    name: "Fresh Spinach 250g",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    image: ["https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500"],
    description: [
      "Nutrient-rich greens",
      "Perfect for cooking",
      "High in iron",
    ],
    inStock: true,
  },
  {
    _id: "ve05e05f",
    name: "Fresh Onion 1kg",
    category: "Vegetables",
    price: 45,
    offerPrice: 40,
    image: ["https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500"],
    description: [
      "Essential ingredient",
      "Long shelf life",
      "Adds flavor",
    ],
    inStock: true,
  },

  // Fruits
  {
    _id: "fr01f06g",
    name: "Fresh Apple 1kg",
    category: "Fruits",
    price: 120,
    offerPrice: 110,
    image: ["https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"],
    description: [
      "Crisp and juicy",
      "Rich in fiber",
      "Perfect for snacking",
    ],
    inStock: true,
  },
  {
    _id: "fr02g07h",
    name: "Fresh Orange 1kg",
    category: "Fruits",
    price: 80,
    offerPrice: 75,
    image: ["https://images.unsplash.com/photo-1547514701-42782101795e?w=500"],
    description: [
      "High in Vitamin C",
      "Sweet and tangy",
      "Fresh from farm",
    ],
    inStock: true,
  },
  {
    _id: "fr03h08i",
    name: "Fresh Banana 1 dozen",
    category: "Fruits",
    price: 50,
    offerPrice: 45,
    image: ["https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500"],
    description: [
      "Energy-rich fruit",
      "Perfect for breakfast",
      "High in potassium",
    ],
    inStock: true,
  },
  {
    _id: "fr04i09j",
    name: "Fresh Mango 1kg",
    category: "Fruits",
    price: 150,
    offerPrice: 140,
    image: ["https://images.unsplash.com/photo-1553279768-865429fa0078?w=500"],
    description: [
      "King of fruits",
      "Sweet and delicious",
      "Rich in vitamins",
    ],
    inStock: true,
  },
  {
    _id: "fr05j10k",
    name: "Fresh Grapes 500g",
    category: "Fruits",
    price: 90,
    offerPrice: 85,
    image: ["https://images.unsplash.com/photo-1599819177908-58e3c4d6e3d0?w=500"],
    description: [
      "Sweet and seedless",
      "Perfect for snacking",
      "Antioxidant-rich",
    ],
    inStock: true,
  },

  // Dairy
  {
    _id: "da01k11l",
    name: "Fresh Milk 1L",
    category: "Dairy",
    price: 60,
    offerPrice: 55,
    image: ["https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500"],
    description: [
      "Pure and fresh",
      "Rich in calcium",
      "Daily essential",
    ],
    inStock: true,
  },
  {
    _id: "da02l12m",
    name: "Fresh Paneer 250g",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    image: ["https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=500"],
    description: [
      "Soft and fresh",
      "High in protein",
      "Perfect for cooking",
    ],
    inStock: true,
  },
  {
    _id: "da03m13n",
    name: "Farm Fresh Eggs 12pcs",
    category: "Dairy",
    price: 70,
    offerPrice: 65,
    image: ["https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500"],
    description: [
      "Farm fresh eggs",
      "Rich in protein",
      "Perfect for breakfast",
    ],
    inStock: true,
  },
  {
    _id: "da04n14o",
    name: "Fresh Yogurt 500g",
    category: "Dairy",
    price: 50,
    offerPrice: 45,
    image: ["https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500"],
    description: [
      "Creamy and delicious",
      "Probiotic-rich",
      "Good for digestion",
    ],
    inStock: true,
  },
  {
    _id: "da05o15p",
    name: "Fresh Cheese 200g",
    category: "Dairy",
    price: 100,
    offerPrice: 95,
    image: ["https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500"],
    description: [
      "Rich and creamy",
      "Perfect for pizza",
      "High in calcium",
    ],
    inStock: true,
  },

  // Drinks
  {
    _id: "dr01p16q",
    name: "Coca Cola 2L",
    category: "Drinks",
    price: 90,
    offerPrice: 85,
    image: ["https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500"],
    description: [
      "Refreshing beverage",
      "Perfect for parties",
      "Chilled drink",
    ],
    inStock: true,
  },
  {
    _id: "dr02q17r",
    name: "Pepsi 2L",
    category: "Drinks",
    price: 90,
    offerPrice: 85,
    image: ["https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500"],
    description: [
      "Cool and refreshing",
      "Party essential",
      "Ice cold drink",
    ],
    inStock: true,
  },
  {
    _id: "dr03r18s",
    name: "Orange Juice 1L",
    category: "Drinks",
    price: 120,
    offerPrice: 110,
    image: ["https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500"],
    description: [
      "100% natural juice",
      "Rich in Vitamin C",
      "No added sugar",
    ],
    inStock: true,
  },
  {
    _id: "dr04s19t",
    name: "Mineral Water 1L",
    category: "Drinks",
    price: 20,
    offerPrice: 18,
    image: ["https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500"],
    description: [
      "Pure drinking water",
      "Essential hydration",
      "Safe and clean",
    ],
    inStock: true,
  },
  {
    _id: "dr05t20u",
    name: "Iced Tea 500ml",
    category: "Drinks",
    price: 50,
    offerPrice: 45,
    image: ["https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500"],
    description: [
      "Refreshing tea drink",
      "Lemon flavor",
      "Perfect for summer",
    ],
    inStock: true,
  },

  // Bakery
  {
    _id: "ba01u21v",
    name: "Fresh Bread 400g",
    category: "Bakery",
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500"],
    description: [
      "Soft and fresh",
      "Perfect for breakfast",
      "Whole wheat option",
    ],
    inStock: true,
  },
  {
    _id: "ba02v22w",
    name: "Butter Croissant 6pcs",
    category: "Bakery",
    price: 120,
    offerPrice: 110,
    image: ["https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500"],
    description: [
      "Flaky and buttery",
      "French-style pastry",
      "Perfect for tea time",
    ],
    inStock: true,
  },
  {
    _id: "ba03w23x",
    name: "Chocolate Cake 500g",
    category: "Bakery",
    price: 300,
    offerPrice: 280,
    image: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"],
    description: [
      "Rich chocolate flavor",
      "Perfect for celebrations",
      "Moist and delicious",
    ],
    inStock: true,
  },
  {
    _id: "ba04x24y",
    name: "Butter Cookies 200g",
    category: "Bakery",
    price: 80,
    offerPrice: 75,
    image: ["https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500"],
    description: [
      "Crispy and buttery",
      "Perfect for tea time",
      "Traditional recipe",
    ],
    inStock: true,
  },
  {
    _id: "ba05y25z",
    name: "Vanilla Cupcakes 6pcs",
    category: "Bakery",
    price: 150,
    offerPrice: 140,
    image: ["https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500"],
    description: [
      "Soft and fluffy",
      "Vanilla frosting",
      "Perfect for parties",
    ],
    inStock: true,
  },

  // Grains
  {
    _id: "gr01z26a",
    name: "Basmati Rice 5kg",
    category: "Grains",
    price: 400,
    offerPrice: 380,
    image: ["https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"],
    description: [
      "Premium quality rice",
      "Long grain variety",
      "Aromatic and fluffy",
    ],
    inStock: true,
  },
  {
    _id: "gr02a27b",
    name: "Wheat Flour 5kg",
    category: "Grains",
    price: 250,
    offerPrice: 240,
    image: ["https://images.unsplash.com/photo-1628166386461-088327444fe4?w=500"],
    description: [
      "100% whole wheat",
      "Perfect for chapatis",
      "Natural and healthy",
    ],
    inStock: true,
  },
  {
    _id: "gr03b28c",
    name: "Quinoa 1kg",
    category: "Grains",
    price: 350,
    offerPrice: 330,
    image: ["https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500"],
    description: [
      "Superfood grain",
      "High in protein",
      "Gluten-free option",
    ],
    inStock: true,
  },
  {
    _id: "gr04c29d",
    name: "Brown Rice 2kg",
    category: "Grains",
    price: 180,
    offerPrice: 170,
    image: ["https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500"],
    description: [
      "Healthy whole grain",
      "Rich in fiber",
      "Nutrient-dense",
    ],
    inStock: true,
  },
  {
    _id: "gr05d30e",
    name: "Oats 1kg",
    category: "Grains",
    price: 150,
    offerPrice: 140,
    image: ["https://images.unsplash.com/photo-1574638061133-625a0d2d6d2e?w=500"],
    description: [
      "Rolled oats",
      "Perfect for breakfast",
      "Heart-healthy",
    ],
    inStock: true,
  },

  // Instant
  {
    _id: "in01e31f",
    name: "Instant Noodles 280g",
    category: "Instant",
    price: 30,
    offerPrice: 25,
    image: ["https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500"],
    description: [
      "Quick and easy meal",
      "Ready in 2 minutes",
      "Masala flavor",
    ],
    inStock: true,
  },
  {
    _id: "in02f32g",
    name: "Cup Noodles 70g",
    category: "Instant",
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500"],
    description: [
      "Instant cup noodles",
      "Just add hot water",
      "Convenient snack",
    ],
    inStock: true,
  },
  {
    _id: "in03g33h",
    name: "Instant Soup 50g",
    category: "Instant",
    price: 35,
    offerPrice: 30,
    image: ["https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500"],
    description: [
      "Hot and comforting",
      "Ready in minutes",
      "Vegetable flavor",
    ],
    inStock: true,
  },
  {
    _id: "in04h34i",
    name: "Instant Pasta 400g",
    category: "Instant",
    price: 60,
    offerPrice: 55,
    image: ["https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500"],
    description: [
      "Quick pasta meal",
      "Italian style",
      "Easy to prepare",
    ],
    inStock: true,
  },
  {
    _id: "in05i35j",
    name: "Ready to Eat Meal 300g",
    category: "Instant",
    price: 80,
    offerPrice: 75,
    image: ["https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?w=500"],
    description: [
      "Complete meal pack",
      "Heat and eat",
      "Variety of options",
    ],
    inStock: true,
  },

  // Snacks
  {
    _id: "sn01k30p",
    name: "Potato Chips 100g",
    category: "Snacks",
    price: 30,
    offerPrice: 25,
    image: ["https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500"],
    description: [
      "Crispy and crunchy",
      "Perfect for movie nights",
      "Multiple flavors available",
    ],
    inStock: true,
  },
  {
    _id: "sn02l31o",
    name: "Salted Peanuts 200g",
    category: "Snacks",
    price: 60,
    offerPrice: 55,
    image: ["https://images.unsplash.com/photo-1587049332358-223fd84e1a9c?w=500"],
    description: [
      "Crunchy and tasty",
      "High in protein",
      "Great snack option",
    ],
    inStock: true,
  },
  {
    _id: "sn03m32n",
    name: "Chocolate Cookies 150g",
    category: "Snacks",
    price: 80,
    offerPrice: 75,
    image: ["https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500"],
    description: [
      "Sweet and delicious",
      "Perfect for tea time",
      "Chocolate chip variant",
    ],
    inStock: true,
  },
  {
    _id: "sn04n33m",
    name: "Namkeen Mix 250g",
    category: "Snacks",
    price: 70,
    offerPrice: 65,
    image: ["https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500"],
    description: [
      "Traditional Indian snack",
      "Spicy and crispy",
      "Perfect for gatherings",
    ],
    inStock: true,
  },
  {
    _id: "sn05o34l",
    name: "Butter Popcorn 100g",
    category: "Snacks",
    price: 40,
    offerPrice: 35,
    image: ["https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500"],
    description: [
      "Light and fluffy",
      "Perfect for movie time",
      "Buttery flavor",
    ],
    inStock: true,
  },

  // Electronics
  {
    _id: "el01p35k",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 2499,
    offerPrice: 1999,
    image: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"],
    description: [
      "Premium sound quality",
      "30-hour battery life",
      "Noise cancellation feature",
    ],
    inStock: true,
  },
  {
    _id: "el02q36l",
    name: "Smart Watch Fitness Tracker",
    category: "Electronics",
    price: 3999,
    offerPrice: 2999,
    image: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"],
    description: [
      "Heart rate monitoring",
      "Sleep tracking",
      "Waterproof design",
    ],
    inStock: true,
  },
  {
    _id: "el03r37m",
    name: "Portable Power Bank 20000mAh",
    category: "Electronics",
    price: 1999,
    offerPrice: 1499,
    image: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500"],
    description: [
      "Fast charging support",
      "Multiple device charging",
      "LED battery indicator",
    ],
    inStock: true,
  },
  {
    _id: "el04s38n",
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    offerPrice: 599,
    image: ["https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"],
    description: [
      "Ergonomic design",
      "Silent clicks",
      "2.4GHz wireless connectivity",
    ],
    inStock: true,
  },
  {
    _id: "el05t39o",
    name: "USB-C Hub 7-in-1",
    category: "Electronics",
    price: 1499,
    offerPrice: 1199,
    image: ["https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500"],
    description: [
      "7 ports expansion",
      "4K HDMI support",
      "Fast data transfer",
    ],
    inStock: true,
  },

  // Clothing
  {
    _id: "cl01u40p",
    name: "Men's Cotton T-Shirt",
    category: "Clothing",
    price: 599,
    offerPrice: 449,
    image: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"],
    description: [
      "100% cotton fabric",
      "Comfortable fit",
      "Multiple colors available",
    ],
    inStock: true,
  },
  {
    _id: "cl02v41q",
    name: "Women's Denim Jeans",
    category: "Clothing",
    price: 1499,
    offerPrice: 1199,
    image: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"],
    description: [
      "Slim fit design",
      "Stretchable fabric",
      "Modern style",
    ],
    inStock: true,
  },
  {
    _id: "cl03w42r",
    name: "Casual Hoodie",
    category: "Clothing",
    price: 1299,
    offerPrice: 999,
    image: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"],
    description: [
      "Warm and cozy",
      "Fleece-lined interior",
      "Kangaroo pocket",
    ],
    inStock: true,
  },
  {
    _id: "cl04x43s",
    name: "Sports Track Pants",
    category: "Clothing",
    price: 899,
    offerPrice: 699,
    image: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500"],
    description: [
      "Breathable material",
      "Elastic waistband",
      "Perfect for workouts",
    ],
    inStock: true,
  },
  {
    _id: "cl05y44t",
    name: "Formal Shirt",
    category: "Clothing",
    price: 1099,
    offerPrice: 849,
    image: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"],
    description: [
      "Premium cotton blend",
      "Wrinkle-free fabric",
      "Professional look",
    ],
    inStock: true,
  },

  // Sports
  {
    _id: "sp01z45u",
    name: "Yoga Mat Anti-Slip",
    category: "Sports",
    price: 899,
    offerPrice: 699,
    image: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500"],
    description: [
      "6mm thickness",
      "Eco-friendly material",
      "Non-slip surface",
    ],
    inStock: true,
  },
  {
    _id: "sp02a46v",
    name: "Resistance Bands Set",
    category: "Sports",
    price: 699,
    offerPrice: 549,
    image: ["https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500"],
    description: [
      "5 resistance levels",
      "Portable and versatile",
      "Perfect for home workouts",
    ],
    inStock: true,
  },
  {
    _id: "sp03b47w",
    name: "Gym Dumbbell Set 20kg",
    category: "Sports",
    price: 2999,
    offerPrice: 2499,
    image: ["https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500"],
    description: [
      "Adjustable weight plates",
      "Chrome-plated handles",
      "Complete home gym solution",
    ],
    inStock: true,
  },
  {
    _id: "sp04c48x",
    name: "Sports Water Bottle 1L",
    category: "Sports",
    price: 399,
    offerPrice: 299,
    image: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"],
    description: [
      "BPA-free material",
      "Leak-proof design",
      "Perfect for gym and travel",
    ],
    inStock: true,
  },
  {
    _id: "sp05d49y",
    name: "Skipping Rope",
    category: "Sports",
    price: 299,
    offerPrice: 249,
    image: ["https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500"],
    description: [
      "Adjustable length",
      "Comfortable foam handles",
      "Great for cardio workouts",
    ],
    inStock: true,
  },

  // Home
  {
    _id: "ho01e50z",
    name: "Ceramic Dinner Set 24pcs",
    category: "Home",
    price: 2499,
    offerPrice: 1999,
    image: ["https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500"],
    description: [
      "Microwave safe",
      "Elegant design",
      "Complete dining solution",
    ],
    inStock: true,
  },
  {
    _id: "ho02f51a",
    name: "Non-Stick Cookware Set 5pcs",
    category: "Home",
    price: 3499,
    offerPrice: 2999,
    image: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500"],
    description: [
      "Premium non-stick coating",
      "Heat-resistant handles",
      "Dishwasher safe",
    ],
    inStock: true,
  },
  {
    _id: "ho03g52b",
    name: "Cotton Bed Sheet Set",
    category: "Home",
    price: 1499,
    offerPrice: 1199,
    image: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"],
    description: [
      "100% cotton fabric",
      "Soft and comfortable",
      "Double bed size",
    ],
    inStock: true,
  },
  {
    _id: "ho04h53c",
    name: "LED Table Lamp",
    category: "Home",
    price: 799,
    offerPrice: 649,
    image: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"],
    description: [
      "Adjustable brightness",
      "Modern design",
      "Energy efficient",
    ],
    inStock: true,
  },
  {
    _id: "ho05i54d",
    name: "Storage Organizer Boxes 3pcs",
    category: "Home",
    price: 699,
    offerPrice: 549,
    image: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
    description: [
      "Stackable design",
      "Durable plastic",
      "Perfect for decluttering",
    ],
    inStock: true,
  },

  // Beauty
  {
    _id: "be01j55e",
    name: "Face Serum Vitamin C",
    category: "Beauty",
    price: 899,
    offerPrice: 749,
    image: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500"],
    description: [
      "Anti-aging formula",
      "Brightens skin tone",
      "Dermatologist tested",
    ],
    inStock: true,
  },
  {
    _id: "be02k56f",
    name: "Natural Face Wash",
    category: "Beauty",
    price: 399,
    offerPrice: 329,
    image: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500"],
    description: [
      "Gentle cleansing",
      "Natural ingredients",
      "Suitable for all skin types",
    ],
    inStock: true,
  },
  {
    _id: "be03l57g",
    name: "Hair Serum Repair",
    category: "Beauty",
    price: 599,
    offerPrice: 499,
    image: ["https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500"],
    description: [
      "Repairs damaged hair",
      "Adds shine and smoothness",
      "Heat protection",
    ],
    inStock: true,
  },
  {
    _id: "be04m58h",
    name: "Moisturizing Cream",
    category: "Beauty",
    price: 699,
    offerPrice: 579,
    image: ["https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500"],
    description: [
      "24-hour hydration",
      "Non-greasy formula",
      "Suitable for daily use",
    ],
    inStock: true,
  },
  {
    _id: "be05n59i",
    name: "Sunscreen SPF 50",
    category: "Beauty",
    price: 499,
    offerPrice: 429,
    image: ["https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500"],
    description: [
      "Broad spectrum protection",
      "Water-resistant",
      "Lightweight formula",
    ],
    inStock: true,
  },
];

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

// Populate products
const populateProducts = async () => {
  try {
    console.log('🗑️  Dropping products collection...');
    await Product.collection.drop().catch(() => console.log('Collection does not exist, creating new one...'));
    
    console.log('📦 Adding products to database...');
    // Remove _id fields before inserting
    const productsToInsert = products.map(({ _id, ...product }) => product);
    await Product.insertMany(productsToInsert);
    
    console.log(`✅ Successfully added ${products.length} products to database!`);
    console.log('📊 Products by category:');
    console.log('   - Vegetables: 5');
    console.log('   - Fruits: 5');
    console.log('   - Dairy: 5');
    console.log('   - Drinks: 5');
    console.log('   - Bakery: 5');
    console.log('   - Grains: 5');
    console.log('   - Instant: 5');
    console.log('   - Snacks: 5');
    console.log('   - Electronics: 5');
    console.log('   - Clothing: 5');
    console.log('   - Sports: 5');
    console.log('   - Home: 5');
    console.log('   - Beauty: 5');
    console.log('   Total: 65 products');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error populating products:', error.message);
    process.exit(1);
  }
};

// Run the script
connectDB().then(() => populateProducts());
