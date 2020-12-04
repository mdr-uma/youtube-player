import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyBx0J-rnLChsu4UTVJX227iXqr1Z9ZcCeI'

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null 
    }

    onInputSubmit = async input => {
        const res = await youtube.get('/search', {
            params: {
                q: input,
                part: 'snippet',
                type: 'video',
                maxResults: 8,
                key: KEY
            }
        })

        this.setState({
            videos: res.data.items
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onInputSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default App