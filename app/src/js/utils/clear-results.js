const clearResults = () => {
  const results = document.querySelector('.js--result');
  while(results.firstChild) {
    firstChild = results.firstChild;
    firstChild.parentElement.removeChild(firstChild);
  }
};

export default clearResults;
