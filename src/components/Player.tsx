import { ReactElement } from "react";
import { IMediaItems } from "../interface";

import "./Player.css"

interface PlayerProps {
  selectedMedia: IMediaItems;
}

export function Player({ selectedMedia }: PlayerProps):ReactElement {
  return (
    <div className="player">
        <img  src={selectedMedia.cover} alt={`${selectedMedia.title} cover`} />
      <section className="media-info">
        <span className="material-symbols-outlined plus">add</span>
          <div className="playermedia-title">
            <h3>{selectedMedia.title}</h3>
            <p>{selectedMedia.artist}</p>
          </div>
        <span className="material-symbols-outlined heart">favorite</span>
      </section>
      <section className="control-section">
        <span className="material-symbols-outlined control-icon"> shuffle</span>
        <div className="controls">
          <span className="material-symbols-outlined">skip_previous</span>
          <span className="material-symbols-outlined play-arrow">play_arrow</span>
          <span className="material-symbols-outlined">skip_next</span>
        </div>
        <span className="material-symbols-outlined control-icon repeat">repeat</span>
      </section>
    </div>
  );
}
