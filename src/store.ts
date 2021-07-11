import STAGES from './data/minigame.json';

const tmp = localStorage.getItem('completedStageCount');
if (!tmp) {
  localStorage.setItem('completedStageCount', '0');
}
let isPersistant = !(!tmp);
const getLockedStages = () => {
  const cscRaw = localStorage.getItem('completedStageCount');
  if (cscRaw) {
    isPersistant = false;
    const csc = parseInt(cscRaw);
    return STAGES.filter((e, i) => i <= csc);
  } else {
    return [];
  }
};
const incCompletedStages = () => {
  const cscRaw = localStorage.getItem('completedStageCount');
  if (cscRaw) {
    isPersistant = false;
    const csc = parseInt(cscRaw);
    localStorage.setItem('completedStageCount', (csc + 1).toString());
  }
};
const decCompletedStages = () => {
  const cscRaw = localStorage.getItem('completedStageCount');
  if (cscRaw) {
    isPersistant = false;
    const csc = parseInt(cscRaw);
    localStorage.setItem('completedStageCount', (csc - 1).toString());
  }
};

const completedStageCount = {
  name: 'competedStageCount',
  getLockedStages,
  isPersistant,
  incCompletedStages,
  decCompletedStages,
};

export {
  completedStageCount,
};