import { RootState } from '../root.reducer';

export const selectSelectedLayerId = ({ layers }: RootState) => layers.selectedLayerId;

export const selectLayerById = (id: string) => ({ layers }: RootState) => layers.layersCollection[id];

export const selectLayersCollection = ({ layers }: RootState) => layers.layersCollection;

export const selectSelectedLayerStyles = ({ layers }: RootState) => layers.selectedElementStyles;

export const selectSelectedElementRef = ({ layers }: RootState) => layers.selectedLayerRef;