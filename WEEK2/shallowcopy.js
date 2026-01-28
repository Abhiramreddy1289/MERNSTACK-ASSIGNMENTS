 const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
              let objCopy={...user};
                //🎯 Task
                user.name="Ramesh"; //modify original object
                //observe changes in copied object
                console.log("Original Object before modification:", user);
                console.log("Shallow Copied Object before modification:", objCopy);
              //1. Create a shallow copy of user
//spread operator(...) is used to create a shallow copy of the user object. It copies all enumerable own properties from the user object to a new object objCopy.


