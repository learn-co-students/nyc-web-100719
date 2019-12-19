import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MovieContainer from './Containers/MovieContainer';
import {API_BASE} from './constants';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount(){
    fetch(`${API_BASE}/movies`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        movies: data
      })
    })
  }



  render(){
    return (
      <div className="App">
        <NavBar user={this.state.currentUser} setUser={this.setUser}/> 
        <Switch>
          <Route path="/movies" render={(routerProps) => <MovieContainer movies={this.state.movies} {...routerProps}/>}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route exact path="/" render={() => <div>Whats up I'm the welcome page!!!</div>} />
          <Route path="" render={() => <div><h1>NOT FOUND</h1>YOU ARE SOMEWHERE RANDOM</div>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
