import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

const App = () => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('/repos')
      .then((response) => {
        setRepos(response.data);
      })
  }, [])


  const search = (term) => {
    console.log(`${term} was searched`);
    axios.post('/repos', {
      username: term
    })
    .then(() => {
      return axios.get('/repos');
    })
    .then((response) => {
      setRepos(response.data);
    })
    .catch((err) => {
      console.log('search get request failed: ', err)
    })
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));