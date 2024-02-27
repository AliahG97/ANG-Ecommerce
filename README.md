# ANG-Ecommerce

## Description
The ANG Ecommerce app is a tool made with sequelize, inquirer, express.js and mySQL. It helps companies keep track of their products easily by letting them see and control product information on the backend. It's made to be simple for e-commerce developers or store managers to  easily access the backend to view product data, and keep all product information updated in a simple way. They can perform CRUD operations (Create, Read, Update, Delete) to view all current products, find products by categories or unique id, add new products, update product information, and delete products in real-time via interactive API calls connected to the server.

## Table of contents
- [Installation](#installation)
- [Screenshot](#screenshot)
- [Features](#features)
- [Usage](#usage)
- [credits](#credits)
- [License](#license)
- [Contributing](#contributing)


## Installation
1. Copy and paste the repo in the terminal
2. Git clone https://github.com/AliahG97/ANG-ecommerce.git
3. Run "npm install" to install the necessary dependencies, including inquirer version 8.2.4.
4. Set up your mySQL database by importing the provided schema and seeds files.
5. Update the database connection details (PORT) in the application code.

## Screenshot
![ReadMe Gen Screenshot](./Assets/ang-ecommerce-screenshot.gif)
https://aliahg97.github.io/ANG-ecommerce/ View MP4 Video HERE: https://youtu.be/BWXoAra7djE


## Features

1. GET all products: Use the GET all products API call to find all products.

2. GET product by id: Use the GET product by id API call to find a specific product by its unique product id.

3. GET category: Use the GET category API call to find all categories. Search by "categories/id", to find a specific product in that category by their unique product id

4. POST new product: Use the POST new product API call to create a new product.

5. PUT update product: Use the PUT update product API call to update an existing product by its unique product id.

6. DELETE Product: Use the DELETE Product API call to delete an existing product by its unique product id.


## Usage
This app is ideal for an e-commerce developer or manager who wants to efficiently track and update their product information in the online store database.

## Credits
Aliah Guerra (https://github.com/AliahG97)

## License
Creative Commons License
by Aliah Guerra 2024. Confidential and Proprietary. All Rights Reserved.

## Contributing
- Add a search by category name API route instead of just search by category id (which is a foreign key referencing the primary key from the product id).

## Testing
1. Cd to project file
2. npm install
3. npm run seed
4. npm start
5. run each API call/ route in Insomnia according to the appropriate route path (add id to search by id, category, update, and delete)
6. press send to run the request
7. Search all products or search by id to verify new products created, updated, or deleted



