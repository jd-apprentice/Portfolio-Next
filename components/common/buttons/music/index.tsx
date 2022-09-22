import { ReactElement, useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import { config } from "../../../../config/index";

/**
 * @description Start or pause the music of the page with this button
 * @returns { ReactElement } Music button which is used to play/pause the music
 */

const PlayMusic: React.FC = (): ReactElement => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);

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
          url={config.youtube.url}
          onEnded={() => setPlay(false)}
          config={{
            file: {
              forceAudio: true,
            },
          }}
        />
      )}
    </>
  );
};

export default PlayMusic;
