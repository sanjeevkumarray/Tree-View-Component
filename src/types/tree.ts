export interface TreeNodeType {
  id: string;
  name: string;
  children?: TreeNodeType[];
  hasChildren?: boolean;
  isExpanded?: boolean;
}
