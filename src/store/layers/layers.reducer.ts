import { Reducer } from 'redux';
import { CHANGE_SELECTED_LAYER_REF, CHANGE_STYLES, CREATE_NEW_LAYER, LayersState, SELECT_LAYER } from './layers.types';
import { generateChildrenId } from '../../shared/utils';

const initialState: Readonly<LayersState> = {
  selectedLayerId: '',
  selectedElementStyles: {},
  selectedLayerRef: null,
  layersCollection: {
    layer_0: {
      type: 'Block',
      styles: {},
      elements: [],
    },
  },
};

export const layersReducer: Reducer<LayersState, any> = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LAYER: {
      const { layersCollection } = state;
      const { styles } = layersCollection[action.payload];

      return { ...state, selectedLayerId: action.payload, selectedElementStyles: { ...styles } };
    }

    case CHANGE_STYLES: {
      const { layersCollection, selectedLayerId, selectedElementStyles } = state;

      return {
        ...state,
        selectedElementStyles: { ...selectedElementStyles, ...action.payload },
        layersCollection: {
          ...layersCollection,
          [selectedLayerId]: {
            ...layersCollection[selectedLayerId],
            styles: { ...layersCollection.styles, ...action.payload },
          },
        },
      };
    }

    case CHANGE_SELECTED_LAYER_REF:
      return { ...state, selectedLayerRef: { ...action.payload } };

    case CREATE_NEW_LAYER: {
      const { layersCollection, selectedLayerId } = state;

      const layerElementsArr = layersCollection[selectedLayerId].elements || [];

      const newLayerId = generateChildrenId(selectedLayerId, layerElementsArr.length);

      const newLayer = {
        [newLayerId]: action.payload,
      };

      let selectedLayer = layersCollection[selectedLayerId];
      selectedLayer = {
        ...selectedLayer,
        elements: [...selectedLayer.elements, newLayerId],
      };

      return {
        ...state,
        layersCollection: {
          ...layersCollection,
          ...newLayer,
          [selectedLayerId]: selectedLayer,
        },
      };
    }
    default:
      return state;
  }
};
