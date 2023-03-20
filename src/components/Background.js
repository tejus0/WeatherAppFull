import React from "react";
import video1 from "./weather.mp4";
// import video2 from "./Videos/Thunderstorm.mp4";
    
    function Background(props) {
        const videos = [
            {
                name:"Clouds",
                background: video1
    
            },
            {
                name:"Thunderstorm",
                background: video2
            }
        ]
     const videoURL = videos.find(el => el.name === props.weatherDescription)?.background
        return (
        <div>
            <video id="background" autoPlay loop muted>
                <source src = {weather.mp4} type="video/mp4"/> 
            </video>
        </div>
        )
    }
    export default Background;
