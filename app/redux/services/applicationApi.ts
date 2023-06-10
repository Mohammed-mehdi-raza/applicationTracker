import axios from "axios";
import { User } from "@/types/user";
import { Application } from "@/types/application";
import { Search } from "@/types/search";

const url = process.env.URl;

const API = axios.create({baseURL:url});

export const FETCHALL = (id:User["_id"],page:number) => API.get(`/api/application/${id}`,{params:{page}});

export const ADD = (data:Application,id:User["_id"]) => API.post(`/api/application/add/${id}`,data);

export const UPDATE = (data:Application) => API.put(`/api/application/update/${data._id}`,data);

export const DELETE = (data:Application) => API.delete(`/api/application/update/${data._id}`);

export const FILTER = (data:Search,id:User["_id"],page:number) => API.post(`/api/application/${id}`,data,{params:{page}});
