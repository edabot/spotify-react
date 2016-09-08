const React = require('react');
const ArtistSearch = require('./util/artist_search');

import './App.css';

const Search = React.createClass({
  getInitialState(){
    return {artist: "" };
  },
  _handleArtistChange(e){
    this.setState({artist: e.target.value}, function() {
      console.log(this.state.artist);
    });

  },
  _handleArtistSearch() {
    console.log("search clicked");
  },
  render() {
    return (
      <div>
        <textarea
          name="artist"
          value={this.state.artist}
          onChange={this._handleArtistChange} />
        <button className="btn btn-default edit-btn"
                onClick={this._handleArtistSearch}>Artist Search</button>
      </div>
    );
  }
});

module.exports = Search;
