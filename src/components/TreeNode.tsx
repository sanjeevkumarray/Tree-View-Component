import React, { useState } from "react";
import { TreeNodeType } from "../types/tree";

interface Props {
  node: TreeNodeType;
  onToggle: (id: string) => void;
  onAdd: (id: string, name: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, name: string) => void;
}

const TreeNode: React.FC<Props> = ({
  node,
  onToggle,
  onAdd,
  onDelete,
  onEdit
}) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(node.name);

  return (
    <div className="tree-node">
      <div className="node-content">
        {node.hasChildren ? (
          <div className="toggle" onClick={() => onToggle(node.id)}>
            {node.isExpanded ? "−" : "+"}
          </div>
        ) : (
          <div style={{ width: 22 }} />
        )}

        {editing ? (
          <input
            className="node-input"
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={() => {
              onEdit(node.id, value);
              setEditing(false);
            }}
            autoFocus
          />
        ) : (
          <div
            className="node-label"
            onDoubleClick={() => setEditing(true)}
          >
            {node.name}
          </div>
        )}

        <button
          className="node-btn add"
          onClick={() => {
            const name = prompt("Enter node name");
            if (name && name.trim()) onAdd(node.id, name);
          }}
        >
          ＋
        </button>

        <button
          className="node-btn delete"
          onClick={() => {
            if (window.confirm("Delete this node?")) {
              onDelete(node.id);
            }
          }}
        >
          🗑
        </button>
      </div>

      {node.isExpanded &&
        node.children?.map(child => (
          <TreeNode
            key={child.id}
            node={child}
            onToggle={onToggle}
            onAdd={onAdd}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
    </div>
  );
};

export default TreeNode;
