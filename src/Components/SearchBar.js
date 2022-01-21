import React from "react";

//Example of an controller component
//Controlled Componenets allows data to be stored into the componenet and not the DOM(Document Object Model)

class SearchBar extends React.Component {
  state = { term: "" };

  //Example of an event callback
  submitProcess = (event) => {
    event.preventDefault();
    //This line of code call callback from the parent component
    //Allows proper communcation from the child to the parent
    this.props.onFormSubmit(this.state.term);
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.submitProcess} className="ui form">
          <div>
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              className=""
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
