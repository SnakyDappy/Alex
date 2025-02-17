import React from 'react';
import ReactPlayer from 'react-player';

function Poza() {
  return (
    <div className="center-containervideo">
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=B8oiiB0fcpU&ab_channel=SnakyDappy"
        controls
        className="responsive-video"
      />
    </div>
  );
}

export default Poza;
