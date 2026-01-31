import { TreeNodeType } from "../types/tree";

export const fetchChildren = (parentId: string): Promise<TreeNodeType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: parentId + "-1",
          name: "Level A",
          hasChildren: true
        },
        {
          id: parentId + "-2",
          name: "Level B"
        }
      ]);
    }, 1000);
  });
};
