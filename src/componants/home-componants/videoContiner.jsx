import React from "react";
import "../home-desktop-styles/videoContainer.css";
import "../home-laptop-styles/videoContainer.css";
import "../home-phone-styles/videoContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function VideoContainer(props) {
  //change this if video avalable
  const [showMassege, setShowMessage] = React.useState(false);
  function toggleMessage() {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  return (
    <div className="vid-container">
      <div className="play-button" onClick={toggleMessage}>
        <FontAwesomeIcon icon={faCirclePlay} />
      </div>
      <img src={props.src} alt="not found" />
      {showMassege ?
        <div className="error-message">
          <p>Video Not Avalable</p>
        </div> : null
      }
    </div>
  );
}

export default VideoContainer;
