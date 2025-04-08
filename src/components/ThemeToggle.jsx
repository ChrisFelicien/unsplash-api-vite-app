import { CiDark, CiLight } from "react-icons/ci";
import useAppContext from "../appContext";
import { CHANGE_THEME } from "../actions";

const ThemeToggle = () => {
  const { state, dispatch } = useAppContext();

  return (
    <section className='toggle-container'>
      <button
        type='button'
        className='dark-toggle'
        onClick={() => dispatch({ type: CHANGE_THEME })}
      >
        {state.isDarkTheme ? (
          <CiLight className='toggle-icon dark-icon' />
        ) : (
          <CiDark className='toggle-icon ' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
