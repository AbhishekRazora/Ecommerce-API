
# ⚠️Ecommerce API

This is a REST API for an ecommerce platform admin to manage product inventory

* This project is made with NODEJS along with express

* We use mongoDB to store and fetch data
## Installation

1) Clone the repo in your local machine then run following commands in terminal.

```bash
  npm install 
````
2) Execute below command to run the server

````bash
 node server.js
 ````

 
    
## Demo

https://ecommerce-api-owrk.onrender.com


## API 

#### Get all products

```http
  GET /products
```
#### Create products

```http
POST /products/create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. And **Unique** |
| `quantity`|`number`|**Required** . And quantity>0|

#### Get product

```http
  GET /products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

#### Update product

```http
  PATCH  /products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to update |

#### Delete product

```http
  DELETE  /products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to delete |


#### Update product quantity

```http
  GET /products/:id/update_quantity/?number=${num}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to update_quantity |
|`?number=n`|`quert string`|**Required**. eg ?number=100


## Screenshots

1)  API to add products to the database
    **URL [POST]: /products/create**

![createProduct](https://github.com/AbhishekRazora/Ecommerce-API/assets/121525854/0dfaddf7-e707-422f-b193-13efc9e34712)

2)API to list products
    **URL [GET] : /products**


![getAllProducts](https://github.com/AbhishekRazora/Ecommerce-API/assets/121525854/1e2046e9-8428-4cc9-93ff-2f9a5e08237e)

3) API to delete products
    **URL [DELETE] : /products/:id**

![deleteProduct](https://github.com/AbhishekRazora/Ecommerce-API/assets/121525854/289e358d-4dfb-404e-8e97-f6abba4ed42d)


4) API to update quantity of a product (can be incremented or decremented)
    **URL [POST] : /products/:id/update_quantity/?number=10**

![updateQuantity](https://github.com/AbhishekRazora/Ecommerce-API/assets/121525854/8010a09e-6ded-4667-ba05-c61759f8c52b)

5) API to get product 
    **URL [GET] : /products/:id**
         ![getProductByID](https://github.com/AbhishekRazora/Ecommerce-API/assets/121525854/f2cd54d6-1ee4-42cc-a9e6-9da02bc7e8cc)

6) API to update product
    **URL [PATCH] : /products/:id**
  ![updateProduct](https://github.com/AbhishekRazora/Ecommerce-API/assets/121525854/9d410c44-6eef-4d9e-b778-6346680bad5c)         





## Author

- [@Abhishek Razora](https://github.com/AbhishekRazora)

