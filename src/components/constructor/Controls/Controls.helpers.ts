import { RefObject } from 'react';

export const getControlsRect = (selectedLayerRef: RefObject<HTMLElement> | null) => {
  if (selectedLayerRef && selectedLayerRef.current) {
    const { current: currentElement } = selectedLayerRef;
    const currentElementRect = currentElement.getBoundingClientRect();

    return {
      top: currentElement.offsetTop + currentElementRect.height / 2,
      left: currentElement.offsetLeft + currentElementRect.width / 2,
    };
  }
  return null;
};
