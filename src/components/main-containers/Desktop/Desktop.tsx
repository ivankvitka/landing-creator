import React, { createContext, RefObject, useRef } from 'react';
import styled from 'styled-components';
import MainBlock from '../../constructor/MainBlock';
import Controls from '../../constructor/Controls';

interface DesktopContextValue {
  desktopRef: RefObject<HTMLDivElement>;
}

export const DesktopContext = createContext({
  desktopRef: {},
});

const Desktop = () => {
  const desktopRef = useRef(null);

  return (
    <DesktopContext.Provider value={{ desktopRef }}>
      <Wrapper ref={desktopRef}>
        <Controls />
        <MainBlock />
      </Wrapper>
    </DesktopContext.Provider>
  );
};

export default Desktop;

const Wrapper = styled.div`
  position: relative;
  padding: 10px;
  padding-bottom: 1000px;
  max-height: 100%;
  flex-grow: 1;
  overflow: auto;
`;
