export const state = () => ({
  isSidebar: false,
  isSidePanel: false
});

export const getters = {
  isSidebar(state) {
    return state.isSidebar;
  },
  isSidePanel(state) {
    return state.isSidePanel;
  }
}

export const mutations = {
  UPDATE_SIDEBAR_STATUS(state, status) {
    if(status || !state.isSidebar) {
      state.isSidePanel = false;
    }

    if(status === false) {
      state.isSidebar = false;
      return;
    }

    if(status) {
      state.isSidebar = true;
      return;
    }

    state.isSidebar = !state.isSidebar;
  },
  UPDATE_SIDEPANEL_STATUS(state, status) {
    state.isSidePanel = status || false;
  }
}

export const actions = {}