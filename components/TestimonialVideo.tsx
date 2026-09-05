"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const videoUrl = "/videos/shane-fisher-testimonial-v1.mp4";

export default function TestimonialVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    setFailed(false);
    // Assign the source inside the user gesture: no video request before play.
    if (!video.getAttribute("src")) video.src = videoUrl;
    video.play().catch(() => {
      // Native controls remain available if the browser declines playback.
      if (video.error) setFailed(true);
    });
    video.focus({ preventScroll: true });
  }

  return (
    <div className={`testimonial-player${started ? " is-active" : ""}`}>
      <video
        ref={videoRef}
        className="testimonial-video"
        controls={started}
        playsInline
        preload="none"
        tabIndex={started ? 0 : -1}
        aria-hidden={!started}
        aria-label="Shane Fisher, American Paragons Foundation — 57-second testimonial"
        onError={() => setFailed(true)}
      />
      {!started && (
        <button
          type="button"
          className="testimonial-poster"
          onClick={play}
          aria-label="Play Shane Fisher’s testimonial — 57 seconds, with sound"
        >
          <Image
            src="/images/shane-fisher-testimonial-v1.webp"
            alt="Shane Fisher, American Paragons Foundation. More impact. Less admin."
            fill
            sizes="(max-width: 1080px) 88vw, 700px"
          />
        </button>
      )}
      {failed && (
        <p className="testimonial-error" role="alert">
          The video couldn’t load. <a href={videoUrl}>Open the video directly</a>.
        </p>
      )}
      <noscript><a href={videoUrl}>Watch Shane Fisher’s 57-second testimonial</a></noscript>
    </div>
  );
}
