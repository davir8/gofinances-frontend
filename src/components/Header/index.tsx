import React from 'react';

import { useRouteMatch } from 'react-router-dom';

import { Container, StyledLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { path } = useRouteMatch();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <StyledLink to="/" active={Number(path === '/')}>
            Listagem
          </StyledLink>
          <StyledLink to="/import" active={Number(path === '/import')}>
            Importar
          </StyledLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
