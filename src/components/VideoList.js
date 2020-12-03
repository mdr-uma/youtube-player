import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos}) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem video={video} />
    })
    return (
        <div>{renderedVideos}</div>
    )
}

export default VideoList