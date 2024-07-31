import "./App.css";
import { Playlist } from "./components/Playlist";
import { Header } from "./components/Header";
import { ReactElement, useState } from "react";
import { IMediaItems } from "./interface";
import { Player } from "./components/Player";

function App():ReactElement {
  const [selectedMedia, setSelectedMedia] = useState<IMediaItems | null>(null);
  

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Playlist onSelectMedia={setSelectedMedia} />
        {selectedMedia && <Player selectedMedia={selectedMedia} />}
      </main>
    </div>
  );
}

export default App;
