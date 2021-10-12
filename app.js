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
const depositBtn = document.querySelector(".open-deposit-screen");
const blBtn = document.querySelector(".open-book-list");
const detailSearchBtn = document.querySelector(".detail-search");

function getUserName(e) {
  let userName = document.querySelector(".user-name");
  let name = nameInput.value;
  e.preventDefault();
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
  searchInput.value = "";
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

nameForm.addEventListener("submit", getUserName);
blBtn.addEventListener("click", openBookList);
homeBtn.addEventListener("click", goHome);
depositBtn.addEventListener("click", openDeposit);
searchForm.addEventListener("submit", searchBook);
detailSearchBtn.addEventListener("click", openDetailSearch);

function init() {
  mainPage.style.display = "none";
  startPage.style.display = "flex";
  bookList.style.display = "none";
  depositPage.style.display = "none";
  nameInput.focus();
}
init();
