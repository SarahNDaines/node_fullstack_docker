import { ContactType } from "../types/types";

export class Contact implements ContactType {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // Method to create an instance from a database row
  static fromRow(row: { id: number, name: string }): Contact {
    return new Contact(row.id, row.name);
  }
}
