let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {

    // Creates "bookshelf" that will contain visual display of all books
    let bookshelf = document.getElementById("bookshelf");

    // Loops through each book in library
    myLibrary.forEach(function(book) {

        // Creates a card (div) for the book and adds the right class to it
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        // Creates a list for the book, which will contain the book's properties
        let bookCardList = document.createElement("ul");

        // Loops through the book's properties and adds each one to the list
        for (const property in book) {
            let propertyListItem = document.createElement("li");
            propertyListItem.innerHTML = property.toUpperCase() + ": " + book[property];

            // Appends property to the book list
            bookCardList.appendChild(propertyListItem);

            // Appends list to the book card
            bookCard.appendChild(bookCardList);
        }

        // Appends book card to the bookshelf
        bookshelf.appendChild(bookCard);
    });
}

function activateNewBookButton() {
    newBookButton = document.getElementById("new-book-button");
    newBookButton.addEventListener("click", function() {
        createBookForm();
    });
}

function createBookForm() {
    let formContainer = document.getElementById("form");

    // Clears div of all inputs before creating new ones
    formContainer.querySelectorAll("input").forEach(input => input.remove());
    
    // Creates array of input field ids
    let ids = ["title", "author", "pages", "read"]

    // Creates and appends inputs with id from ids array
    for (i = 0; i < ids.length; i++) {
        let newInput = document.createElement("input")
        newInput.classList.add(ids[i])
        formContainer.appendChild(newInput);
    }
}

// Creates books for demonstration
bookOne = new Book("20 Things to Know About Money in Your 20s", "Brandon-Richard Austin", 100, false);
bookTwo = new Book("How to Fail At Everything and Still Win Big", "Scott Adams", 100, true);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);

displayBooks();

activateNewBookButton();