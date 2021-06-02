let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Methods that facilitate adding book to library

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Methods that facilitate displaying book in library

function displayBooks() {

    let bookshelf = document.getElementById("bookshelf");

    bookshelf.innerHTML = "";

    // Loops through each book in library
    myLibrary.forEach(function(book) {

        // Creates a div for the book
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        // Creates a list for the book, which will contain the book's properties
        let bookCardList = document.createElement("ul");

        // Loops through the book's properties and adds each one to the list
        for (const property in book) {

            // Creates list item and populates its value
            let propertyListItem = document.createElement("li");
            propertyListItem.innerHTML = property.toLocaleUpperCase() + ": " + book[property];

            // Appends list item to list
            bookCardList.appendChild(propertyListItem);

            // Appends list to book card
            bookCard.appendChild(bookCardList);
        }

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "DELETE BOOK";
        deleteButton.addEventListener("click", function() {
            deleteBook(book);
        });

        bookCard.appendChild(deleteButton);

        // Appends book card to the bookshelf
        bookshelf.appendChild(bookCard);

    });
}

// Methods that facilitate creating and destroying books

function createBookForm() {
    
    // Selects form div and clears it of all inputs and submit buttons before creating new ones
    let formContainer = document.getElementById("form");
    clearBookForm();
    
    // Creates array of input field ids
    let ids = ["title", "author", "pages", "read"]

    // Creates and appends inputs with id from ids array
    for (i = 0; i < ids.length; i++) {
        let newInput = document.createElement("input");
        newInput.setAttribute("id", ids[i]);

        if (ids[i] == "read") {
            newInput.setAttribute("type", "checkbox");
            let label = document.createElement("p");
            label.innerHTML = "Read?";
            label.setAttribute("id", "label");
            formContainer.appendChild(label);
        } else {
            newInput.placeholder = ids[i];
        }

        formContainer.appendChild(newInput);
    }

    // Creates submit button for the new book form
    let submitButton = document.createElement("button");
    submitButton.innerHTML = "ADD BOOK";
    submitButton.setAttribute("id", "submit")
    formContainer.appendChild(submitButton);

    submitButton.addEventListener("click", function() {

        // Collects values from each of the form fields
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").value;

        // Creates new book using collected values
        let newBook = new Book(title, author, pages, read);

        // Calls method that adds new book to library
        addBookToLibrary(newBook);
        displayBooks();
        clearBookForm();

    });

}

function clearBookForm() {
    let formContainer = document.getElementById("form");
    formContainer.querySelectorAll("input").forEach(input => input.remove());
    formContainer.querySelectorAll("#submit").forEach(button => button.remove());
    formContainer.querySelectorAll("#label").forEach(label => label.remove());
}

function deleteBook(book) {
    index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    displayBooks();
}

// Page setup methods

function activateNewBookButton() {
    newBookButton = document.getElementById("new-book-button");
    newBookButton.addEventListener("click", function() {
        createBookForm();
    });
}

// Demo setup methods

bookOne = new Book("20 Things to Know About Money in Your 20s", "Brandon-Richard Austin", 100, false);
bookTwo = new Book("How to Fail At Everything and Still Win Big", "Scott Adams", 100, true);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);

displayBooks();

activateNewBookButton();