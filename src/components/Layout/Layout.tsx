import React, { FC } from 'react';
import styled from 'styled-components';

import LeftBar from '../main-containers/LeftBar';
import RightBar from '../main-containers/RightBar';
import Desktop from '../main-containers/Desktop';
import SettingsBar from '../main-containers/SettingsBar';

const Layout: FC = () => {
  return (
    <Wrapper>
      <SettingsBar />
      <Row>
        <LeftBar />
        <Desktop />
        <RightBar />
      </Row>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  overflow: hidden;
`;

const Row = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
`;
