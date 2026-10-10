import { useEffect, useRef } from 'react';
import { initGame } from '../game.js';

const cast = [
  { name: 'Splitter', image: '/play-red-bird-v1.png', text: 'Tap to fork into three packets. Great for wide racks.' },
  { name: 'Zipper', image: '/play-yellow-bird-v1.png', text: 'Tap for a turbo boost straight through the beams.' },
  { name: 'Crusher', image: '/play-black-bird-v1.png', text: 'Heavy enough to smash concrete. Tap to slam down.' },
  { name: 'Glitch Gremlin', image: '/play-green-pig-v1.png', text: 'Lives in the racks. Corrupts your build. Crash it.' },
];

export default function GameSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanupGame;
    if (canvasRef.current) {
        cleanupGame = initGame(canvasRef.current);
    }
    return () => {
        if(cleanupGame) cleanupGame();
    };
  }, []);

  return (
    <section id="play">
      <h2 className="h2 bang reveal">Warm-up <span>Round</span></h2>
      <p className="sub reveal">Glitch Gremlins have taken over the server racks. Load your Packet Bots, pull back the slingshot, and crash every glitch before your bots run out.</p>
      <div className="game-wrap reveal">
        <canvas id="game" ref={canvasRef}></canvas>
        <div className="hud">
          <div className="hud-stat hud-score"><img src="/play-red-bird-v1.png" alt="" />Score: <span id="score">0</span></div>
          <div className="hud-stat hud-shots"><img src="/play-green-pig-v1.png" alt="" />Bots left: <span id="shots">3</span></div>
          <button className="btn btn-red" id="reset">Reset</button>
        </div>
        <div className="msg" id="msg"><span id="msgText">SHIP IT!</span></div>
      </div>
      <p className="hint">Drag the bot back and release to launch. Tap anywhere mid-flight to trigger its power.</p>
      <div className="cast">
        {cast.map((character) => (
          <div className="who reveal" key={character.name}>
            <img src={character.image} alt={character.name} />
            <div><h4>{character.name}</h4><p>{character.text}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
