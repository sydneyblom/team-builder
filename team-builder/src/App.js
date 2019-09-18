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
      <h1>{user.name}</h1>
      <h3> {user.email}</h3>
      <h3>{user.role}</h3>
    </div>)
    )}
</div>
);
}

export default App;


