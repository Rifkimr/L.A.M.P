import { ChangeEvent, useState } from "react";
import { API } from "../libs/API";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../interfaces/user";

export function useLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function handleLogin() {
    try {
      const response = await API.post("/auth/login", formData);
      console.log(response.data);
      console.log("login berhasil yeyyyyyyyyy!!", response);
      navigate("/");
    } catch (error) {
      alert("LOGIN GAGAL SILAHKAN LOGIN KEMBALI!");
      console.log("LOGIN GAGAL!!", error);
    }
  }

  async function handleLogout() {
    try {
      const response = await API.get("/auth/logout");
      console.log("logout berhasil!!", response);
      navigate("/login");
    } catch (error) {
      alert("LOGOUT GAGAL!");
      console.log("LOGIN GAGAL!!", error);
    }
  }

  return { useLogin, handleLogin, handChange, formData, handleLogout };
}
