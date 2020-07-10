import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeStylesAction, selectSelectedLayerStyles } from '../../../store/layers';
import Select from './components/Select';

const RightBar: FC = () => {
  const selectedElementStyles = useSelector(selectSelectedLayerStyles);
  const dispatch = useDispatch();

  const selectedElementStylesEntries = Object.entries(selectedElementStyles);

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>, propertyName: string): void => {
    dispatch(changeStylesAction({ [propertyName]: e.target.value }));
  };

  return (
    <Wrapper>
      <Row>
        <PropertyTitle>Display</PropertyTitle>
        <Select
          propertyName="display"
          values={['block', 'inline', 'flex', 'none']}
          selectedValue={selectedElementStyles.display}
          onSelectChange={handleChange}
        />
      </Row>
      <Row>
        <PropertyTitle>Position</PropertyTitle>
        <Select
          propertyName="position"
          values={['static', 'absolute', 'relative', 'none']}
          selectedValue={selectedElementStyles.display}
          onSelectChange={handleChange}
        />
      </Row>
      <input
        type="text"
        value={selectedElementStyles.top}
        name="top"
        onChange={e => handleChange(e, 'top')}
      />
    </Wrapper>
  );
};

export default RightBar;

const Wrapper = styled.div`
  padding: 10px;
  background: #1b1b1b;
  flex-grow: 1;
  max-width: 350px;
`;

const PropertyTitle = styled.span`
  margin-right: 20px;
  font-size: 14px;
  text-transform: capitalize;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
