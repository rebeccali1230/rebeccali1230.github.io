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
  }

  // Initialize an empty string to store book information
  let bookList = "";

  // Loop through the book catalog and build the list
  for (let i = 0; i < bookCatalog.length; i++) {
    bookList += `Index ${i}: ${bookCatalog[i].title}\n`;
  }

  return bookList;
}

// Define the showBook() function
function showBook(index) {
  // Check if the index is valid
  if (index >= 0 && index < bookCatalog.length) {
    const book = bookCatalog[index];
    return `Title: ${book.title}\nAuthor: ${book.author}\nGenre: ${book.genre}`;
  } else {
    return "Invalid index. Please provide a valid index.";
  }
}
