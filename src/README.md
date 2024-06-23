# Product REST API

## Description
 A REST API to manage the collection the product using Express.js and PostgreSQL


 ##Setup

1. clone repository
2. Navigate to the project directory
3. install dependencies :npm intall (express, pg, dotenv, nodemon) 
4. create `.env` file with the following variables:

  """
- PG_USER=postgres
- PG_PASSWORD=abdi
- PG_HOST=localhost
- PG_PORT=5432
- PG_DATABASE=productdb

"""


5. Ensure PostgreSQL is running and the database is set up with the provided SQL script.
6. Start the server: `npm run start:watch` for development with nodemon.

## Endpoint

-  GET `/products` - Get all products
- GET `/products/:id` - Get a single product by ID
- POST `/products` - Create a new product
- patch `/products/:id` - Update the product partially
- PUT `/products/:id` - Update a product by ID
- DELETE `/products/:id` - Delete a product by ID