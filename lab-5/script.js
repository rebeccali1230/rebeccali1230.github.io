// Initialize an empty array to store the book catalog
let bookCatalog = [];

// Define the addBook() function
function addBook(title, author, genre) {
  // Create a new book object
  const newBook = {
    title: title,
    author: author,
    genre: genre
  };

  // Push the new book object into the book catalog array
  bookCatalog.push(newBook);

  // Return a response indicating that the book is added to the catalog
  return `${title} by ${author} in the ${genre} genre has been added to the catalog.`;
}

// Define the showBooks() function
function showBooks() {
    // Check if there are books in the catalog
    if (bookCatalog.length === 0) {
      return "The catalog is empty.";
    }
  
    // Initialize an empty string to store book information
    let bookList = "";
  
    // Loop through the book catalog and build the list
    for (const book of bookCatalog) {
      bookList += `${book.title} by ${book.author} in the ${book.genre} genre\n`;
    }
  
    return bookList;
  }  


// Check the updated book catalog
console.log(showBooks());
