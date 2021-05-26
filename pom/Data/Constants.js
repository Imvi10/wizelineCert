import dotenv from "dotenv";

const result = dotenv.config()

export const CONSTANTS = {
    VALID_USER: {
        USERNAME: process.env.TESTUSERNAME,
        PASSWORD: process.env.TESTPASSWORD
    },
    INVALID_USER: {
        USERNAME: process.env.TESTUSERNAME,
        PASSWORD: process.env.TESTINVALIDPASSWORD
    },
    INFORMATION:{
      FIRST_NAME: "Ivan",
      LAST_NAME:  "Villegas",
      ZIP_CODE:  "37000"
    },
    TEXT_LOCATORS: {
        EMPTY_CREDENTIALS_ERROR_MESSAGE: "Epic sadface: Username is required",
        INVALID_CREDENTIALS_ERROR_MESSAGE: "Epic sadface: Username and password do not match any user in this service",
        SHOPPING_CART_TITLE: "YOUR CART",
        QTY1: "1",
        QTY2: "2",
        LOGOUT: "LOGOUT",
        CONTINUE_SHOPPING_BUTTON: "CONTINUE SHOPPING",
        CHECKOUT_BUTTON: "CHECKOUT",
        ADD_TO_CART: "ADD TO CART",
        CHECKOUT_OVERVIEW_TITLE: "CHECKOUT: OVERVIEW",
        USER_INFORMATION_TITLE:"Checkout: Your Information",
        FIRST_NAME_REQUIRED: "Error: First Name is required",
        LAST_NAME_REQUIRED: "Error: Last Name is required",
        POSTAL_CODE_REQURIED: "Error: Postal Code is required",
        PRODUCT_NAME: "Sauce Labs Backpack",
        CONFIRMATION_TITLE: "Finish",
        THANKS_TITLE: "THANK YOU FOR YOUR ORDER",
        COMPLETE_TEXT: "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    },
    URL: "https://www.saucedemo.com"

}
