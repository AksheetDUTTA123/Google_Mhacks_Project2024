import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <h2>My Video</h2>
      <video width="640" height="360" controls>
        <source src="/Users/sriyanm/Google_Mhacks_Project2024/my-react-app/src/YouTube-Parallelepiped.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;