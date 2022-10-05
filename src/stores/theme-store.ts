import { autorun, makeAutoObservable } from 'mobx';

export enum THEMES {
  DARK = 'dark',
  LIGHT = 'light',
}

class ThemeStore {
  theme: THEMES = THEMES.LIGHT;

  constructor() {
    makeAutoObservable(this);
    this.getThemeFromLS();

    autorun(() => {
      this.saveThemeToLS();
    });
  }

  toggleTheme = () => {
    this.theme = this.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  };

  getThemeFromLS() {
    const theme = localStorage.getItem('theme');
    if (!theme) return;
    this.theme = JSON.parse(theme);
  }

  saveThemeToLS() {
    localStorage.setItem('theme', JSON.stringify(this.theme));
  }
}

export default ThemeStore;
