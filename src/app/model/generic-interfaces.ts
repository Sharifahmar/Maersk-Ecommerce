export interface Login{
    email: string,
    password:string
}

export interface LoginResponse{
    token:string
}

export interface Products{
    id?: number,
    title?:string,
    price?:number,
    description?:string,
    category?:string,
    image?:string
}