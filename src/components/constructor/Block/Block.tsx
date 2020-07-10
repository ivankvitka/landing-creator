import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  selectLayerById,
  selectLayersCollection,
  selectSelectedLayerStyles,
  selectSelectedLayerId,
} from '../../../store/layers';
import { useSelectLayer } from '../../../shared/hooks/useSelectLayer.hook';
import { useSelectLayerOnMount } from '../../../shared/hooks/useSelectLayerOnMount';
import { useSelectNewRef } from '../../../shared/hooks/useSelectNewRef.hook';

interface Props {
  id: string;
  elementData: Elements.Block;
}

const Block: FC<Props> = ({ id, elementData }) => {
  const layersCollection = useSelector(selectLayersCollection);
  const selectedLayerId = useSelector(selectSelectedLayerId);
  const selectedLayerStyles = useSelector(selectSelectedLayerStyles);
  const handleSelectLayer = useSelectLayer(id);
  const currentLayer = useSelector(selectLayerById(id));
  const elementRef = useRef(null);

  const isSelected = id === selectedLayerId;

  useSelectLayerOnMount(id);
  useSelectNewRef(elementRef, selectedLayerId, selectedLayerStyles, isSelected);

  const { styles } = elementData;

  return (
    <Wrapper selected={id === selectedLayerId} onClick={handleSelectLayer} id={id} style={styles} ref={elementRef}>
      {currentLayer.elements.map((id: string) => (
        <Block key={id} id={id} elementData={layersCollection[id]} />
      ))}
    </Wrapper>
  );
};

export default Block;

interface WrapperProps {
  selected: boolean;
}

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  height: 100%;
  outline: 1px solid ${({ selected }: WrapperProps) => (selected ? '#350e47' : '#eeeeee')};

  &:hover {
    outline-color: #dd1173;
  }
`;
