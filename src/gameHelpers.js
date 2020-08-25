export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  let stage = Array(20)
    .fill()
    .map(() => Array(12).fill([0, 'clear']));

  return stage;
};
