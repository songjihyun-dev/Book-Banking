const startPage = document.querySelector(".start-screen");
const mainPage = document.querySelector(".bank-book");
const depositPage = document.querySelector(".deposit-screen");

const nameForm = document.querySelector(".get-name");
const searchForm = document.querySelector(".search-book");

const nameInput = document.querySelector("#get-account-name");
const bookList = document.querySelector(".book-lists-container");

const searchByNameInput = document.querySelector(".search-book-name");
const searchByAuthorInput = document.querySelector(".search-author-name");
const searchByISBNInput = document.querySelector(".search-isbn");

const homeBtn = document.querySelector(".go-home");
const homeBtn2 = document.querySelector(".go-to-home");
const depositBtn = document.querySelector(".open-deposit-screen");
const blBtn = document.querySelector(".open-book-list");
const detailSearchBtn = document.querySelector(".detail-search");

let BBname = document.querySelector("div.bank-book-name");
let BBname2 = document.querySelector("h1.bank-book-name");
let userName = document.querySelector(".user-name");

function getUserName(e) {
  let name = nameInput.value;
  e.preventDefault();
  userName.innerText = name;
  startPage.style.display = "none";
  mainPage.style.display = "flex";

  let BBookname = BBname.innerText;
  BBname2.innerText = BBookname;
}

function openBookList() {
  bookList.style.display = "block";
  mainPage.style.display = "none";
}

function goHome() {
  mainPage.style.display = "flex";
  bookList.style.display = "none";
  depositPage.style.display = "none";

  searchByNameInput.value = "";
  searchByAuthorInput.value = "";
  searchByISBNInput.value = "";

  searchByAuthorInput.style.display = "none";
  searchByISBNInput.style.display = "none";
}

function openDeposit() {
  mainPage.style.display = "none";
  startPage.style.display = "none";
  bookList.style.display = "none";
  depositPage.style.display = "block";

  let BBookname = BBname.innerText;
  BBname2.innerText = BBookname;

  searchByNameInput.focus();
}

function searchBook(e) {
  let bookName = searchForm.querySelector(".search-book-name");
  e.preventDefault();
  console.log(bookName.value);
}

function openDetailSearch() {
  if (detailSearchBtn.classList.contains("open")) {
    searchByAuthorInput.style.display = "block";
    searchByISBNInput.style.display = "block";
    detailSearchBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    detailSearchBtn.classList.replace("open", "close");
  } else {
    searchByAuthorInput.style.display = "none";
    searchByISBNInput.style.display = "none";
    detailSearchBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    detailSearchBtn.classList.replace("close", "open");
  }
}

let editName = BBname.querySelector("button");

function changeBankBookName(e) {
  e.preventDefault();
  let $form = document.createElement("form");
  let $input = document.createElement("input");
  let text = userName.innerText;

  userName.innerHTML = "";
  userName.appendChild($form);
  $form.appendChild($input);
  $input.value = text;
  $input.focus();

  let editName = BBname.querySelector("form");
  editName.addEventListener("submit", editUserName);
}
function editUserName(e) {
  e.preventDefault();
  let changedName = BBname.querySelector("input");
  userName.innerHTML = "";
  userName.innerHTML = changedName.value;
  BBname2.innerText = BBname.innerText;
}
nameForm.addEventListener("submit", getUserName);
blBtn.addEventListener("click", openBookList);
homeBtn.addEventListener("click", goHome);
homeBtn2.addEventListener("click", goHome);
depositBtn.addEventListener("click", openDeposit);
searchForm.addEventListener("submit", searchBook);
detailSearchBtn.addEventListener("click", openDetailSearch);
editName.addEventListener("click", changeBankBookName);

function init() {
  mainPage.style.display = "none";
  startPage.style.display = "flex";
  bookList.style.display = "none";
  depositPage.style.display = "none";
  nameInput.focus();
}
init();
