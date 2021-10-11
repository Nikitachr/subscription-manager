import { FC } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { IBaseComponent } from 'interfaces/base-component.interface';
import { ReactComponent as SunIco } from 'assets/icons/sun.svg';
import useTheme, { TTheme } from 'hooks/use-theme';
import SunIcon from 'components/right-side/sun-icon';
import MoonIcon from 'components/right-side/moon-icon';

const ThemeSwitcher: FC<IBaseComponent> = ({ className = '' }) => {
  const [theme, setTheme] = useTheme();

  const handleButtonClick = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={`${className} `}>

      <button onClick={handleButtonClick} className="w-12 h-12 outline-none flex items-center justify-center hover:shadow-dark dark:hover:shadow-light rounded-full transition duration-300 fill-current dark:text-white text-text-main">
          {theme === 'light' ? <SunIcon/> : <MoonIcon/>}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
