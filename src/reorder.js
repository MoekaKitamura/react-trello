export const reorder = (list, startIndex, endIndex) => {
  const remove = list.splice(startIndex, 1);
  list.splice(endIndex, 0, ...remove);
};
