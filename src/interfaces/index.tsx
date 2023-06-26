export interface UserType{
    firstName:string
    lastName:string
    email:string
    userID:string
}

export interface ActionType {
    type: string
    payload: any
}

export interface StoreStateType {
    token: string
    currentUser?:UserType
}