import { combineReducers } from 'redux';

import { layersReducer as layers } from './layers/layers.reducer';

export const rootReducer = combineReducers({
  layers,
});

export type RootState = ReturnType<typeof rootReducer>;
