const getIsAuthenticated = state => Boolean(state.auth.token);

const getUserEmail = state => state.auth.user.email;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUserEmail,
};
