

// REGISTER

import { instance } from "../config/config";
import { requestPath } from "./requestPath";

export const CREATE_USER = (data) => instance.post(requestPath.createUser, data);

export const LOGIN_USER = (data) => instance.post(requestPath.loginUser, data);