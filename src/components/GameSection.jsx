import { useEffect, useRef } from 'react';
import { initGame, initCast } from '../game.js';

export default function GameSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanupGame;
    if (canvasRef.current) {
        cleanupGame = initGame(canvasRef.current);
    }
    const cleanupCast = initCast();
    
    return () => {
        if(cleanupGame) cleanupGame();
        cleanupCast();
    };
  }, []);

  return (
    <section id="play">
      <h2 className="h2 bang reveal">Warm-up <span>Round</span></h2>
      <p className="sub reveal">Glitch Gremlins have taken over the server racks. Load your Packet Bots, pull back the slingshot, and crash every glitch before your bots run out.</p>
      <div className="game-wrap reveal">
        <canvas id="game" ref={canvasRef}></canvas>
        <div className="hud">
          <div>👾 Score: <span id="score">0</span></div>
          <div>🤖 Bots left: <span id="shots">3</span></div>
          <button className="btn btn-red" id="reset">Reset</button>
        </div>
        <div className="msg" id="msg"><span id="msgText">SHIP IT!</span></div>
      </div>
      <p className="hint">Drag the bot back and release to launch. Tap anywhere mid-flight to trigger its power.</p>
      <div className="cast">
        <div className="who reveal"><canvas data-bot="blue" width="128" height="128"></canvas><div><h4>Splitter</h4><p>Tap to fork into three packets. Great for wide racks.</p></div></div>
        <div className="who reveal"><canvas data-bot="yellow" width="128" height="128"></canvas><div><h4>Zipper</h4><p>Tap for a turbo boost straight through the beams.</p></div></div>
        <div className="who reveal"><canvas data-bot="red" width="128" height="128"></canvas><div><h4>Crusher</h4><p>Heavy enough to smash concrete. Tap to slam down.</p></div></div>
        <div className="who reveal"><canvas data-bot="gremlin" width="128" height="128"></canvas><div><h4>Glitch Gremlin</h4><p>Lives in the racks. Corrupts your build. Crash it.</p></div></div>
      </div>
    </section>
  );
}