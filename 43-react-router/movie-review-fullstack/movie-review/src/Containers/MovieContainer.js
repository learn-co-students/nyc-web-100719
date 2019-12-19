import React from 'react';
import MovieCard from '../Components/MovieCard'
import MoviePage from '../Components/MoviePage';
import { Route, Switch} from 'react-router-dom';

class MovieContainer extends React.Component {

  render(){
    // console.log(this.props)
    // let selectedMovie = this.props.movies.find(movie => movie.id === this.state.selectedMovie)

    return (
      <div className="movie-container">
        <Switch>
          <Route path="/movies/:id" render={(routerProps) => <MoviePage {...routerProps} movies={this.props.movies} selectedMovie={{}}/>} />
          <Route path="/movies" render={() => this.props.movies.map(movie => <MovieCard key={movie.id} handleClick={this.selectMovie} movie={movie} />)} />
        </Switch>
    
      </div>
    );
  }
}

export default MovieContainer;
