export default class Person {
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  
  constructor(options) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
  }
}
