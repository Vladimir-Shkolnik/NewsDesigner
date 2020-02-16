import { blockType } from './block-type.enum';

export interface Block {
  id: number;
  blockType: blockType;
  Position: Position;
}
