# Sweet Treats
### Concept
Sweet Treats is an online site where customer is able to order any customized dessert they want. Customers will be able to extensively describe how they want their dessert made, advise of allergies, and select their budget when submitting.

### Frontend Technologies Used

* React
* CSS
* JavaScript

### Routes
|Path|Action| Description
|----|----|----|
|'/'| Main | Homepage displays images of previous desserts made and a button that takes user to the create route.
|'/sweettreats/create'| Create| Create page will allow user to create a customized order.
|'/sweettreats/:id' | Show | Show page will display customized order details and will give customers the option to update and/or delete.
|'/sweettreats/update/:id' | Update | Will update the customized order.
|'/sweettreats/delete/:id' | Delete | Will delete the customized order.

### React Components Overview

* **Navigation Bar** will allow users to navigate from main screen, customized orders screen, and an "About Me" section.
* **Search Bar** will allow users to search through their customized orders so they can re-order or modify.
* **About Me** will display background info and insight into the business and success of the baker.

### Model

|Name|Data Type|
|----|----|
|id| Serial |
| Dessert Name | varchar(50)
| Allergies | Boolean|
| Dessert Details | varchar(250) |
| Email | varchar(50)|
| Budget | varchar(6)|

### Mockups

##### Landing Page
![Landing Page](https://i.imgur.com/AO8SdFV.png)

##### Create Page
![Create Page](https://i.imgur.com/4iHktP7.png)
(will also include an "Add To Cart Button" which will lead to Show page)