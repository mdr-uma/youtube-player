import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

const KEY = 'AIzaSyBx0J-rnLChsu4UTVJX227iXqr1Z9ZcCeI'

class App extends React.Component {
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
        console.log(res.data.items);
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onInputSubmit}/>
            </div>
        )
    }
}

export default App