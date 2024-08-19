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
    displayBook(library[library.length-1]);
    addBookDialog.close();
})

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

const library = [];

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
}

//DISPLAYING THE BOOKS

const bookshelf = document.querySelector("#bookshelf");

function displayBook(index){
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("class","book");
    bookDiv.innerHTML = `
        <h2 class="title">${library[index].title}</h2>
        <div class="author">${library[index].author}</div>
        <div class="genre">${library[index].genre}</div>
        <div class="rating">${library[index].rating}</div>
        <div class="book-attribute-wrapper">
            <div class="pagecount">${library[index].pagecount}</div>
            <div class="readunread">${library[index].readunread}</div>
        </div>
        <div class="book-attribute-wrapper-btns">
            <div class="togglebtn"><button>Toggle Read Status</button></div>
            <div class="removebtn"><button>Remove Book</button></div>
        </div>
    </div>
    `
    bookshelf.appendChild(bookDiv);
}