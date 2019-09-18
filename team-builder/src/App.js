import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';


  function App() {
    const [team, setTeam] = useState([
    ]);
  return (
    <div className="App">
    <Form team={team} setTeam={setTeam} />
        {team.map(user => (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
      <h3>Role: {user.role}</h3>
    </div>)
    )}
</div>
);
}

export default App;


