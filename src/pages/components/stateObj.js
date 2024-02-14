// Importing the useState hook from React to manage state
import { useState } from 'react';

// Defining the PersonData component
export default function PersonData() {
  // Initializing state variables using useState hook
  const [fName, setFName] = useState(''); // State variable for first name
  const [lName, setLName] = useState(''); // State variable for last name
  const [age, setAge] = useState(0); // State variable for age
  const [person, setPerson] = useState({ fullName: '', age: 0 }); // State variable for person object

  // Function to handle button click
  function handleClick() {
    // Combining first name and last name
    let name = fName + ' ' + lName;
    // Updating 'person' state with combined name and age
    setPerson({ fullName: name, age: age });
  }

  // Rendering JSX elements
  return (
      <>
        {/* Textarea for entering first name, onChange updates 'fName' state */}
        <textarea value={fName} onChange={e => setFName(e.target.value)} />
        {/* Textarea for entering last name, onChange updates 'lName' state */}
        <textarea value={lName} onChange={e => setLName(e.target.value)} />
        {/* Textarea for entering age, onChange updates 'age' state */}
        <textarea value={age} onChange={e => setAge(e.target.value)} />
        {/* Button to save data, onClick calls 'handleClick' */}
        <button onClick={handleClick}> Save </button>
        {/* Conditional rendering to display person data if fullName exists */}
        {person.fullName && <p> Person: {person.fullName} is {person.age} years old </p>}
      </>
  )
}