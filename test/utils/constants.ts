// Common Selectors
export const SELECTORS = {
  LoginPage : {
    loginButton: '#login-button',
    usernameInput: '#user-name',
    passwordInput: '#password',
    errorMessage: '.error-message-container',
  },
  Menu : {
    logoutButton: '#logout_sidebar_link',
    toggleButton: '#react-burger-menu-btn',
    resetAppState: '#reset_sidebar_link'
  },
  Inventory: {
    sortDropdown: '.product_sort_container',
    cartBadge: '.shopping_cart_badge',
    itemPrice: '.inventory_item_price',
    addItemButton: 'button.btn_inventory',
    inventoryTitle: '.title=Products',
    inventoryItem: '.inventory_item',
    addToCartButton: 'button.btn_inventory'
  },
  Cart: {
    cartItem: '.cart_item',
    shoppingCartLink: '.shopping_cart_link',
    totalPrice: '.summary_subtotal_label',
    removeButton: 'button[id^="remove"]',
    checkoutButton: '#checkout'
  },
  Checkout: {
    firstnameInput: '#first-name',
    lastnameInput: '#last-name',
    postalCodeInput: '#postal-code',
    continueButton: '#continue',
    finishButton: '#finish',
    completeHeader: '.complete-header',
    cancelButton: '#cancel',
    errorMessage: 'h3[data-test="error"]',
    continueShoppingButton: '#continue-shopping'
  },
  
};

// Miscellaneous
export const EMPTY_STRING = '';
export const DEFAULT_LANGUAGE = 'en-US';


// User roles used in the system
// export enum UserRole {
//   ADMIN = 'admin',
//   USER = 'user',
//   GUEST = 'guest',
// }

// Application routes
export enum Routes {
  INVENTORY = '/inventory',
  CHECKOUT = '/checkout-step-one',
}

// Environment-related constants
export const Env = {
  BASE_URL : 'https://www.saucedemo.com/',
  SHORT_TIMEOUT : 3000, 
  MEDIUM_TIMEOUT : 7000,
  LONG_TIMEOUT : 15000
}

// Test data for input
export enum TestUser {
  VALID_USERNAME = 'standard_user',
  VALID_PASSWORD = 'secret_sauce',
  INVALID_USERNAME = 'invalid_user',
  INVALID_PASSWORD = 'invalid_password',
  LOCKED_OUT_USERNAME = 'locked_out_user',
  EMPTY = '',
  FIRST_NAME = 'John',
  LAST_NAME = 'Doe',
  POSTAL_CODE = '12345'
}

// System messages
export enum Messages {
  CHECKOUT_SUCCESS = 'Thank you for your order!',
  LOGIN_FAILED = 'Username and password do not match any user in this service',
  LOCKED_OUT_USER = 'Sorry, this user has been locked out',
  REQUIRED_FIELD = 'This field is required',
  FIRST_NAME_REQUIRED = 'Error: First Name is required'
} 
