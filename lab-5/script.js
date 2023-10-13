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
  return "Book added.";
}

// Define the showBooks() function
function showBooks() {
  // Check if the book catalog is empty
  if (bookCatalog.length === 0) {
    return "The catalog is empty.";
  } else {
    // Loop through the book catalog and print the list
    for (let i = 0; i < bookCatalog.length; i++) {
      console.log(`${i}: ${bookCatalog[i].title}`);
    }
  }
}

// Define the showBook() function
function showBook(index) {
  // Check if the index is valid
  if (index >= 0 && index < bookCatalog.length) {
    const book = bookCatalog[index];
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
  } else {
    return "Invalid index. Please provide a valid index.";
  }
}
