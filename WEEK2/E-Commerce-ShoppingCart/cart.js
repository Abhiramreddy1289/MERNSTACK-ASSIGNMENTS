 import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                            const product = getProductById(productId);
                            if (!product) {
                              return "product is not found";
                            }
                            if (!checkStock(productId, quantity)) {
                                return "insufficient stock";
                            }
                            const existingItem = cartItems.find(item => item.product.id === productId); 
                            if (existingItem) {
                              if (!checkStock(productId, existingItem.quantity + quantity)) {
                                return "insufficient stock and product quantity not updated";
                              }
                                existingItem.quantity += quantity;
                                return "cart quantity updated";
                            } else {
                                cartItems.push({ product, quantity });
                                return "product added to cart";
                            }
                          }
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                            const index = cartItems.findIndex(item => item.product.id === productId);
                            if (index !== -1) {
                              cartItems.splice(index, 1);
                              return "product removed from cart";
                            } else {
                              return "product not found in cart";
                            }   
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                            const item = cartItems.find(item => item.product.id === productId);
                            if (!item) {
                              return "product not found in cart";
                            }
                            if (!checkStock(productId, newQuantity)) {
                              return "insufficient stock";
                            }
                            item.quantity = newQuantity;
                            return "cart quantity updated";
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                            return cartItems;   
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                            return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

                          }
                          
                          export function clearCart() {
                            // Empty the cart
                            cartItems = [];
                          }

