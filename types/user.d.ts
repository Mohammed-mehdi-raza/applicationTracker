export interface User{
    _id?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
}

export type UserContextType = {
    user:User
};