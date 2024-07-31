import { ReactElement } from "react"
import "./Header.css"

export function Header():ReactElement{
    return(
        <div className="header">
            <span className="material-symbols-outlined">arrow_back_ios</span>
             <h2>Playlist - Moody</h2>
             <span className="material-symbols-outlined">more_vert</span>
        </div>
    )
}