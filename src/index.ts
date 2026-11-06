import { User } from "./models/User";
import { Admin } from "./models/Admin";
import { Note } from "./models/Note";
import { NoteBook } from "./models/NoteBook";
import { Storage } from "./generics/Storage";

console.log("=== Simple Notes Management System (TypeScript OOP) ===");

// 1. Create Base User
const user1 = new User(1, "Mohamed Badour", "badour@example.com", "Secret123", "01012345678", 22);
user1.displayInfo();

// 2. Inheritance: Admin User
const admin1 = new Admin(2, "Eng. Mostafa", "admin@route.com", "AdminPass!", "01198765432", 30);
admin1.displayInfo();

// 3. Class Note & Association with User
const note1 = new Note(101, "Learning TS", "TypeScript brings static typing to JavaScript making large apps manageable.", user1);
console.log("Note preview:", note1.preview());

// Admin manages note
admin1.manageNote(note1, "highlight");

// 4. Composition & Aggregation: NoteBook
const myBook = new NoteBook(1, "Backend Studies", user1);
myBook.addNote(note1);

// 5. Generics: Storage
const userStorage = new Storage<User>();
userStorage.addItem(user1);
userStorage.addItem(admin1);
console.log(Stored users count: );

const noteStorage = new Storage<Note>();
noteStorage.addItem(note1);
console.log(Stored notes count: );
