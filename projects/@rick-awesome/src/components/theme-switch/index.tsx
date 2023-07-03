/**
 * @link https://codepen.io/isaaclouzeiro/pen/YzRzmwQ
 */

import { useTheme } from '@/hooks/useTheme';
import './index.scss';

export type ThemeSwitchProps = {
  className?: string;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className = '' }) => {
  const { toggleTheme, theme } = useTheme();

  const onClick = () => {
    toggleTheme();
  };

  return (
    <>
      <section
        className={`theme-switch theme-switch--${theme} ${className}`}
        id="theme-switch">
        <button type="button" id="switch" onClick={onClick}>
          <i className="bx bxs-sun"></i>
          <span className="btn-switch"></span>
          <i className="bx bxs-moon"></i>
        </button>
      </section>
    </>
  );
};

export default ThemeSwitch;
