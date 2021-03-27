export type BlockType = BasicType | MarketingType;

// 基础组件
export enum BasicType {
  PAGE = 'page',
  SECTION = 'section',
}

// 营销组件
export enum MarketingType {
  COUNTDOWN = 'countdown',
}

export const DRAG_HOVER_CLASSNAME = 'block-dragover';
export const DRAG_TANGENT_CLASSNAME = 'block-tangent';
export const BLOCK_SELECTED_CLASSNAME = 'block-selected';
export const BLOCK_HOVER_CLASSNAME = 'block-hover';