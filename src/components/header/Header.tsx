import ThemeSwitch from 'components/theme-switch/ThemeSwitch';
import Container from 'components/container/Container';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.AppBar position="relative">
      <Container>
        <S.Toolbar>
          <S.Title>Where in the world?</S.Title>
          <ThemeSwitch />
        </S.Toolbar>
      </Container>
    </S.AppBar>
  );
};

export default Header;
