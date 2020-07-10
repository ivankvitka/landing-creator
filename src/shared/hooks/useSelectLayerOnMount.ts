import { useEffect } from 'react';
import { selectLayerAction } from '../../store/layers';
import { useDispatch } from 'react-redux';

export const useSelectLayerOnMount = (id: string) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectLayerAction(id));
  }, [])
};
