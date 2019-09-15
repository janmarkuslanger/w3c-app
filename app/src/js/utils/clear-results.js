const clearResults = () => {
  const results = document.querySelector('.js--result');
  let firstChild = results.firstChild;
  while(firstChild) {
    firstChild.parentElement.removeChild(firstChild);
    let firstChild = results.firstChild;
  }
};

export default clearResults;