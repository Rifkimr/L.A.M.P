export interface IRegister {
  name: string;
  email: string;
  password: string;
  role: number;
  attachment: string;
}

export interface ILogin {
  email: string;
  password: string;
}
