export class User {
  private constructor(
    public pk: number,
    public username: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public password: string,
    public user: any
  ) {}

  static fromJson(json: any): User {
    return new User(
      json.pk,
      json.username,
      json.first_name,
      json.last_name,
      json.password,
      json.email,
      ''
    );
  }

  // static empty(): User {
  //   return new User(-1, "", "", "", "", "");
  // }
}
