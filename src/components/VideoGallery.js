import React, { useState } from "react";

// Import all videos manually
import video1 from "../photos/video (2).mp4";
import video2 from "../photos/video (3).mp4";
import video3 from "../photos/video (4).mp4";
import video4 from "../photos/video (5).mp4";
import video5 from "../photos/video (6).mp4";
import video6 from "../photos/video (7).mp4";
import video7 from "../photos/video (8).mp4";
import video8 from "../photos/video (9).mp4";
import video9 from "../photos/video (10).mp4";
import video10 from "../photos/video (11).mp4";
import video11 from "../photos/video (12).mp4";
import video12 from "../photos/video (13).mp4";
import video13 from "../photos/video (14).mp4";
import video14 from "../photos/video (15).mp4";
import video15 from "../photos/video (16).mp4";
import video16 from "../photos/video (17).mp4";
import video17 from "../photos/video (18).mp4";

const videos = [
  { id: 1, title: "Video 1", src: video1 },
  { id: 2, title: "Video 2", src: video2 },
  { id: 3, title: "Video 3", src: video3 },
  { id: 4, title: "Video 4", src: video4 },
  { id: 5, title: "Video 5", src: video5 },
  { id: 6, title: "Video 6", src: video6 },
  { id: 7, title: "Video 7", src: video7 },
  { id: 8, title: "Video 8", src: video8 },
  { id: 9, title: "Video 9", src: video9 },
  { id: 10, title: "Video 10", src: video10 },
  { id: 11, title: "Video 11", src: video11 },
  { id: 12, title: "Video 12", src: video12 },
  { id: 13, title: "Video 13", src: video13 },
  { id: 14, title: "Video 14", src: video14 },
  { id: 15, title: "Video 15", src: video15 },
  { id: 16, title: "Video 16", src: video16 },
  { id: 17, title: "Video 17", src: video17 },
];

const VideoGallery = () => {
  const [clicked, setClicked] = useState(null); // Track the clicked video
  const [visibleVideos, setVisibleVideos] = useState(3); // Start with 3 videos visible (1 row)

  const handleVideoClick = (id) => {
    setClicked(clicked === id ? null : id);
  };

  const handleViewMore = () => {
    setVisibleVideos(visibleVideos + 3); // Add 3 more videos each time
  };

  return (
    <div className="video-gallery">
      {videos.slice(0, visibleVideos).map((video) => (
        <div key={video.id} className="video-thumbnail">
          <div onClick={() => handleVideoClick(video.id)}>
            <video
              width="100%"
              height="100%"
              controls={clicked === video.id} // Show controls only if clicked
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ))}

      {/* "View More" button */}
      {visibleVideos < videos.length && (
        <div className="view-more-container">
          <button className="view-more" onClick={handleViewMore}>Vezi mai mult</button>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
