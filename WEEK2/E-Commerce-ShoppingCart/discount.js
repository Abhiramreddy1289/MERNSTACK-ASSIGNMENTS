  // Available coupons
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
                          // TODO: Implement these functions
                          
                          export function validateCoupon(couponCode, cartTotal, cartItems) {
                            // 1. Check if coupon exists
                            // 2. Check minimum amount requirement
                            // 3. Check category requirement (if any)
                            // Return { valid: true/false, message: '...' }
                            const coupon = coupons[couponCode];
                            if (!coupon) {
                              return "invalid coupon code";
                            }
                            if (coupon.minAmount && cartTotal < coupon.minAmount) {
                              return "minimum amount requirement not met";
                            }
                            if (coupon.category) {
                              const hasCategory = cartItems.some(item => item.product.category === coupon.category);
                              if (!hasCategory) {
                                return "category requirement not met";
                              }
                            }
                            return "valid coupon";
                          }
                          
                          export function calculateDiscount(couponCode, cartTotal) {
                            // Calculate discount amount based on coupon type
                            // Return discount amount
                            const coupon = coupons[couponCode];
                            if (!coupon) {
                              return 0;
                            }
                            if (coupon.type === 'percentage') {
                              return (cartTotal * coupon.value) / 100;
                            } else if (coupon.type === 'flat') {
                              return coupon.value;
                            }
                            return 0;
                          }
                          
                          export function applyDiscount(cartTotal, couponCode, cartItems) {
                            // 1. Validate coupon
                            // 2. If valid, calculate discount
                            // 3. Return final amount and discount details
                            // Return { 
                            //   originalTotal: ..., 
                            //   discount: ..., 
                            //   finalTotal: ...,
                            //   message: '...'
                            // }
                            const validationMessage = validateCoupon(couponCode, cartTotal, cartItems);
                            if (validationMessage !== "valid coupon") {
                              return {
                                originalTotal: cartTotal,
                                discount: 0,
                                finalTotal: cartTotal,
                                message: validationMessage
                              };
                            }
                            const discount = calculateDiscount(couponCode, cartTotal);
                            const finalTotal = cartTotal - discount;
                            return {
                              originalTotal: cartTotal,
                              discount,
                              finalTotal,
                              message: "coupon applied successfully"
                            };
                          }
