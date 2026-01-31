import { TreeNodeType } from "../types/tree";

export const updateNode = (
  nodes: TreeNodeType[],
  id: string,
  cb: (node: TreeNodeType) => TreeNodeType
): TreeNodeType[] =>
  nodes.map(node => {
    if (node.id === id) return cb(node);
    if (node.children) {
      return { ...node, children: updateNode(node.children, id, cb) };
    }
    return node;
  });

export const removeNode = (
  nodes: TreeNodeType[],
  id: string
): TreeNodeType[] =>
  nodes
    .filter(node => node.id !== id)
    .map(node => ({
      ...node,
      children: node.children ? removeNode(node.children, id) : []
    }));
