import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import CreateElementModal from '../CreateElementModal';
import { useSelector } from 'react-redux';
import { selectSelectedElementRef, selectSelectedLayerStyles, selectSelectedLayerId } from '../../../store/layers';
import { getControlsRect } from './Controls.helpers';

const modalRoot = document.getElementById('modal-root');

const Controls = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const selectedLayerId = useSelector(selectSelectedLayerId);
  const selectedElementStyles = useSelector(selectSelectedLayerStyles);
  const selectedElementRef = useSelector(selectSelectedElementRef);
  const controlsRect = useMemo(() => getControlsRect(selectedElementRef), [
    selectedLayerId,
    selectedElementStyles,
    selectedElementRef,
  ]);

  const handleToggleModal = () => setIsModalVisible(prevState => !prevState);

  return (
    <Wrapper
      style={
        controlsRect
          ? {
              top: `${controlsRect.top}px`,
              left: `${controlsRect.left}px`,
            }
          : {}
      }
    >
      <AddElementButton onClick={handleToggleModal}>+</AddElementButton>

      {modalRoot && isModalVisible && createPortal(<CreateElementModal onToggleModal={handleToggleModal} />, modalRoot)}
    </Wrapper>
  );
};

export default Controls;

const Wrapper = styled.div`
  position: absolute;
`;

const AddElementButton = styled.div`
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-weight: bold;
  color: #dd1173;
  border: 2px solid #dd1173;
  border-radius: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    border-color: #350e47;
    color: #350e47;
  }
`;
