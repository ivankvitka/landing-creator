export interface LayersCollection {
  [key: string]: Elements.Block;
}

export interface NewStyle {
  [key: string]: string;
}

export interface LayersState {
  selectedLayerId: string;
  layersCollection: LayersCollection;
  selectedElementStyles: React.CSSProperties;
  selectedLayerRef: React.RefObject<HTMLElement> | null;
}

export const SELECT_LAYER = 'SELECT_LAYER';
export const CREATE_NEW_LAYER = 'CREATE_NEW_LAYER';
export const CHANGE_STYLES = 'CHANGE_STYLES';
export const CHANGE_SELECTED_LAYER_REF = 'CHANGE_SELECTED_LAYER_REF';
