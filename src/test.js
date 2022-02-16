const searchWord = 'word'
let isSearching = false;
function setIsSearching(bool) {
  bool ? (isSearching = true) : (isSearching = false);
}

(() => {
  //IIFE
  if (searchWord.length !== 0) {
    setIsSearching(true);
    return;
  }
  setIsSearching(false);
  console.log('inside IIFE')
})();

console.log(isSearching);