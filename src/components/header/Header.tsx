import ThemeSwitch from 'components/theme-switch/ThemeSwitch';
import Container from 'components/container/Container';
import * as S from './Header.style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.AppBar position="relative">
      <Container>
        <S.Toolbar>
          <Link to="/">
            <S.Title>Where in the world?</S.Title>
          </Link>
          <ThemeSwitch />
        </S.Toolbar>
      </Container>
    </S.AppBar>
  );
};

export default Header;
