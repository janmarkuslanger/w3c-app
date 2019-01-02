const state = {
  active: null,
  pages: []
};

export const getPages = () => state.pages;

export const getActive = () => state.active;

export const addPage = (page) => {
  state.pages.push(page);
};

export const removePage = (page) => {
  const index = state.pages.indexOf(page);

  if (index < 0) {
    return;
  }

  state.pages.splice(index, 1);
};

export const setActive = (page) => {
  state.active = page;
};
