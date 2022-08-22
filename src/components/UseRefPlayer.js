import React,{useRef} from 'react'
import './UseRefPlayer.css';
const UseRefPlayer = () => {

  const videoRef=useRef();

  const handlePlay=()=>{
    videoRef.current.play();
   
      }

      const handlePause=()=>{
        videoRef.current.pause();
      }
  return (
    <div>
     <div className='grid-btn'>
    <button className='btn'  onClick={handlePlay}>Play</button>
    <button className='btn-pause'   onClick={handlePause}>Pause</button>
     </div>
   
     <video className='videos1' ref={videoRef}>
     <source src="/Videos/myvideos1.mp4"/>
     </video>
    </div>
  )
}

export default UseRefPlayer;