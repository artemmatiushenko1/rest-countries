import { makeAutoObservable } from 'mobx';

export enum THEMES {
  DARK,
  LIGHT,
}

class ThemeStore {
  theme: THEMES = THEMES.LIGHT;

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    if (this.theme === THEMES.LIGHT) {
      this.theme = THEMES.DARK;
    } else {
      this.theme = THEMES.LIGHT;
    }
  };
}

export default ThemeStore;
