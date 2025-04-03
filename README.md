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
<br>
Tech Stack <br>
Backend:Node.js, Express.js <br>
Database: MongoDB <br>
Authentication: JWT (JSON Web Token) <br>
Testing: Postman,ThuderClient <br>

 Project Structure <br>
backend <br>
├──  controllers <br>
│   ├── user.controller.js <br>
│   ├── product.js <br>
│   ├── cart.js <br>
├──  models <br>
│   ├── userSchema.js <br>
│   ├── productSchema.js <br>
│   ├── cartSchema.js <br>
├──  routes <br>
│   ├── userRoute.js <br>
│   ├── productRoutes.js <br>
│   ├── cartRoutes.js <br>
├──  middleware <br>
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

Screenshot <br>
![Image](https://github.com/user-attachments/assets/783252c7-355f-4bed-a4d8-81b792b8a104) <br>

![Image](https://github.com/user-attachments/assets/772b9823-88b6-45bf-9e50-aab64d418d00) <br>

![Image](https://github.com/user-attachments/assets/dd4c0ce2-9b29-410b-9951-85539b8bff99) <br>

![Image](https://github.com/user-attachments/assets/3a4ee254-f9d0-48ef-a461-c3291fdc415e) <br>

![Image](https://github.com/user-attachments/assets/21d05d3d-439d-49f8-b3ae-2536d07215bf) <br>

![Image](https://github.com/user-attachments/assets/10539a8b-3098-40b3-9b60-24fafe3cb41c) <br>

![Image](https://github.com/user-attachments/assets/0cc16d73-29a6-4f4e-86a0-694d76be2f46) <br>

![Image](https://github.com/user-attachments/assets/6ea42ffb-e6d4-41c8-b12e-3709bbce5003) <br>
