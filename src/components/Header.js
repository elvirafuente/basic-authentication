import React from 'react';

export default function Header({name}) {
    console.log(name)
  return (
      <header className="app__header">
        <h1>basic authentication with Auth0</h1>
        <p>welcome, {name}.</p>
      </header>
  );
}