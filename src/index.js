import express from "express";
import path from "path";

const app = express();

app.post("/api/auth", (req, res) => {
    res.status(400).json({ errors: { global: "Invalid Credentials Moron!" } });
});

app.get("/api", (req, res) => {
    res.status(400).json({ success: true });
});

app.get("/*", (req, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8900, () => console.log("Running on 8900 Damn Nerd"));
