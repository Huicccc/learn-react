// Importing the useState hook from React to manage state
import { useState } from 'react';
import { sculptureList } from '../../data/data.js';

// Defining the Gallery component
export default function Gallery() {
  // Initializing state variable 'index' using useState hook, initial value is 0
  const [index, setIndex] = useState(0);

  // Function to handle button click, updates 'index' by incrementing it
  function handleClick() {
    setIndex(index + 1); // Incrementing 'index' by 1
  }

  // Accessing the current sculpture object from the 'sculptureList' array
  let sculpture = sculptureList[index];

  // Returning JSX elements
  return (
      <>
        <button onClick={handleClick}>
          Next
        </button>
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        {/* Displaying the index of the current sculpture and the total number of sculptures */}
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <img
            src={sculpture.url}
            alt={sculpture.alt}
        />
        <p>
          {sculpture.description}
        </p>
      </>
  );
}
