const sessionIdToUseMap = new Map();

const setUser = async (id, user) => {
  sessionIdToUseMap.set(id, user);
};

const getUser = async (id) => {
  return sessionIdToUseMap.get(id);
};

module.exports = {
  setUser,
  getUser,
};
