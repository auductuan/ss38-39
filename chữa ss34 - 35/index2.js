// script.js
function toggleSearch() {
    var searchInput = document.querySelector('.search-input');
    if (searchInput.classList.contains('active')) {
      searchInput.classList.remove('active');
    } else {
      searchInput.classList.add('active');
      searchInput.focus();
    }
  }
// script.js
function toggleSearch() {
  var searchInput = document.querySelector('.search-input');
  if (searchInput.classList.contains('active')) {
    searchInput.classList.remove('active');
  } else {
    searchInput.classList.add('active');
    searchInput.focus();
  }
}
  