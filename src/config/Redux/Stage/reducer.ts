const initialStageState = {
  stage1: false,
  stage2: false,
  stage3: false,
};

const initialState = {
  ...initialStageState,
  action: '',
};

const stageReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case 'STAGE_WIN':
      return {
        ...action.stage,
      };
    default:
      return state;
  }
};

export default stageReducer;