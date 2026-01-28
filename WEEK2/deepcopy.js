const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
                let objCopy=structuredClone(order);
                  //🎯 Task:
                  order.customer.address.city="Bangalore"; //modify original object
                  order.items[0].price=65000; //modify original object
                    //observe changes in copied object
                    console.log("Original Object after modification:", order);  
                    console.log("Deep Copied Object after modification:", objCopy);
                //1. Create a deep copy of order    