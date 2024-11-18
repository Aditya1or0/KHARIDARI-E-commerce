# KHARIDARI E-commerce

**KHARIDARI-E-commerce** is a fully functional clothing e-commerce website developed using the MERN stack (MongoDB, Express.js, React, Node.js). This project includes features such as user authentication, cart management, order handling, payment gateway integration (Stripe and Razorpay), and an admin panel for inventory and order management.

## Features

### User Features:
- **Login/Signup/Logout**: Secure user authentication system allowing users to register, login, and logout.
- **User Cart**: Users can add products to the cart, view their cart, and manage items before checkout.
- **Order Management**: Users can place orders and track their order history.
- **Responsive UI**: Fully responsive design built using **Tailwind CSS** for seamless use across different devices (desktop, tablet, mobile).
- **Payment Gateway Integration**: Integrated **Stripe** and **Razorpay** for secure online payments. Users can complete transactions easily and securely.

### Admin Features:
- **Admin Panel**: An intuitive admin panel for managing inventory, tracking orders, and viewing customer details.
- **Inventory Management**: Admin can add, update, or delete products in the inventory.
- **Order Management**: Admin can view, manage, and update the status of customer orders.
- **Shopping Cart System**: Admin can oversee the status of shopping carts and take necessary actions on orders.

## Tech Stack

- **Frontend**: 
  - React.js
  - Tailwind CSS for responsive and modern UI styling
  - React Router for navigation
  - Axios for making HTTP requests to the backend

- **Backend**: 
  - Node.js with Express.js for handling HTTP requests
  - MongoDB for database storage (using Mongoose for data modeling)
  - JWT (JSON Web Token) for user authentication and session management
  - Bcrypt.js for password hashing

- **Payment Integration**:
  - **Stripe** for processing credit/debit card payments
  - **Razorpay** for additional payment gateway support

## Installation

### Prerequisites:
- **Node.js** installed on your machine (preferably v14.x or higher)
- **MongoDB** instance running locally or remotely (e.g., MongoDB Atlas)
- **Stripe** and **Razorpay** account to get API keys

### Steps to Set Up the Project Locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/KHARIDARI-E-commerce.git
   cd KHARIDARI-E-commerce
Backend Setup (Server):

Navigate to the backend directory:

bash
Copy code
cd backend
Install the backend dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and add the following environment variables:

bash
Copy code
MONGODB_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>
Start the backend server:

bash
Copy code
npm start
Frontend Setup:

Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the frontend dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
Access the Application:

Open your browser and go to http://localhost:3000 to view the application.
Usage
Register/Login: Create a new user account or log in with an existing one.
Browse Products: Navigate through different clothing categories and add products to your cart.
Checkout: Once you're ready to purchase, proceed to checkout and make a payment via Stripe or Razorpay.
Admin Panel: If you're an admin, log in using the admin credentials to manage the inventory and orders.
Screenshots
Homepage:

Product Listing:

Admin Panel:

Contributing
Contributions are welcome! If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure that your code follows the project's coding standards.

How to Contribute:
Fork the repository
Create a new branch (git checkout -b feature-name)
Make your changes
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature-name)
Create a pull request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Tailwind CSS for the responsive styling framework.
Stripe and Razorpay for seamless and secure payment integration.
React.js for building the frontend user interface.
Node.js and Express.js for building the backend API.
