export type AddUserDTO = {
  nome: string;
  email: string;
  username: string;
  password: string;
};

export type UpdateUserDTO = {
  nome?: string;
  email?: string;
  username?: string;
  password?: string;
};

export type UserResponseDTO = {
  nome: string;
  email: string;
  username: string;
};