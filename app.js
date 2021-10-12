const startPage = document.querySelector(".start-screen");
const mainPage = document.querySelector(".bank-book");
const nameForm = document.querySelector(".get-name");
const userName = document.querySelector(".user-name");
const nameInput = document.querySelector("#get-account-name");
const bookList = document.querySelector(".book-lists-container");
const blBtn = document.querySelector(".open-book-list");
const homeBtn = document.querySelector(".go-home");
const depositPage = document.querySelector(".deposit-screen");
const depositBtn = document.querySelector(".open-deposit-screen");
const searchForm = document.querySelector(".search-book");
const searchInput = document.querySelector(".search-book-input");

function getUserName(e) {
  e.preventDefault();
  let name = nameInput.value;
  userName.innerText = name;
  startPage.style.display = "none";
  mainPage.style.display = "flex";
}

function openBookList() {
  bookList.style.display = "block";
  mainPage.style.display = "none";
}
function goHome() {
  mainPage.style.display = "flex";
  bookList.style.display = "none";
  depositPage.style.display = "none";
}
function openDeposit() {
  mainPage.style.display = "none";
  startPage.style.display = "none";
  bookList.style.display = "none";
  depositPage.style.display = "block";
}
function searchBook(e) {
  e.preventDefault();
  console.log(searchInput.value);
}

nameForm.addEventListener("submit", getUserName);
blBtn.addEventListener("click", openBookList);
homeBtn.addEventListener("click", goHome);
depositBtn.addEventListener("click", openDeposit);
searchForm.addEventListener("submit", searchBook);

function init() {
  mainPage.style.display = "none";
  startPage.style.display = "flex";
  bookList.style.display = "none";
  depositPage.style.display = "none";
  nameInput.focus();
}
init();
