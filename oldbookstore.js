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
    // {
    //     bookObject: {
    //         name: 'Business of Sports: The Winning Formula for Success',
    //         price: 1050,
    //         status: "available",
    //         quantity: 3
    //     }
    // },
    // {
    //     bookObject: {
    //         name: 'A Place Called Home',
    //         price: 200,
    //         status: "available",
    //         quantity: 65
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "The World: A Family History",
    //         price: 622,
    //         status: "available",
    //         quantity: 81
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "Come! Let's Run",
    //         price: 490,
    //         status: "available",
    //         quantity: 500
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "India's Finance Ministers",
    //         price: 1500,
    //         status: "available",
    //         quantity: 8
    //     }
    // },
    // {
    //     bookObject: {
    //         name: 'Snakes in the Ganga',
    //         price: 5000,
    //         status: "available",
    //         quantity: 7
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "Women and Men in India 2022",
    //         price: 1200,
    //         status: "available",
    //         quantity: 10
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "The Golden Years",
    //         price: 150,
    //         status: "available",
    //         quantity: 100
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "War and Women",
    //         price: 300,
    //         status: "available",
    //         quantity: 1
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "Heritage Trees of Goa",
    //         price: 450,
    //         status: "available",
    //         quantity: 14
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "2 states",
    //         price: 467,
    //         status: "available",
    //         quantity: 30
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "Half-Girlfriend",
    //         price: 580,
    //         status: "available",
    //         quantity: 71
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "Nation Calling''",
    //         price: 700,
    //         status: "available",
    //         quantity: 16
    //     }
    // },
    // {
    //     bookObject: {
    //         name: "Let’s Move Forward",
    //         price: 901,
    //         status: "available",
    //         quantity: 41
    //     }
    // }
]
let cart=[];
console.log("list of all books in store");
function displayBook() {
    console.log("list of all books in store");
    console.log("BookID\tBook Name\t\t\t\t\t\t\t\t\tPrice\t\tQuantity\t\tstatus");
    for (let book in bookStore) {
        console.log(book, "\t\t", bookStore[book].bookObject['name'], "\t\t\t\t\t\t\t", bookStore[book].bookObject['price'], "\t\t", bookStore[book].bookObject['quantity'], "\t\t", bookStore[book].bookObject['status']);
    }
}
function showCart() {
    console.log("BID\tBook Name\t\t\t\tPrice\tquantity\ttotal price4\n");
    for (let book of cart) {
        console.log(book.BookID, "\t", book.name, "\t\t\t", book.price, "\t", book.quantity ,"\t",book.total_price);
    }
    let total_cartvalue =0;
    for(let book of cart){
        total_cartvalue = total_cartvalue+book.total_price;
    }
    console.log("TOTAL CART VALUE",total_cartvalue);
}
function addBook() {
    console.log('select book which u want to add to cart according to the following index no');
    const bookIndex = parseInt(readline.question('Enter the index of the book: '));
    let quantityOfBookRequired = parseInt(readline.question('enter the quantity of book u require ?____'))
    if (bookIndex >= 0 && bookIndex < bookStore.length) {
        let quantityInStore = bookStore[bookIndex].bookObject['quantity'];
        quantityInStore = quantityInStore - quantityOfBookRequired;
        if (quantityOfBookRequired >= 0 && bookStore[bookIndex].bookObject['status'] == 'available') {
            if (bookStore[bookIndex].bookObject['status'] == 'available' && quantityInStore >= 0) {

                const newEntry = {
                    BookID:bookIndex,
                    name: bookStore[bookIndex].bookObject['name'],
                    price: bookStore[bookIndex].bookObject['price'],
                    status: bookStore[bookIndex].bookObject['status'],
                    quantity: parseInt(quantityOfBookRequired),
                    total_price: bookStore[bookIndex].bookObject['price'] * parseInt(quantityOfBookRequired)
                };
                cart.push(newEntry);
                bookStore[bookIndex].bookObject['quantity'] = quantityInStore;
                if(bookStore[bookIndex].bookObject['quantity']==0){
                    bookStore[bookIndex].bookObject['status'] = 'unavailable'
                }
            }
            else {
                console.log(" your required quantity is not available \nquantity in store is --",bookStore[bookIndex].bookObject['quantity']);
                console.log(('\nplease re-enter the quatity you want to choose\n'));

                addBook();
            }
        } else {
            console.log(" either book is unavailable or entered number is less than 0 ");
        }
    } else {
        console.log("Invalid index entered. Please enter a valid index.");
    }
}
do {
    choice = readline.question('operations need to be performed in book store -->\n 1) show available books to users\n 2) add book\n 3) show cart\n 4) EXIT__________');
    switch (choice) {
        case '1':
            displayBook();
            break;
        case '2':
            addBook();
            break;
        case '3':
            showCart();
            break;
    }

} while (choice != 4)
