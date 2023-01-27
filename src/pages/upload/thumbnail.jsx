import React, { useState } from 'react';


export const Thumbnail = ({ videoUrl }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  React.useEffect(() => {
    if (!videoUrl) return;
    const video = document.createElement('video');
    video.src = videoUrl;
    video.onloadeddata = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const thumbnail = canvas.toDataURL();
      setThumbnailUrl(thumbnail);
    };
  }, [videoUrl]);

  return <img src={thumbnailUrl} alt="Video thumbnail" />;
}



