 import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            // 2. Apply discount if coupon provided
                            // 3. Validate payment method (card/upi/cod)
                            // 4. Process payment (simulate)
                            // 5. Reduce stock for all items
                            // 6. Clear cart
                            // 7. Generate order summary
                            
                            // Return order summary:
                            // {
                            //   orderId: ...,
                            //   items: [...],
                            //   subtotal: ...,
                            //   discount: ...,
                            //   total: ...,
                            //   paymentMethod: ...,
                            //   status: 'success/failed',
                            //   message: '...'
                            // }
                            const cartItems = getCartItems();
                            const cartTotal = getCartTotal();
                            const discountDetails = applyDiscount(cartTotal, couponCode, cartItems);
                            const orderId = generateOrderId();
                            return {
                              orderId,
                              items: cartItems,
                              subtotal: cartTotal,
                              discount: discountDetails.discount,
                              total: discountDetails.finalTotal,
                              paymentMethod,
                              status: 'success',
                              message: 'Payment processed successfully'
                            };
                          }
                          
                          export function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                            const validMethods = ['card', 'upi', 'cod'];
                            return validMethods.includes(method);   
                          }
                          
                          function generateOrderId() {
                            // Generate random order ID
                            return 'ORD' + Date.now();
                            //ord returns order id which is unique randomly generated using current timestamp
                          }

