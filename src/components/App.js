import React from 'react';
import SearchField from './SearchField';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // show a default search on first load
  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  // these r callbacks which r passed as props to the child ele
  // these r usefull to get some value/info from the child
  // becoz props can be only passed from parent to child
  // and not vice-a-versa.

  // async and await OR promise is used when we give a call the api
  onTermSubmit = async term => {
    const  response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });

  }

  // callback
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video});
  }


  render() {
    return (
      <div className="ui container">
        <SearchField onFormSubmit={this.onTermSubmit } />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
