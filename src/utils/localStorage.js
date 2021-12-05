const USER_TOKEN = '%USER%token';

export const setUserToken = async (token) => {
  await localStorage.setItem(USER_TOKEN, token);
};
export const getUserToken = async () => localStorage.getItem(USER_TOKEN);
export const removeUserToken = () => localStorage.removeItem(USER_TOKEN);
