import express from "express";
import authRoutes from "./routes/auth";
import subsRoutes from "./routes/subs";
import articlesRoutes from "./routes/articles";
import StarSystemRoutes from "./routes/starsystems";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

mongoose.connect(
    process.env.MONGO_URI as string)
.then(() => {
    console.log("Connected to MongoDB");

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use("/auth", authRoutes);
    app.use("/subs", subsRoutes);
    app.use("/articles", articlesRoutes);
    app.use("/starsystem", StarSystemRoutes);

    app.listen(8080, () => {
        console.log(`Now Listening to port 8080`)
    });
})
.catch((error) => {
    console.log(error)
    throw new Error(error)
})


