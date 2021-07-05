import {useEffect, useState} from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useEffect(()=>{
    fetch('/users').then(res=> {
      return res.json()
    })
    .then(res=>{
      setUsers(res);
    })
    .catch((err)=>{
      setError(err.message)
    })
    .finally(()=>{
      setLoading(false);
    })
  }, []);

  const onSubmit = async (e) => {
    //prevent form from refreshing the page
    e.preventDefault()
    if (!name){
      setError('name is empty')
    } else if(age <= 0){
      setError('age must be greater than 0')
    } else {
      setLoading(true);
      fetch('/user', {
        method: 'POST',
        body: JSON.stringify({
          name,
          age
        })
      }).then((res)=>{
        return res.json();
      })
      .then(res=> {
        setUsers(res)
      })
      .catch((err)=>{
        setError(err.message)
      })
      .finally(()=>{
        setLoading(false);
      })
      
    }
  }
  if(loading) {
    return 'loading...'
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>User Name and Age Form</h1>
      <label>Name</label>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <label>Age</label>
      <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button type="submit">Submit</button>
      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
      <hr/>
      {users.length > 0 && (
        <>
        <h1>List of users name and age</h1>
        <ul>
          {users.map((user, i) => {
            return (
              <li key={i}>
                <p>
                {user.name}
                </p>
                <p>
                {user.age}
                </p>
              </li>
            )
          })}
        </ul>
        </>
      )}
    </form>
  );
}

export default App;

const ErrorMessage = styled.div`
  color: red;
  margin: 10px;
  padding: 10px;
  border: 1px solid red;
  border-radius: 10px;
`