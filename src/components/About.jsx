export default function About() {
  return (
    <section id="about">
      <h2 className="h2 bang reveal">How It <span>Works</span></h2>
      <p className="sub reveal">Twenty-four hours to turn an idea into something that flies. Here's the loop every great hack goes through.</p>
      <div className="steps">
        <div className="step reveal"><div className="n">01</div><h3>Build</h3><p>Form a team of 2–4, pick a track, and start hacking the moment the clock starts.</p></div>
        <div className="step reveal"><div className="n">02</div><h3>Launch</h3><p>Ship a working prototype. Hardware, software, or a wild idea in between.</p></div>
        <div className="step reveal"><div className="n">03</div><h3>Break</h3><p>Stress-test it. Find what fails, and learn from it faster than anyone else.</p></div>
        <div className="step reveal"><div className="n">04</div><h3>Repeat</h3><p>Iterate until it soars, then pitch it to the judges with everything you've got.</p></div>
      </div>
    </section>
  );
}