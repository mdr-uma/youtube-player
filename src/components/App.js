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
                maxResults: 5,
                key: KEY
            }
        })

        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0]
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
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App