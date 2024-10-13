import axios from "axios";
import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"

export const login = async (userData) => {
  const BASE_URL = "https://15106.fullstack.clarusway.com";
  try {
    const data = await axios.post(`${BASE_URL}/auth/login`, userData);
    toastSuccessNotify("Login işlemi başarılı")
     console.log(data);
  } catch (error) {
    toastErrorNotify("Login işlemi başarısız")
    console.log(error);
  }
};
