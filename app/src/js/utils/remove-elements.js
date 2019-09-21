const removeElements = el => {
  if (!el || !el.firstChild) {
    return;
  }

  let firstChild;

  while(el.firstChild) {
    firstChild = el.firstChild;
    firstChild.parentElement.removeChild(firstChild);
  }
};

export default removeElements;
