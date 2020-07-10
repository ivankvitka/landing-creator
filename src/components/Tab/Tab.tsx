import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { LayersCollection, selectLayersCollection, selectSelectedLayerId } from '../../store/layers';
import { useSelectLayer } from '../../shared/hooks/useSelectLayer.hook';

interface Props {
  id: string;
  element: Elements.AnyElement;
}

const Tab: FC<Props> = ({ id, element }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const layersCollection: LayersCollection = useSelector(selectLayersCollection);
  const selectedLayerId = useSelector(selectSelectedLayerId);
  const handleSelectLayer = useSelectLayer(id);

  const { type, elements: childrenElements } = element;

  const handleToggleTab = () => childrenElements && childrenElements.length && setIsExpanded(prevState => !prevState);

  return (
    <Wrapper>
      <Header className={isExpanded ? 'expanded' : ''} onClick={handleToggleTab}>
        <Title>{type}</Title>

        <Settings>
          {childrenElements && childrenElements.length > 0 && <Arrow />}

          <SelectedMark onClick={handleSelectLayer} isSelected={selectedLayerId === id} />
        </Settings>
      </Header>

      {childrenElements && childrenElements.length > 0 && isExpanded && (
        <List>
          {childrenElements.map(elementId => {
            const childrenElement = layersCollection[elementId];

            return <Tab key={elementId} id={elementId} element={childrenElement} />;
          })}
        </List>
      )}
    </Wrapper>
  );
};

export default Tab;

const Wrapper = styled.div`
  padding: 20px 0;
  width: 100%;
`;

const Title = styled.div`
  font-size: 16px;
  color: #ffffff;
  transition: 0.5s;
  text-transform: capitalize;
`;

const Settings = styled.div`
  display: flex;
  align-items: center;
`;

interface SelectedMarkProps {
  isSelected: boolean;
}

const SelectedMark = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid ${({ isSelected }: SelectedMarkProps) => (isSelected ? '#dd1173' : '#ffffff')};
`;

const Arrow = styled.div`
  margin-right: 20px;
  display: flex;
  width: 20px;
  height: 20px;

  &::before {
    display: block;
    margin: auto;
    width: 10px;
    height: 10px;
    content: '';
    border: 5px solid #ffffff;
    border-left-color: transparent;
    border-top-color: transparent;
    transform-origin: 75% 75%;
    transform: translateY(-50%) rotate(45deg);
    transition: 0.5s;
  }
`;

const Header = styled.div`
  padding: 0 20px 10px 20px;
  border-bottom: 1px solid #5b187a;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &.expanded {
    cursor: pointer;

    ${Arrow}::before {
      border-right-color: #dd1173;
      border-bottom-color: #dd1173;
    }
  }

  &.expanded {
    ${Arrow}::before {
      transform: translateY(-50%) rotate(-135deg);
    }
  }
`;

const List = styled.ul`
  padding: 10px 0 10px 30px;
`;
