import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectLayerById, selectLayersCollection, selectSelectedLayerId } from '../../../store/layers';
import Block from '../Block';
import { useSelectLayer } from '../../../shared/hooks/useSelectLayer.hook';
import { useSelectLayerOnMount } from '../../../shared/hooks/useSelectLayerOnMount';
import { useSelectNewRef } from '../../../shared/hooks/useSelectNewRef.hook';

const MainBlock = () => {
  const selectedLayerId = useSelector(selectSelectedLayerId);
  const layersCollection = useSelector(selectLayersCollection);
  const rootLayerId = 'layer_0';
  const currentLayer = useSelector(selectLayerById(rootLayerId));
  const handleSelectLayer = useSelectLayer(rootLayerId);
  const isSelected = selectedLayerId === rootLayerId;
  const elementRef = useRef(null);
  useSelectLayerOnMount(rootLayerId);
  useSelectNewRef(elementRef, selectedLayerId, {}, isSelected);
  return (
    <Wrapper isSelected={isSelected} onClick={handleSelectLayer} id={rootLayerId} ref={elementRef}>
      {currentLayer.elements.map((id: string) => (
        <Block key={id} id={id} elementData={layersCollection[id]} />
      ))}
    </Wrapper>
  );
};

export default MainBlock;

interface WrapperProps {
  isSelected: boolean;
}

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  min-height: 100px;
  outline: 1px solid ${({ isSelected }: WrapperProps) => (isSelected ? '#350e47' : '#eeeeee')};

  &:hover {
    outline-color: #dd1173;
  }
`;
