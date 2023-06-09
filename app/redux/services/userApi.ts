import { User } from "@/types/user";
import axios from "axios";

const url = process.env.URL;

const API = axios.create({baseURL:url});

export const LOGIN =(data:User)=> API.post('/api/auth/login',data);

export const REGISTER = (data:User) => API.post('/api/auth/register',data);

export const LOGOUT = () => API.get('/api/auth/logout');

export const PROFILE = () => API.get('/api/auth/me');