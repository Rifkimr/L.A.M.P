import { ChangeEvent, useState } from "react";
import { API } from "../libs/API";
import { useNavigate } from "react-router-dom";
import { IRegister } from "../interfaces/user";

export function useRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
    role: 0,
    attachment: "",
  });

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("masuk");
    console.log("masuk form", formData);

    try {
      const response = API.post("/auth/register", formData);
      console.log("error", response);
      navigate("/login/teacher");
    } catch (error) {
      console.log("REGISTER GAGAL!", error);
    }
  };

  const handchange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return { handleRegister, useRegister, handchange, formData };
}
