import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

function App() {
  const Nav = () => {
    return <div>
      <Link style={{ margin: '10px' }} to="/home">
        Home
      </Link>
      <Link style={{ margin: '10px' }} to="/repos">
        Repos
      </Link>
      <Link style={{ margin: '10px' }} to="/users">
        Users
      </Link>
    </div>
  }

  const ReposPage = () => {
    const [repos, setRepos] = useState([]);
    const [name,setName] = React.useState();

    const getItems = (org = "octokit") => {
      octokit.repos
        .listForOrg({
          org,
          type: 'public'
        })
        .then(({ data }) => {
          setRepos(data);
        });
    };

    useEffect(() => {
      getItems();
    }, []);

    return <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <input value={name} onChange={e=> setName(e.target.value)} />
        <button onClick={() => getItems(name)}>Filter</button>
      </div>
        {repos.map((repo) => <div style={{
          marginBottom: '20px',
          borderBottom: 'solid red 3px',
          height: '300px',
          overflow: 'auto',
          width: '80%',
          fontSize: '12px',
          margin: '0 auto',
        }}>
        <h3>Repo card:</h3>
        {Object.keys(repo).map((repoInfo => {
          return typeof repo[repoInfo] === 'string' && <p>
            <strong>{repoInfo}</strong>: <code>{repo[repoInfo]}</code>
          </p>})
        )}
      </div>)}
    </div>
  }

  const UsersPage = () => {
    const [items, setItems] = useState([]);
    const [name,setName] = React.useState();

    const getItems = (query = "john") => {
      octokit.search
        .users({
          q: query,
        })
        .then(({ data }) => {
          setItems(data.items);
        });
    }

    useEffect(() => {
      getItems();
    }, []);

    return <>
      <div style={{ width: '100%' }}>
        <input value={name} onChange={e=> setName(e.target.value)} />
        <button onClick={() => getItems(name)}>Filter</button>
      </div>
      <div style={{ width: '100%' }}>
        {items.map((repo) => <div style={{
          display: 'inline-block',
          marginBottom: '20px',
          borderBottom: 'solid red 3px',
          height: '400px',
          overflow: 'auto',
          width: '29%',
          fontSize: '12px',
          margin: '0 auto',
        }}>
        <h3>Repo card:</h3>
        <img style={{ width: '50px' }} src={repo.avatar_url} />
        {Object.keys(repo).map((repoInfo => {
          return typeof repo[repoInfo] === 'string' && <p>
            <strong>{repoInfo}</strong>: <code>{repo[repoInfo]}</code>
          </p>})
        )}
        </div>)}
      </div>
    </>
  }

  const HomePage = () => {
    const [niceUrl, setNiceUrl] = useState();

    useState(() => {
      fetch(`https://source.unsplash.com/1600x900`)
      .then((response) => {   
        setNiceUrl(response.url);
      });
    }, [])

    return <div>
      <div style={{ margin: '20px' }}>welcome!</div>
      {niceUrl && <img alt="Random image here!" src={niceUrl} width="50%" />}
    </div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ paddingBottom: '20px' }}>Sample app here</p>
        <Router>
          <Nav />
          <div style={{width: '100%'}}>
            <Switch>
              <Route path="/users">
                <UsersPage />
              </Route>
              <Route path="/repos">
                <ReposPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
