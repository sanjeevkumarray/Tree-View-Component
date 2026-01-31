import React, { useState } from "react";
import TreeNode from "./TreeNode";
import { TreeNodeType } from "../types/tree";
import { fetchChildren } from "../api/mockApi";
import { updateNode, removeNode } from "../utils/treeHelpers";

const initialTree: TreeNodeType[] = [
  { id: "1", name: "Root Node", hasChildren: true }
];

const TreeView: React.FC = () => {
  const [tree, setTree] = useState<TreeNodeType[]>(initialTree);

  // Toggle expand/collapse
  const toggleNode = (id: string) => {
    setTree(prev =>
      updateNode(prev, id, node => {
        if (!node.isExpanded && node.hasChildren && !node.children) {
          // Lazy load children
          fetchChildren(id).then(children => {
            setTree(t =>
              updateNode(t, id, n => ({
                ...n,
                children,
                isExpanded: true
              }))
            );
          });
          return node;
        }
        return { ...node, isExpanded: !node.isExpanded };
      })
    );
  };

  // Add a child node
  const addNode = (id: string, name: string) => {
    setTree(prev =>
      updateNode(prev, id, node => {
        const newChild: TreeNodeType = {
          id: `${id}-${Date.now()}`, // unique id
          name,
          hasChildren: false
        };
        const children = node.children ? [...node.children, newChild] : [newChild];
        return { ...node, children, hasChildren: true, isExpanded: true };
      })
    );
  };

  // Delete a node
  const deleteNode = (id: string) => {
    setTree(prev => removeNode(prev, id));
  };

  // Edit node name
  const editNode = (id: string, name: string) => {
    setTree(prev =>
      updateNode(prev, id, node => ({ ...node, name }))
    );
  };

  return (
    <div className="tree-container">
      {tree.map(node => (
        <TreeNode
          key={node.id}
          node={node}
          onToggle={toggleNode}
          onAdd={addNode}
          onDelete={deleteNode}
          onEdit={editNode}
        />
      ))}
    </div>
  );
};

export default TreeView;
