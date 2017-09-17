export class User {
    private constructor(
        public username: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public password: string
    ) { }
    
    static fromJson(json: any): User {
        return new User(
            json.username,
            json.first_name,
            json.last_name,
            json.password,
            json.email
        );
    }
}
