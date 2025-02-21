Expense Tracker

Objective

The Expense Tracker is a web application that allows users to track their income and expenses, categorize transactions, and generate insightful reports. This application helps users manage their finances effectively.

Technologies Used

Backend: Node.js, Express.js

Database: MongoDB

Frontend: EJS (Embedded JavaScript Templates)

CSS: Bootstrap (Optional for styling)

Features & Functionalities

CRUD Operations

Create: Users can add new income or expense entries with fields like description, amount, category (e.g., Food, Rent, Salary), and date.

Read: Displays a list of all transactions on the dashboard.

Update: Users can edit existing transactions.

Delete: Users can remove incorrect or outdated transactions.

Project Structure

Expense-Tracker/
│── models/
│   └── transaction.js  # Transaction model
│── routes/
│   └── transactions.js # Routes for CRUD operations
│── views/
│   ├── index.ejs       # Displays transaction history
│   ├── addTransaction.ejs # Form for adding/editing transactions
│── public/
│   ├── css/            # Styling files (Bootstrap or custom CSS)
│── controllers/
│   └── transactionController.js # Handles CRUD logic
│── config/
│   └── database.js      # MongoDB connection setup
│── app.js              # Main Express application
│── package.json        # Project dependencies
│── README.md           # Project documentation

Installation & Setup

Clone the repository:

git clone <repository-url>
cd Expense-Tracker

Install dependencies:

npm install

Set up MongoDB connection:

Create a .env file and add your MongoDB URI:

MONGO_URI=mongodb://localhost:27017/expense-tracker

Run the application:

npm start

Access the application:

Open http://localhost:3000 in your browser.

API Routes

Method

Endpoint

Description

GET

/transactions

Get all transactions

POST

/transactions

Add a new transaction

PUT

/transactions/:id

Update a transaction

DELETE

/transactions/:id

Delete a transaction

Deadline

This project should be completed within 4 hours.

Author

Janvi Kakadiya

License

This project is licensed under the MIT License.
