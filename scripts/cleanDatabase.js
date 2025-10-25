import mongoose from 'mongoose';
import 'dotenv/config';

// Import models
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import Address from '../models/Address.js';

const cleanDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Get counts before cleanup
        const userCount = await User.countDocuments();
        const productCount = await Product.countDocuments();
        const orderCount = await Order.countDocuments();
        const addressCount = await Address.countDocuments();

        console.log('\n📊 Current Database Status:');
        console.log(`Users: ${userCount}`);
        console.log(`Products: ${productCount}`);
        console.log(`Orders: ${orderCount}`);
        console.log(`Addresses: ${addressCount}`);

        // Confirm deletion
        console.log('\n⚠️  Warning: This will delete all data from the database!');
        console.log('To proceed, uncomment the deletion lines in the script.\n');

        // UNCOMMENT THE LINES BELOW TO ACTUALLY DELETE DATA
        // await User.deleteMany({});
        // await Product.deleteMany({});
        // await Order.deleteMany({});
        // await Address.deleteMany({});
        
        // console.log('✅ All data has been removed from the database');
        // console.log(`Deleted ${userCount} users`);
        // console.log(`Deleted ${productCount} products`);
        // console.log(`Deleted ${orderCount} orders`);
        // console.log(`Deleted ${addressCount} addresses`);

        console.log('\n💡 Script completed. No data was deleted (lines are commented).');
        console.log('To actually delete data, uncomment the deletion lines in cleanDatabase.js');

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        // Close connection
        await mongoose.connection.close();
        console.log('\n🔌 Database connection closed');
        process.exit(0);
    }
};

// Run the cleanup
cleanDatabase();
