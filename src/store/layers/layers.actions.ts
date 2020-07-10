import { CREATE_NEW_LAYER, NewStyle, SELECT_LAYER, CHANGE_STYLES, CHANGE_SELECTED_LAYER_REF } from './layers.types';
import { RefObject } from 'react';

export const selectLayerAction = (id: string) => ({
  type: SELECT_LAYER,
  payload: id,
});

export const createNewLayerAction = (payload: Elements.AnyElement) => ({
  type: CREATE_NEW_LAYER,
  payload,
});

export const changeStylesAction = (payload: NewStyle) => ({
  type: CHANGE_STYLES,
  payload,
});

export const changeSelectedLayerRefAction = (payload: RefObject<HTMLElement> | null) => ({
  type: CHANGE_SELECTED_LAYER_REF,
  payload,
});
