const initialstate = {
  isLogged: true,
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
