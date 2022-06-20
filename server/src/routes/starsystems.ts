import express from "express";
import User from "../models/user";
import StarSystem from "../models/starsystem";
import { checkAuth } from "../middleware/checkAuth";
import { stripe } from "../utils/stripe";

const router = express.Router();

router.get("/", checkAuth, async (req, res) => {
    const user = await User.findOne({email: req.user});

    const subscriptions = await stripe.subscriptions.list(
        {
            customer: user.stripeCustomerId,
            status: "all",
            expand: ["data.default_payment_method"]
        },
        {
            apiKey: process.env.STRIPE_SECRET_KEY,
        }
    );

    if(!subscriptions.data.length) return res.json([]);

    // @ts-ignore
    const plan = subscriptions.data[0].plan.nickname;

    if (plan) {
        const StarSystems = await StarSystem.find({});
        return res.json(StarSystems);
    }

    res.json(plan);
});

export default router;