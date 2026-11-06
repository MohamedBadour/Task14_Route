export class User {
  protected id: number;
  public name: string;
  public email: string;
  private password: string;
  public phone: string;
  private _age: number = 18;

  constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.age = age;
  }

  public get age(): number {
    return this._age;
  }

  public set age(val: number) {
    if (val < 18 || val > 60) {
      throw new Error("Age must be between 18 and 60.");
    }
    this._age = val;
  }

  public getId(): number {
    return this.id;
  }

  public displayInfo(): void {
    console.log([User ID: ] Name: , Email: , Phone: , Age: );
  }
}
