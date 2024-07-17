# Expense-Tracker

## Description
Expense-Tracker is a MERN stack project designed to help users manage their monthly expenses. Users can register and sign in securely using JSON Web Tokens (JWT). Once logged in, users have an initial expense limit of 10,000 for the month, which they can update as needed. Users can add expense items, and the amounts will be deducted from the monthly limit. The app provides a graphical representation of the remaining balance for the month. Users can also delete entered items and change the month to view previous month's expenses.

## Features
- User registration and secure login with JWT.
- Initial monthly expense limit of 10,000, which can be updated.
- Add expense items with name and amount.
- Deduction of expense amount from the monthly limit.
- Graphical representation of remaining balance.
- Deletion of expense items.
- View and manage expenses for different months.

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- JSON Web Token (JWT)
- TypeScript (used in the backend)
- Mantine UI (used for frontend UI)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/RijoKsd/Expense-Tracker.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Expense-Tracker
   ```
3. Install server dependencies:
   ```sh
   cd server
   npm install
   ```
4. Install client dependencies:
   ```sh
   cd ../client
   npm install
   ```

## Usage
1. Start the server:
   ```sh
   cd server
   npm run server
   ```
2. Start the client:
   ```sh
   cd ../client
   npm run dev
   ```

## Project Structure
The project consists of two main folders:
- `client`: Contains the React frontend code.
- `server`: Contains the Express.js backend code with TypeScript.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.

## GitHub Repository
[Expense-Tracker GitHub Repository](https://github.com/RijoKsd/Expense-Tracker)
