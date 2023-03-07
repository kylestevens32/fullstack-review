import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({ repos }) => {
  return (
    <div>
      <h4> Repo List Component </h4>
      {repos.map((repo) => {
        return <Repo key={repo._id} repo={repo} />
      })}
      Showing the top {repos.length} repos.
    </div>
  )
}

export default RepoList;