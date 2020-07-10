import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createNewLayerAction } from '../../../store/layers';

interface Props {
  onToggleModal: () => void;
}

const CreateElementModal: FC<Props> = ({ onToggleModal }) => {
  const [elementType, setElementType] = useState<Elements.ElementTypes>('Block');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      createNewLayerAction({
        type: elementType,
        elements: [],
        styles: {
          display: 'block',
        },
      }),
    );

    onToggleModal();
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setElementType(e.target.value as Elements.ElementTypes);
  };

  return (
    <Wrapper>
      <Background onClick={onToggleModal} />
      <Content onSubmit={handleSubmit}>
        <select name="elementType" value={elementType} onChange={handleChange}>
          <option value="Block">Block</option>
          <option value="Image">Image</option>
          <option value="Video">Video</option>
        </select>

        <button>Create Element</button>
      </Content>
    </Wrapper>
  );
};

export default CreateElementModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.form`
  position: relative;
  width: 100%;
  max-width: 800px;
  background: #ffffff;
`;
