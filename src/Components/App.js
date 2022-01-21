import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtubeAPI from "../Apis/youtube";
import VideoDetails from "./VideoDetails";

import "../Styles/App.scss";

class App extends React.Component {
  //Creating a state object allows us to rerender the App anytime we input a new value
  state = { videos: [], selectedVideo: null };


  componentDidMount(){
    this. whenSubmitting('cats')
  }

  //Example of a call back method
  //Anytime a person submits the form, this function gets called
  //We can use the async/await method or the then() method to obtain a promise(data provided by the API)
  whenSubmitting = async (term) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items , selectedVideo: response.data.items[0]});
    console.log(this.state.videos);
  };


  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log("From the App!", video);
  };


  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.whenSubmitting} />I have{" "}
        {this.state.videos.length} videos.
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videoList={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
