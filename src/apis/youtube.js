import axios from 'axios'

const KEY = 'AIzaSyBx0J-rnLChsu4UTVJX227iXqr1Z9ZcCeI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 8,
        key: KEY
    }

})