import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { checkAuth } from "../middleware/checkAuth";
import { stripe } from "../utils/stripe";


const router = express.Router();

router.post("/signup", 
body("email").isEmail().withMessage("The Email is Invalid"), 
body("password").isLength({ min: 8 }).withMessage("The Password is invalid"),
async (req, res) => {

    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()){
        const errors = validationErrors.array().map(error => {
            return {
                msg: error.msg
            }
        });

        return res.json({ errors, data: null });
    }

    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(user) {
        return res.json({
            errors: [
                {
                    msg: "Email already in Use",
                },
            ],
            data: null,
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const customer = await stripe.customers.create(
        {
            email,
        }, 
        {
            apiKey: process.env.STRIPE_SECRET_KEY,
        }
    );

    const newUser = await User.create({
        email,
        password: hashedPassword,
        customerStripeId: customer.id,
    });

    const token = await JWT.sign(
        {email: newUser.email},
        process.env.JWT_Secret as string,
        {
            expiresIn: 360000,
        }
    );

    res.json({
        errors: [],
        data: {
            token,
            user: {
                id:newUser._id,
                email: newUser.email,
                stripeCustomerId: customer.id,
            },
        },
    });
  }
);

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(!user) {
        return res.json({
            errors: [
                {
                    msg: "Invalid Credentials"
                }
            ],
            data: null
        })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.json({
            errors: [
                {
                    msg: "Invalid Credentials"
                }
            ],
            data: null
        })
    }

    const token = await JWT.sign(
        {email: user.email},
        process.env.JWT_Secret as string,
        {
            expiresIn: 360000,
        }
    );

    return res.json({
        errors: [],
        data: {
            token,
            user: {
                id: user._id,
                email: user.email,
            },
        },
    });
});

router.get('/me', checkAuth, async (req, res) => {
    const user = await User.findOne({email: req.user});

    return res.json({
        errors: [],
        data: {
            user: {
                id: user._id,
                email: user.email,
                stripeCustomerId: user.stripeCustomerId,
            }
        }
    })
});

export default router;