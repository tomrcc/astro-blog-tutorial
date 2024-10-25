import { useState } from 'react';

export default function Greeting({messages}) {

  const [greeting, setGreeting] = useState('Hello');
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  return (
    <div> 
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => {
        console.log('here')
        setGreeting(randomMessage())
      }
      }>
        New Greeting
      </button>
    </div>
  );
}