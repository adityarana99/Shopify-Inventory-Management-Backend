# Shopify Inventory Management Backend


## Backend
The backend of the Shopify Inventory Management application is developed using Node.js with Express, a lightweight web framework for building RESTful APIs. It provides endpoints for managing products in the inventory.

### API Endpoints
1. **GET /api/products**: Retrieves all products from the inventory.
2. **GET /api/products/:id**: Retrieves a specific product by its ID.
3. **POST /api/products**: Adds a new product to the inventory.
4. **PUT /api/products/:id**: Updates an existing product in the inventory.
5. **DELETE /api/products/:id**: Deletes a product from the inventory.

### Data Storage
In the backend, product data is stored in memory as an array of objects. Upon receiving requests, the server performs CRUD operations on this data array.

### Middleware
The backend uses middleware such as bodyParser and cors to handle request body parsing and enable cross-origin resource sharing (CORS) respectively.

### Server Configuration
The backend server listens on port 3000 by default. It can be started by running the `server.js` file using Node.js.


For backend Project run the command to start the server.

-> node server.js
