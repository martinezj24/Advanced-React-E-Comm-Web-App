Overview
This project is a full-stack application that utilizes the Fake Store API to manage user authentication and product catalog features. The application provides seamless user experience for browsing products, adding them to a shopping cart, and managing user profiles.

Key Features
User Management (CRUD)
Create User: Users can register by providing necessary information such as username, email, and password.
Login: Users can log in using their username/email and password. Upon successful login, the session is stored.
Update User: Users can update their profile information such as username, email, and password.
Delete User: Users can delete their accounts after confirmation.
Session Management
User authentication tokens and profile data are stored in session storage to persist authentication across different sessions and components.
Product Catalog
Product Listing: Display a catalog of products with essential details (title, price, description, category, and image).
Search and Sort: Users can search for products by title and price, and sort based on different criteria.
Category Navigation: Browse products within specific categories fetched from the backend API.
Shopping Cart: Users can add products to their shopping cart, update quantities, and remove items.
Checkout: Simulate checkout by clearing the cart and session storage after a successful purchase.
State Management
Redux Toolkit: Manage shopping cart state, including adding, updating, and removing products.
Session Storage for Cart: Cart data is persisted across different components and browser sessions using session storage.
Technologies Used
Frontend: React, TypeScript, HTML5, CSS3, Bootstrap Framework
State Management: Redux Toolkit
API: Fake Store API
Storage: Session Storage for authentication tokens and shopping cart data
Getting Started
Prerequisites
Node.js and npm installed
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/fake-store-api-project.git
Navigate to the project directory:
bash
Copy code
cd fake-store-api-project
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
Future Improvements
Add user profile pictures and address management.
Implement backend support for order processing.
