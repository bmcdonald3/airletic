//@ts-nocheck
import React, { useState } from 'react'

const Player = (props: any) => {
    const [videoId, setVideoId] = useState(props.match.params.id);
    const [videoData, setVideoData] = useState([]);

    async function componentDidMount() {
        try {
            const res = await fetch(`http://localhost:4000/video/${videoId}/data`);
            const data = await res.json()
            setVideoData(data)
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <>
            <video controls muted autoPlay>
                <source src={`http://localhost:4000/video/${this.state.videoId}`} type="video/mp4"></source>
            </video>
            <h1>{ videoData.name }</h1>
        </>
    );
}

export default Player
