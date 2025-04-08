import { CHANGE_SEARCHED_WORD } from "../actions";
import useAppContext from "../appContext";

const SearchForm = () => {
  const { dispatch } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    dispatch({ type: CHANGE_SEARCHED_WORD, payload: { word: searchValue } });
  };

  return (
    <section>
      <h1 className='title'>Unsplash images</h1>
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          placeholder='cat'
          name='search'
          className='form-input search-input'
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
