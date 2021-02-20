//@ts-nocheck
import { Grid } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [videos, setVideos] = useState([]);

    async function componentDidMount() {
        try {
            const response = await fetch('http://localhost:4000/videos');
            const data = await response.json()
            setVideos([...data])
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <>
            <Grid container>
                {videos.map(video => {
                    return(
                        <Grid item>
                            <Link to={`/player/${video.id}`}>
                                <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
                                <div>
                                    <p>{video.name}</p>
                                    <p>{video.duration}</p>
                                </div>
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}

export default Home
