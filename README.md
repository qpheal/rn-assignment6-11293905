# rn-assignment6-11293905
# React Native Shopping App

# Introduction
This is a simple ladies' fashion shopping application built using React Native. The app features two primary screens: a HomeScreen displaying a list of products and a CartScreen that shows the selected items. Users can add products to their cart, view the cart, and remove items as needed. 
The cart is stored locally on the device using AsyncStorage.

# Features
- Screens
**HomeScreen**
Displays a list of available products.
Each product includes an image, name, kind, and price.
Users can add products to the cart by pressing the "Add" button.

- **CartScreen**
Shows the selected items in the cart.
Users can view the total cost of items in the cart.
Users can remove items from the cart.

- Components
- **Product List**
 Displays available products on the HomeScreen..
- **Cart View**
 Displays the items added to the cart on the CartScreen.
- **Local Storage**
Uses AsyncStorage to store selected items locally on the device.

# Functionality
Users should be able to:
- View a list of available products on the HomeScreen.
- Add products to their cart using the "Add to Cart" button.
- Remove products from their cart on the CartScreen.
- View the items in their cart on the CartScreen.

# Installation
1. **Clone the repository**
```bash
git clone https://github.com/qpheal/rn-assignment6-11293905.git
cd rn-assignment6-11293905
```

2. **Install dependencies**
```bash
Copy code
npm install
Install necessary libraries for React Native:
npx expo install

Run the application
npx expo start
```

# Screenshot
![Home Screen](<assets/Screenshot 2024-07-03 130834.png>)
![Home Screen2](<assets/Screenshot 2024-07-03 130913.png>)
![Cart Screen](<assets/Screenshot 2024-07-03 130948.png>)
![Cart Screen2](<assets/Screenshot 2024-07-03 133149.png>)

# Usage
1. **HomeScreen**
The HomeScreen lists products available for purchase.
Tap the "Add to Cart" button on any product to add it to the cart.
Navigate to the CartScreen by pressing the cart icon/ shopping bag.

2. **CartScreen**
The CartScreen shows items added to the cart.
Tap the "Remove" button to remove any item from the cart.
The total price of the cart items is displayed at the bottom.

# Dependencies
React Native: https://reactnative.dev/
React Navigation: https://reactnavigation.org/
AsyncStorage: https://react-native-async-storage.github.io/async-storage/
Expo: https://expo.dev/

# Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.