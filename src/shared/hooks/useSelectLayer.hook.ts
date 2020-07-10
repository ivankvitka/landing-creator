import { useDispatch } from 'react-redux';
import { MouseEvent } from 'react';
import { selectLayerAction } from '../../store/layers';

export const useSelectLayer = (id: string) => {
  const dispatch = useDispatch();

  return (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(selectLayerAction(id));
  };
};
