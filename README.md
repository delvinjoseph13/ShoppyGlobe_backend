E-Commerce API <br>

Introduction <br>
This is a Node.js and Express-based REST API for an e-commerce platform, supporting product management, user authentication, and cart functionality.<br>
<br>
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
📦backend <br>
├── 📂 controllers <br>
│   ├── user.controller.js <br>
│   ├── product.js <br>
│   ├── cart.js <br>
├── 📂 models <br>
│   ├── userSchema.js <br>
│   ├── productSchema.js <br>
│   ├── cartSchema.js <br>
├── 📂 routes <br>
│   ├── userRoute.js <br>
│   ├── productRoutes.js <br>
│   ├── cartRoutes.js <br>
├── 📂 middleware <br>
│   ├── authorization.js <br>
├── server.js <br>
├── .env <br>
├── package.json <br>
├── README.md <br>

API Endpoints <br>
Authentication <br>

Method     Endpoint          Description <br>
POST       /register         Register a new user <br>
POST       /login            login & token <br>
<br>
Product Management<br>

Method    Endpoint           Description <br>
GET       /products/         Get all products <br>
GET       /products/:id      Get product by ID <br>
POST      /products/product  Add a new product <br>
DELETE    /products/:id      Delete a product <br>

Cart Functionality <br>
<br>
Method     Endpoint         Description<br>
GET        /cart/           Get all cart items<br>
POST       /cart/           Add an item to cart<br>
PUT        /cart/:id        Update cart item qty<br>
DELETE     /cart/:id        Remove item from cart<br>
