# page 1

>list of categories
* http://localhost:9310/categories
* https://nodeliciousapi.onrender.com/categories
>list of Best Sellers
* http://localhost:9310/bestsellers
* https://nodeliciousapi.onrender.com/bestsellers
>list of Boneless Cuts
* http://localhost:9310/bonelesscuts
* https://nodeliciousapi.onrender.com/bonelesscuts

# page 2

> Items wrt to category
* http://localhost:9310/CategoryDetail/5
* https://nodeliciousapi.onrender.com/CategoryDetail/5
> Items wrt to category and Category Type
* http://localhost:9310/CategoryDetail/1?catType=Today%27s%20Deals
* https://nodeliciousapi.onrender.com/CategoryDetail/1?catType=Today%27s%20Deals

# page 3
> Details of the item
* http://localhost:9310/detail/5
* https://nodeliciousapi.onrender.com/detail/5


# page 4

>Item Details
* http://localhost:9310/item  (POST)
* https://nodeliciousapi.onrender.com/item (POST)
{
    "id" : [3,4,53]
}

>Place Order
* http://localhost:9310/placeOrder (POST)
* https://nodeliciousapi.onrender.com/placeOrder (POST)
{
        "order_id": "5",
        "name": "Sai",
        "email": "Sai@gmail.com",
        "address": "Hno 23,Sector 1",
        "phone": 768768686,
        "cost": 787,
        "status": "Pending",
        "Items": [
            3,
            5,
            7
        ]
    }

# page 5

>List of Orders
* http://localhost:9310/orders
* https://nodeliciousapi.onrender.com/orders

>Order wrt to email
* http://localhost:9310/orders?email=sai@gmail.com
* https://nodeliciousapi.onrender.com/orders?email=sai@gmail.com

>Update payment details
* http://localhost:9310/updateOrder/5 (PUT)
* https://nodeliciousapi.onrender.com/updateOrder/5 (PUT)

>Delete orders (DELETE)
* http://localhost:9310/deleteOrder/63cf888492db6febb2069463
* https://nodeliciousapi.onrender.com/deleteOrder/63cfac5fec326a10dd74bea4


/******GetAllUser*****/
(GET)> http://3.17.216.66:5000/api/auth/users
https://loginlicious.onrender.com/api/auth/users

/******Register*****/
(POST)> http://3.17.216.66:5000/api/auth/register
https://loginlicious.onrender.com/api/auth/register
(body) => {"name":"Aakash", "email":"aa@gmail.com","password":"12345678","phone":343432,role?":"user"}

/******Login*****/
(POST) => http://3.17.216.66:5000/api/auth/login
https://loginlicious.onrender.com/api/auth/login
(body)  => {"email":"aa@gmail.com","password":"12345678"}
(response)=> {auth:true,token:'dgsdg'}

/******UserInfo*****/
(GET) => http://3.17.216.66:5000/api/auth/userinfo
https://loginlicious.onrender.com/api/auth/userinfo
(Header) => {'x-access-token':'token value from login'}