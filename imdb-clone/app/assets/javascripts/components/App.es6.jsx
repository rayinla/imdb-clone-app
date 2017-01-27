
class App extends React.Component{

  constructor(){

    super()
    this.state = {movies: []}
    this.getApi = this.getApi.bind(this)

  }

   getApi(param){

      $.getJSON('http://www.omdbapi.com/?t=' + encodeURI(param))
        .then(function(response){

          this.setState({ movies: response})
      }.bind(this))
    }


    render(){

      return(
        <div id="wrapper">
          <header id="top-nav">
              <div id="brand">Movie API</div>
              <Search
               onGetApi={this.getApi}/>

          </header>
            <div id="container">
             <MovieContainer
                movies = {this.state.movies} />
            </div>
        </div>
    )
  }
}
