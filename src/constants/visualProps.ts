import { isMobile } from "react-device-detect";

export const CARD_WIDTH = 115;
export const CARD_WIDTH_PX = `${CARD_WIDTH}px`;
export const CARD_HEIGHT = CARD_WIDTH * 1.52;
export const CARD_HEIGHT_PX = `${CARD_HEIGHT}px`;
export const MODIFIERS_OFFSET = isMobile ? 12 : 8;
