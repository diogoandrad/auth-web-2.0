export class RegisterUser {
	constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
};

export class LoginUser {
	constructor(email, password) {
    this.email = email;
    this.password = password;
  }
};