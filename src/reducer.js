import { CHANGE_THEME, CHANGE_SEARCHED_WORD } from "./actions";

const reducer = (state, action) => {
  if (action.type === CHANGE_THEME) {
    document.body.classList.toggle("dark-theme");
    const currTheme = !state.isDarkTheme;
    return { ...state, isDarkTheme: currTheme };
  }

  if (action.type === CHANGE_SEARCHED_WORD) {
    const newWord = action.payload.word;

    return { ...state, searchedWord: newWord };
  }

  throw new Error(`Unknown actions ${action.type}`);
};

export default reducer;
