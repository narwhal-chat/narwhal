export const token = (state) => state.auth.token;
export const userId = (state) => state.auth.userData.id;
export const pods = (state) => state.chat.pods;
export const topics = (state) => state.chat.topics;
export const activePod = (state) => state.chat.activePod;
export const activeTopic = (state) => state.chat.activeTopic;
export const socket = (state) => state.chat.socket;
