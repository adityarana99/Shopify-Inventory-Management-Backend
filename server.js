

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors package

const app = express();
const PORT = process.env.PORT || 3000;

// Use bodyParser and cors middleware
app.use(bodyParser.json());
app.use(cors());



// Example data - in a real application, this would be stored in a database
let products = [
    { id: 1, name: 'Product 1', description: 'Description 1', image: 'image1.jpg', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', image: 'image2.jpg', price: 20 }
];

app.use(bodyParser.json());



// By adding app.use(cors()), we are allowing requests from any origin. If we want to restrict it to specific origins, we can pass options to cors().
// For example, to allow requests only from http://localhost:4200 (assuming your Angular app is running on port 4200 during development).

// app.use(cors({
//     origin: 'http://localhost:4200'
// }));

app.use(cors());





// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

// Add a new product
app.post('/api/products', (req, res) => {
    const product = req.body;
    product.id = products.length + 1; // Assign a new ID
    products.push(product);
    res.status(201).json(product);
});

// Update an existing product
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    products[index] = req.body;
    res.json(products[index]);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(product => product.id !== productId);
    res.sendStatus(204); // No content
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
