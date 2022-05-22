import Header from "./Components/Header/Header.jsx";
import Content from "./Components/Content/Content.jsx";
import Pagination from "./Components/Pagination/Pagination.jsx";
import StartPage from "./Components/StartPage/StartPage.jsx";
import UserNotFound from "./Components/UserNotFound/UserNotFound.jsx";
import React, { useState } from "react";
import getGitHubUser from "./API/getGitHubUser.js";
import getUserRepos from "./API/getUserRepos.js";
import Loader from "./Components/UI/Loader/Loader.jsx";

const getReposToShow = (repos, currentPage, itemsPerPage = 5) => {
  const lastRepoIndex = currentPage * itemsPerPage;
  const firstRepoIndex = lastRepoIndex - itemsPerPage;
  return repos.slice(firstRepoIndex, lastRepoIndex);
}

function App() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const inputOnChangeListener = (e) => {
    setUserName(e.target.value);
  }

  const reposToShow = getReposToShow(repos, currentPage, itemsPerPage);

  const handleKeyPress = async (e) => {
    try {
      if (e.key === 'Enter') {
        setIsLoading(true);
        setUserName('');
        const userInfo = await getGitHubUser(userName);
        if (userInfo === null) {
          setUser(null);
        }
        const userRepos = await getUserRepos(userName);
        setUser(userInfo);
        setRepos(userRepos);
      }
    }
    finally {
      setIsLoading(false);
    }
  }

  const renderSwitch = (user) => {
    if (user === null) {
      return <UserNotFound />;
    }
    if (user === undefined) {
      return <StartPage />
    }
    return <Content
      avatar={user.avatar_url}
      name={user.name}
      login={user.login}
      gitHubLink={user.html_url}
      followers={user.followers}
      following={user.following}
      repos={reposToShow}
      totalReposCount={repos.length}
    />;
  };

  return (
    <div className="App">
      <Header
        userName={userName}
        inputOnChangeListener={inputOnChangeListener}
        handleKeyPress={handleKeyPress}
      />
      {isLoading ? <Loader /> : renderSwitch(user)}
      {repos.length > 0
         ? <Pagination
             itemsPerPage={itemsPerPage}
             currentPage={currentPage}
             totalPages={repos.length}
             onPaginate={setCurrentPage}
           />
         : null
      }
    </div>
  );
}

export default App;
