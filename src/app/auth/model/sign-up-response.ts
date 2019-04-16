export class SingUpResponse {

    id: any;
    username: string;
    password: string;
    authorities: string[];
    
    constructor(id: string, password: any, username: string, authorities: string[]) {
        this.id = id;
        this.password = password;
        this.username = username;
        this.authorities = authorities;
    }
}