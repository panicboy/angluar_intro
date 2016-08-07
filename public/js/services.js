(function() {
  function BookService(){
    var books = [
      {
        id: 1,
        title: 'Starship Troopers',
        author: 'Robert A. Heinlein'
      },
      {
        id: 2,
        title: 'Sphere',
        author: 'Michael Crichton'
      },
      {
        id: 3,
        title: `Ender's Game`,
        author: 'Orson Scott Card'
      },
      {
        id: 4,
        title: 'Game of Thrones',
        author: 'George R. R. Martin'
      },
      {
        id: 5,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
      },
      {
        id: 6,
        title: 'Talion: Revenant',
        author: 'Michael Stackpole'
      },
      {
        id: 7,
        title: 'Cryptonomicon',
        author: 'Neal Stephenson'
      }
    ];

  this.getBooks = function() {
    return books;
  };

  this.getBook = function(id) {
    return books.filter(function(book){
      return book.id === id;
    })
    .reduce(function(_, book){
      return book;
    });
  };

  this.addBook = function(book) {
    var id = books.reduce(function(highest, book){
      return highest < book.id ? book.id : highest;
    }, 1) +1;
    books.push({
      title: book.title,
      author: book.author
    });
  };
}

  angular.module('myApp')
  .service('BookService', BookService);


})();