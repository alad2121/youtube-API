import React from "react";
import "../Styles/VideoItem.scss";

const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet } = video;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="video-image ui image"
        src={snippet.thumbnails.default.url}
        alt={snippet.description}
      />

      <div className="video-title content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
