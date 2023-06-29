import axios from "axios";

const Api_url = "/api/users/";

const register = async (userData) => {
  const response = await axios.post(Api_url, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const login = async (userCredential) => {
  const response = await axios.post(Api_url + "login", userCredential);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
