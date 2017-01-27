class MovieContainer extends React.Component {

  constructor(){
    super()

  }


  render(){

    return(
      <div id="movie-container">
        <section id="head">
          <h3>{this.props.movies.Title}</h3>
          <span>{this.props.movies.Year}</span>
          <span>{this.props.movies.imdbRating}/10</span>
          <p>{this.props.movies.imdbVotes}</p>
          <p>
            <span>{this.props.movies.Rated} </span>
            <span>{this.props.movies.Runtime} </span>
            <span>{this.props.movies.Genre} </span>
            <span>{this.props.movies.Released} </span>
          </p>
        </section>

        <section id="desc">
            <p>{this.props.movies.Plot}</p>
            <p>Director: {this.props.movies.Director}</p>
            <p>Writer: {this.props.movies.Writer}</p>
            <p>Stars: {this.props.movies.Actors}</p>
        </section>
      </div>
    )
  }
}
