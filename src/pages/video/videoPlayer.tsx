import React, { useEffect, useRef } from 'react';

interface Props {
  src: string;
}

const VideoPlayer: React.FC<Props> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (src && videoRef.current) {
        videoRef.current.addEventListener('loadedmetadata', () => {
            videoRef.current?.play();
        });
        videoRef.current.src = src;
        }
    }, [src]);

    return (
        <video 
        ref={videoRef} 
        controls 
        width="100%" 
        autoPlay 
        className='' 
        // muted
        />
    );
};

export default VideoPlayer;
