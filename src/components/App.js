import React from 'react'
import RaccoonsContainer from './RaccoonsContainer'
import RaccoonForm from "./RaccoonForm"
import Search from './Search'

function App() {
  return (
    <div className="App">

      <h1>🦝 Raccoon Search Party 🎉</h1>

      <Search />

      <RaccoonsContainer />

      <RaccoonForm />

    </div>
  );
}

export default App;
