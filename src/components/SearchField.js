import React from 'react';

class SearchField extends React.Component {

  // we are hard coding to 'buildings' becoz
  // we r rendering a ist of videos for the same on initial page load
  state = { term: 'buildings' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search videos:</label>
            <input
              type="text"
              value={ this.state.term }
              onChange={ this.onInputChange }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchField;
