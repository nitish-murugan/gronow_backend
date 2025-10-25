import Order from "../models/Order.js";
import Product from "../models/Product.js";
import stripe from "stripe"
import User from "../models/User.js"

// Place Order COD : /api/order/cod
export const placeOrderCOD = async (req, res)=>{
    try {
        const { userId, items, address } = req.body;
        if(!address || items.length === 0){
            return res.json({success: false, message: "Invalid data"})
        }
        // Calculate Amount Using Items
        let amount = await items.reduce(async (acc, item)=>{
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        // Add Tax Charge (2%)
        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        });

        return res.json({success: true, message: "Order Placed Successfully" })
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

// Place Order Stripe : /api/order/stripe
export const placeOrderStripe = async (req, res)=>{
    try {
        const { userId, items, address } = req.body;
        const {origin} = req.headers;

        if(!address || items.length === 0){
            return res.json({success: false, message: "Invalid data"})
        }

        let productData = [];

        // Calculate Amount Using Items
        let amount = await items.reduce(async (acc, item)=>{
            const product = await Product.findById(item.product);
            productData.push({
                name: product.name,
                price: product.offerPrice,
                quantity: item.quantity,
            });
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        // Add Tax Charge (2%)
        amount += Math.floor(amount * 0.02);

       const order =  await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "Online",
            isPaid: false // Don't mark as paid until payment is verified
        });

    // Stripe Gateway Initialize    
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

    // create line items for stripe
     const line_items = productData.map((item)=>{
        return {
            price_data: {
                currency: "usd",
                product_data:{
                    name: item.name,
                },
                unit_amount: Math.floor(item.price + item.price * 0.02)  * 100
            },
            quantity: item.quantity,
        }
     })

     // create session with automatic confirmation
     const session = await stripeInstance.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: `${origin}/payment-verification?success=true&orderId=${order._id}`,
        cancel_url: `${origin}/payment-verification?success=false&orderId=${order._id}`,
        payment_intent_data: {
            capture_method: 'automatic',
        }
     });

        return res.json({success: true, url: session.url });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}
// Verify Stripe Payment : /api/order/verify-payment
export const verifyStripePayment = async (req, res) => {
    try {
        const { orderId, success } = req.query;
        
        if (success === 'true') {
            // Mark order as paid
            await Order.findByIdAndUpdate(orderId, { isPaid: true });
            
            // Get the order to find the user
            const order = await Order.findById(orderId);
            
            if (!order) {
                return res.json({ success: false, message: "Order not found" });
            }
            
            // Clear user cart after successful payment - using empty object
            const updatedUser = await User.findByIdAndUpdate(
                order.userId, 
                { $set: { cartItems: {} } }, 
                { new: true }
            );
            
            if (!updatedUser) {
                return res.json({ success: false, message: "User not found" });
            }
            
            return res.json({ 
                success: true, 
                message: "Payment verified successfully",
                userId: order.userId,
                clearCart: true
            });
        } else {
            // Payment failed or was canceled
            await Order.findByIdAndDelete(orderId);
            return res.json({ success: false, message: "Payment failed or canceled" });
        }
    } catch (error) {
        console.error("Payment verification error:", error);
        return res.json({ success: false, message: error.message });
    }
}


// Get Orders by User ID : /api/order/user
export const getUserOrders = async (req, res)=>{
    try {
        const { userId } = req.body;
        const orders = await Order.find({
            userId,
            $or: [{paymentType: "COD"}, {isPaid: true}]
        }).populate("items.product address").sort({createdAt: -1});
        res.json({ success: true, orders });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}


// Get All Orders ( for seller / admin) : /api/order/seller
export const getAllOrders = async (req, res)=>{
    try {
        const orders = await Order.find({
            $or: [{paymentType: "COD"}, {isPaid: true}]
        }).populate("items.product address").sort({createdAt: -1});
        res.json({ success: true, orders });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}