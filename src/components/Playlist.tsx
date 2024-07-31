import { ReactElement } from "react";
import { mediaItems } from "../data";
import { IMediaItems } from "../interface";
import "./Playlist.css"



interface PlaylistProps {
    onSelectMedia: (media: IMediaItems) => void;
  }
  

export function Playlist({ onSelectMedia }: PlaylistProps):ReactElement {
    return(
        <div className="playlist">
            {mediaItems.map((item) => (
            <div className="media-item" key={item.id} onClick={() => onSelectMedia(item)}>
                <img className="playlist-img" src={item.cover} alt={`${item.title} cover`} />
                <div className="media-container">
                   <div className="media-title">
                        <h2>{item.artist}</h2>
                        <p>{item.title}</p>
                   </div>
                    <span className="material-symbols-outlined"> play_arrow </span>
                </div>
            </div>
            ))}
        </div>
    )
}