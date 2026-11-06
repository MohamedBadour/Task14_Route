import { Note } from "./Note";
import { User } from "./User";

export class NoteBook {
  public id: number;
  public name: string;
  // Composition: Notes belong strictly to this NoteBook
  private notes: Note[] = [];
  // Aggregation: The NoteBook is owned by a User, but exists independently as a concept
  public owner?: User;

  constructor(id: number, name: string, owner?: User) {
    this.id = id;
    this.name = name;
    this.owner = owner;
  }

  public addNote(note: Note): void {
    this.notes.push(note);
    console.log(Added note "" to notebook "".);
  }

  public removeNote(noteId: number): boolean {
    const initialLength = this.notes.length;
    this.notes = this.notes.filter((n) => n.id !== noteId);
    return this.notes.length < initialLength;
  }

  public getNotes(): Note[] {
    return [...this.notes];
  }
}
