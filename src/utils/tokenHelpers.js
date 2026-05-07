export const setToken = (token) => localStorage.setItem("ll_token", token);
export const getToken = () => localStorage.getItem("ll_token");
export const removeToken = () => localStorage.removeItem("ll_token");

export const setUser = (user) => localStorage.setItem("ll_user", JSON.stringify(user));
export const getUser = () => JSON.parse(localStorage.getItem("ll_user"));
export const removeUser = () => localStorage.removeItem("ll_user");
