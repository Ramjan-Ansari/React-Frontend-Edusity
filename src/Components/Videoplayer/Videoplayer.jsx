import React, { useRef } from 'react'
import './videoplayer.css'
import video from '../../assets/video.mp4'

export const Videoplayer = ({playState, setPlayState}) => {   

    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState? '': 'hide'}`} ref={player} onCanPlay={closePlayer}>
        <video src={video} autoPlay muted controls ></video>
    </div>
  )
};
