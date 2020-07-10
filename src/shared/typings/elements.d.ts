declare namespace Elements {
  type ElementTypes = 'Block' | 'Image' | 'Video';

  interface Element {
    type: ElementTypes;
    styles: React.CSSProperties;
  }

  interface Block extends Element {
    elements: string[];
  }

  type AnyElement = Block;
}
