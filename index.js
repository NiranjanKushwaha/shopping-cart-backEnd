const express = require("express");
const cors = require("cors");
const port = process.env.port || 8000;
const products = require("./products");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/products", (req, res) => {
    res.send(products)
})

app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const matchingProduct = products.filter((product) => product.id === id);

    if (matchingProduct) {
        res.json(matchingProduct);
    } else {
        res.status(404).send("Product not found");
    }
});

app.listen(port,
    console.log(`shopping server running on port ${port}`)
)