export type Role = "SUPER_ADMIN" | "ADMIN" | "USER" | "AGENT";

export type isActive = "ACTIVE" | "INACTIVE" | "SUSPENDED";

export interface IAuthProvider {
  provider: string;
  providerId: string;
  email?: string;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  picture?: string;
  address?: string;
  isDeleted?: boolean;
  isActive?: isActive;
  isVarified?: boolean;
  auths: IAuthProvider[];
  role: Role;
  transactions?: string[];
  createdAt?: string;
  updatedAt?: string;
}


export interface IWallet {
  _id: string;
  userId: string;
  balance: number;
  currency: string;
  isActive: boolean;
  transactions: string[];
  createdAt: string;
  updatedAt: string;
}
