var readline = require('readline-sync');
//1) create one list / array containing book details (obj) to implement a book store --> 
const bookStore = [
    {
        bookObject: {
            name: 'The India Story',
            price: 345,
            status: "available",
            quantity: 31
        }
    },
    {
        bookObject: {
            name: 'Listen to Your Heart: The London Adventure',
            price: 675,
            status: "available",
            quantity: 90
        }
    },
    {
        bookObject: {
            name: 'Business of Sports: The Winning Formula for Success',
            price: 1050,
            status: "unavailable",
            quantity: 3
        }
    },
    {
        bookObject: {
            name: 'A Place Called Home',
            price: 200,
            status: "unavailable",
            quantity: 65
        }
    },
    {
        bookObject: {
            name: "The World: A Family History",
            price: 622,
            status: "available",
            quantity: 81
        }
    },
    {
        bookObject: {
            name: "Come! Let's Run",
            price: 490,
            status: "available",
            quantity: 500
        }
    },
    {
        bookObject: {
            name: "India's Finance Ministers",
            price: 1500,
            status: "available",
            quantity: 8
        }
    },
    {
        bookObject: {
            name: 'Snakes in the Ganga',
            price: 5000,
            status: "unavailable",
            quantity: 7
        }
    },
    {
        bookObject: {
            name: "Women and Men in India 2022",
            price: 1200,
            status: "unavailable",
            quantity: 10
        }
    },
    {
        bookObject: {
            name: "The Golden Years",
            price: 150,
            status: "available",
            quantity: 100
        }
    },
    {
        bookObject: {
            name: "War and Women",
            price: 300,
            status: "available",
            quantity: 1
        }
    },
    {
        bookObject: {
            name: "Heritage Trees of Goa",
            price: 450,
            status: "available",
            quantity: 14
        }
    },
    {
        bookObject: {
            name: "2 states",
            price: 467,
            status: "available",
            quantity: 30
        }
    },
    {
        bookObject: {
            name: "Half-Girlfriend",
            price: 580,
            status: "available",
            quantity: 71
        }
    },
    {
        bookObject: {
            name: "Nation Calling''",
            price: 700,
            status: "available",
            quantity: 16
        }
    },
    {
        bookObject: {
            name: "Let’s Move Forward",
            price: 901,
            status: "available",
            quantity: 41
        }
    }
]
console.log()
console.log("list of all books in store");
let bookNamesList = []
bookStore.forEach(book => {
    bookNamesList.push(book.bookObject.name)
});
console.log(bookNamesList);
console.log('select book which u want to add to cart according to the following index no.');
for (let i in bookNamesList) {
    console.log(i, bookNamesList[i]);
}
const bookIndex = parseInt(readline.question('Enter the index of the book: '));
let quantityOfBookRequired = parseInt(readline.question('enter the quantity of book u require ?__'))
function addToCart(bookIndex, quantityOfBookRequired) {
    if (bookIndex >= 0 && bookIndex < bookStore.length) {
        let quantityInStore = bookStore[bookIndex].bookObject['quantity'];
        quantityInStore = quantityInStore - quantityOfBookRequired;
        if (quantityOfBookRequired >= 0 ) {
            if (bookStore[bookIndex].bookObject['status'] == 'available' && quantityInStore>=0) {
                let cart = [];

                const newEntry = {
                    name: bookStore[bookIndex].bookObject['name'],
                    price: bookStore[bookIndex].bookObject['price'],
                    status: bookStore[bookIndex].bookObject['status'],
                    quantity: parseInt(quantityOfBookRequired),
                    total_cart_value: bookStore[bookIndex].bookObject['price'] * parseInt(quantityOfBookRequired)
                };
                cart.push(newEntry);
                console.log("Updated cart:", cart);
                bookStore[bookIndex].bookObject['quantity'] = quantityInStore;
                console.log("Updated field in bookstore:", bookStore[bookIndex]);
            }
            else {
                console.log(" your required quantity is not available \n");
                let rentereedQuantity = readline.question('please re-enter the quatity you want to choose');
                addToCart(bookIndex, rentereedQuantity);
            }
        } else {
            console.log(" your entered number should be greater than 0");
        }
    } else {
        console.log("Invalid index entered. Please enter a valid index.");
    }
}
addToCart(bookIndex, quantityOfBookRequired)