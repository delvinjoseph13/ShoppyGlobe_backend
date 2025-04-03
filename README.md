E-Commerce API <br>

Introduction <br>
This is a Node.js and Express-based REST API for an e-commerce platform, supporting product management, user authentication, and cart functionality.<br>
Features<br>
User Authentication (Register/Login with JWT)<br>
Product Management (CRUD Operations)<br>
Cart Functionality (Get,Add, Update, Remove Items)<br>
Secure API with JWT Authentication<br>
MongoDB Database Integration<br>
Tech Stack <br>
Backend:Node.js, Express.js <br>
Database: MongoDB <br>
Authentication: JWT (JSON Web Token) <br>
Testing: Postman,ThuderClient <br>

 Project Structure <br>
📦backend
├── 📂 controllers
│   ├── user.controller.js
│   ├── product.js
│   ├── cart.js
├── 📂 models
│   ├── userSchema.js
│   ├── productSchema.js
│   ├── cartSchema.js
├── 📂 routes
│   ├── userRoute.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
├── 📂 middleware
│   ├── authorization.js
├── server.js
├── .env
├── package.json
├── README.md

API Endpoints <br>
Authentication <br>

Method     Endpoint          Description
POST       /register         Register a new user
POST       /login            login & token
Product Management<br>

Method    Endpoint           Description
GET       /products/         Get all products
GET       /products/:id      Get product by ID
POST      /products/product  Add a new product
DELETE    /products/:id      Delete a product

Cart Functionality

Method     Endpoint         Description
GET        /cart/           Get all cart items
POST       /cart/           Add an item to cart
PUT        /cart/:id        Update cart item qty
DELETE     /cart/:id        Remove item from cart
