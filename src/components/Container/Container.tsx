import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

const Container: FC<Props> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;

const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
`;
