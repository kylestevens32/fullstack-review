import React from 'react';

const Repo = ({ repo }) => {
  return (
    <div className='repo'>
      <a href={repo.url}>{repo.name}</a>
      <div>Owner: {repo.owner}</div>
      <div>Forks: {repo.forks}</div>
    </div>
  )
}

export default Repo;