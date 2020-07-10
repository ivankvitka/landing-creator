import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';

const Header: FC = () => {
  return (
    <Wrapper>
      <Container>
        <LogoTitle>Landing Constructor</LogoTitle>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 20px 30px;
  color: #ffffff;
  background: linear-gradient(135deg, #dd1173, #350e47);
`;

const LogoTitle = styled.span`
  font-size: 30px;
`;
