import { Block } from './block.model';

export interface News {
  id: number;
  like: number;
  dizlike: number;
  blocks: Block[];
}
