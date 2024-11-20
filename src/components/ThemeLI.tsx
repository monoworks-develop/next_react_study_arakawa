import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { toggleTheme } from '@/features/theme/themeSlice';

export const ThemeLI = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <li>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="ml-4 px-4 py-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
      >
        {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
      </button>
    </li>
  );
};
