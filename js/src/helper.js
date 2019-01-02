export const clearChilds = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
