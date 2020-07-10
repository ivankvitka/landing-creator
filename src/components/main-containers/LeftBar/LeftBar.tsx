import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Tab from '../../Tab';
import { selectLayerById } from '../../../store/layers';

const LeftBar: FC = () => {
  const rootLayer = useSelector(selectLayerById('layer_0'));
  return (
    <Wrapper>
      <Tab id="layer_0" element={rootLayer} />
    </Wrapper>
  );
};

export default LeftBar;

const Wrapper = styled.div`
  flex-grow: 1;
  max-width: 350px;
  background-color: #1b1b1b;
  overflow: auto;
`;
