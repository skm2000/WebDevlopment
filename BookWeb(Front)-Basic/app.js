var titles = document.getElementsByClassName('title');
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
Array.from(titles).forEach(function(item){
    console.log(item);
})
var books = document.querySelector('book-list li.name');
console.log(books);
var books = document.querySelectorAll('book-list li.name');
Array.from(books).forEach(function(book){
    //console.log(book.textContent);
    book.textContent = 'text';
});
var books = document.querySelectorAll('book-list li.name');
Array.from(books).forEach(function(book){
    book.textContent+='(book-title)';//Appending
});
var x= document.querySelectorAll("p");
console.log(x);
x[0].style.backgroundColor="white";
const bookList =document.querySelector('#book-list');
console.log(bookList.innerHTML);
//bookList.innerHTML='<h2>BOOKS AND MORE BOOKS.....</h2>'