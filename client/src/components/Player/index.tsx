//@ts-nocheck
import React, { useState, useEffect } from 'react'

const Player = (props: any) => {
    const [videoId, setVideoId] = useState(props.match.params.id);
    const [videoData, setVideoData] = useState([]);
    
    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`/video/${videoId}/data`);
                const data = await res.json()
                setVideoData(data)
            } catch(error) {
                console.log(error)
            }
        }
        getData()
        }, [])

    return(
        <>
        <video controls muted autoPlay>
            <source src={`/video/${videoId}`} type="video/mp4"></source>
        </video>
        <h1>{ videoData.name }</h1>
        </>
    );
}

export default Player
