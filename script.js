let numBooks = 0; //0-based, add one for display purposes

//HARDCODED CONTROLS
//opening and closing Add Book Dialog
const addBookBtn = document.querySelector("#add-book-btn");
const addBookDialog = document.querySelector("#add-book-dialog");

addBookBtn.addEventListener("click", () => {
    addBookDialog.showModal();
})

const saveBookBtn = document.querySelector("#save-book-btn");

saveBookBtn.addEventListener("click", () => {
    event.preventDefault();
    addBookToLibrary();
    displayBook(library.length-1);
    addBookDialog.close();
})

/*const closeBookDialog = document.querySelector("#close-form-dialog-btn");

closeBookDialog.addEventListener("click", () => {
    event.preventDefault();
    addBookDialog.close()
});*/

//listing books

//number of books

//STORING BOOK INFORMATION
//creating object and array
function Book(title,author,genre,rating,pagecount,readunread) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
    this.pagecount = pagecount;
    this.readunread = readunread;
};

let library = [];

const book1 = new Book("Lord of the Rings","JRR Tolkien","Fantasy",5,365,"Read");
const book2 = new Book("Harry Potter","JK Rowing","Fantasy",5,365,"Read");

//getting information from form and adding it to library array
function addBookToLibrary(){
    const t = document.querySelector("#title-field").value;
    const a = document.querySelector("#author-field").value;
    const g = document.querySelector("#genre-field").value;
    const r = document.querySelector("#rating-field").value;
    const p = document.querySelector("#pagecount-field").value;
    let re = document.querySelector("#read").value;
    if(re == "on"){
        re = "Read";
    }else{
        re = "Unread";
    }
    const book = new Book(t,a,g,r,p,re);
    library.push(book);
    console.table(library);

    //resetting the form
    const form = document.querySelector("#add-book-form");
    form.reset();
}

//DISPLAYING THE BOOKS

const bookshelf = document.querySelector("#bookshelf");

function displayBook(index){
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("class","book");
    bookDiv.setAttribute("id",`bookDiv${numBooks}`);
    let removeBtn = document.createElement("button");
    removeBtn.innerText = `Remove Book`;
    bookDiv.innerHTML = `
        <h2 class="title">${library[index].title}</h2>
        <div class="author">${library[index].author}</div>
        <div class="genre">Genre: ${library[index].genre}</div>
        <div class="rating">Rating: ${library[index].rating}</div>
        <div class="book-attribute-wrapper">
            <div class="pagecount">Page Count: ${library[index].pagecount}</div>
            <div class="readunread">Read/Unread: ${library[index].readunread}</div>
        </div>
        <div class="book-attribute-wrapper-btns">
            <div class="togglebtn"><button>Toggle Read Status</button></div>
            <div class="removebtn">${removeBtn}</div>
        </div>
    </div>
    `
    removeBtn.addEventListener("click", () => {removeBook(numBooks)});
    bookshelf.appendChild(bookDiv);
    numBooks++; //setting id for next book
}

//BOOK BUTTON FUNCTIONALITY
//toggle read status

//remove book
function removeBook(id) {
    let bookToDelete = document.querySelector(`bookDiv${id}`);
    bookToDelete.remove();
    let arr = [];
    for(let i = 0; i < id; i++){
        arr.push(library.shift());
    }
    for(let i = id+1; i < library.length; i++){
        arr.push(library.shift());
    }
    library = arr;
}