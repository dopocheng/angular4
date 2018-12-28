export interface User {
    access_token?: string;
    email: string;
    password: string;
    data ?: {
        id: string,
        name: string,
        avatarCustomized: true,
        token: string,
        customerNumber: number,
        isHomeCreator: false
    };
}
