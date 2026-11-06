import { User } from "./User";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public userId: number; // reference to User ID
  public author?: User;  // Association with User

  constructor(id: number, title: string, content: string, user: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = user.getId();
    this.author = user;
  }

  public preview(): string {
    return this.content.length > 30 ? this.content.substring(0, 30) + "..." : this.content;
  }
}
