import { useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import { config } from "../../config/index";

const PlayMusic = () => {
  const [mounted, setMounted] = useState<boolean>(false) || false;
  const [play, setPlay] = useState<boolean>(false) || false;

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  useEffect(() => setPlay(false), []);

  return (
    <>
      <button
        aria-label="Play Music"
        type="button"
        className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
        onClick={() => setPlay(!play)}
      >
        {mounted && play ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      {mounted && (
        <ReactPlayer
          style={{ display: "none" }}
          playing={play}
          volume={0.2}
          width={0}
          height={0}
          url={config.URL}
          onEnded={() => setPlay(false)}
        />
      )}
    </>
  );
};

export default PlayMusic;
