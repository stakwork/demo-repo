import { useEffect, useState } from 'react';
import { Person } from './Person';
import * as api from '../api';

function People() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    // Fetch people data
    fetch(`${api.host}/people`)
      .then((response) => response.json())
      .then((data: Person[]) => setPeople(data))
      .catch((error) => console.error('Error fetching people:', error));
  }, []);

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <h3>{person.name}</h3>
            <p>{person.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default People;
