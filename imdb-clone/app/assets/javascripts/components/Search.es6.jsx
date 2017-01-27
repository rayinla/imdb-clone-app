
  class Search extends React.Component{

    constructor(){
      super()

      this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e){
      e.preventDefault()
      nameArea =  this.refs.movieName
      this.props.onGetApi(nameArea.value)
    }


    render(){
      return(
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input ref="movieName" id="search" type="text" name="query"/>
          <input type = "submit" />
        </form>
      )
    }
  }
