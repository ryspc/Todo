export class User {

    id: number;
    username: string;
    password: string;
    email: string;
    role: string;

constructor(
        id: number = 0,
        username: string = '',
        password: string = '',
        email: string = '',
        role: string = ''
    ) {
        this.id = id ;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;

    }
}
