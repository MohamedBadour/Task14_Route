import { User } from "./User";
import { Note } from "./Note";

export class Admin extends User {
  private permissions: string[];

  constructor(id: number, name: string, email: string, password: string, phone: string, age: number, permissions: string[] = ["ALL"]) {
    super(id, name, email, password, phone, age);
    this.permissions = permissions;
  }

  // Admin method to manage notes
  public manageNote(note: Note, action: "archive" | "highlight" | "delete"): void {
    console.log(Admin  performed action '' on note: "" (ID: ));
  }
}
