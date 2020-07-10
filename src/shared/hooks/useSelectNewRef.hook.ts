import { CSSProperties, RefObject, useEffect } from 'react';
import { changeSelectedLayerRefAction } from '../../store/layers';
import { useDispatch } from 'react-redux';

export const useSelectNewRef = (
  elementRef: RefObject<HTMLElement> | null,
  selectedLayerId: string,
  selectedLayerStyles: CSSProperties,
  isSelected: boolean,
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSelected) {
      dispatch(changeSelectedLayerRefAction(elementRef));
    }
  }, [selectedLayerId, selectedLayerStyles]);
};
