import { useRef } from "react";
import Button from "../common/Button";

function VideoPlayer() {

  const vidRef=useRef(null)

const playVideo = () => {
 
  vidRef.current.play();
  // console.log(vidRef.current.play())

};
const  pauseVideo = () => {
 
  vidRef.current.pause();
};
const skip=()=>{
  
  vidRef.current.setcurrentTime(30)
}
  return (
    <div>
      <video  ref={vidRef}
      data-testid="video-container" width="400" controls
      >
        <source
       
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <button onClick={playVideo}>
          PLAY
        </button>
        <button onClick={pauseVideo}>
          PAUSE
        </button>
        <button onClick={skip}>
          SKIP 30 SECONDS
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
