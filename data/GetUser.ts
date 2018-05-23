export class User {

  private _username: string;
  private _pass: string;

  set Username(value) {
    this._username = value;
  }

  get Username(): string {
    return this._username;
  }

  set Pass(value) {
    this._pass = value;
  }

  get Pass(): string {
    return this._pass;
  }
}

export const GetValidUser = () => {
  const user = new User();
  user.Username = 'oscarbuho888@gmail.com';
  user.Pass = 'Pruebas1005';
  return user;
}

export const GetInvalidUser = () => {
  const user = new User();
  user.Username = '';
  user.Pass = '';
  return user;
}
