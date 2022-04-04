import React from 'react';
import {useState, useEffect} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {  fetchMovies ,fetchMovieById} from './utils';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Product from './components/Product';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
function App() {
	const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState('');
  const [errorDetail, setErrorDetail] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  const selectMovie = async (movie) => {
  const newMovie = await fetchMovieById(movie.id);
     if (newMovie.Error) {
       setErrorDetail(newMovie.Error);
        setSelectedMovie(null); 
     } else {
       setSelectedMovie(newMovie); 
     }
  }
  
  
	const callApi = async (search = '') => {

    const data = await fetchMovies( );
    console.log(data)
   setError(data.Error);
   //if (!data.Error.length) {
     setSelectedMovie(data)
		setMovies(data)
 //  }
   }
    
	
 


 useEffect(() => {
   
    callApi('Godfather');
    return () => {
     
    }
  }, []);
	let match = "product";
	
  return (
    <div className="App">
	<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
			<li><Link to={`/product/props-v-state`}>Props v. State
          </Link>
			</li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
          <Route path="/about">
            <About />
          </Route>
            
          <Route path="/">
            <Home />
          </Route>
		    <Route path={`/product/:topicId`}>
          <Product />
        </Route>
        
      </div>
    </Router> 
	<MovieList onSelectMovie={selectMovie} movies={movies} />
	<MovieDetail error = {errorDetail} movie={selectedMovie }/>
   

		
	 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
