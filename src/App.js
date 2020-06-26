import React, {useState,useEffect} from 'react';
import './App.css';

function App() {

  const [repo,setRepo] = useState([{}]);

  useEffect(() => {

    async function fetchRepos(){

      const response = await fetch('https://api.github.com/users/omamazainab/repos'); 
      const data = await response.json();
      setRepo(data);
       
    }
    fetchRepos();

  }, []);


  return (
    <div className="">
      <ul>
        {
          repo.map( (repoObj) => {
            return (<li> {repoObj.name} </li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
