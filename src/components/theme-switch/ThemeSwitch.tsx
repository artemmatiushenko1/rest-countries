import { Button } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStores } from 'hooks/use-stores';
import { THEMES } from 'stores/theme-store';

const ThemeSwitch = () => {
  const { typography, palette } = useTheme();
  const {
    themeStore: { theme, toggleTheme },
  } = useStores();

  const onButtonClickHandler = () => {
    toggleTheme();
  };

  return (
    <Button
      startIcon={
        theme === THEMES.DARK ? <DarkModeIcon /> : <DarkModeOutlinedIcon />
      }
      variant="text"
      sx={{
        color: palette.text.primary,
        textTransform: 'none',
        fontWeight: typography.fontWeightBold,
        fontSize: '15px',
      }}
      onClick={onButtonClickHandler}
    >
      Dark Mode
    </Button>
  );
};

export default observer(ThemeSwitch);
