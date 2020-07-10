export const getParentId = (childrenId: string) => {
  const layersIdsArr = childrenId.split('_');
  layersIdsArr.pop();
  return layersIdsArr;
};

export const generateChildrenId = (parentId: string, childElementsLength: number) =>
  `${parentId}_${childElementsLength}`;
