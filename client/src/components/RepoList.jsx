import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({ repos }) => {
  return (
    <div>
      <h4> Repo List Component </h4>
      <Repo />
      There are {repos.length} repos.
    </div>
  )
}

export default RepoList;