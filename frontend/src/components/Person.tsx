export interface Person {
  id: number;
  name: string;
  email: string;
}
export class People {
  people: Person[];

  constructor() {
    this.people = [];
  }

  addPerson(person: Person) {
    this.people.push(person);
  }

  getPeople() {
    return this.people;
  }
}
