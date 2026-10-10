import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index, e) => {
    e.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <h2 className="h2 bang reveal">Got <span>Questions?</span></h2>
      <div className="faq reveal">
        <details open={openIndex === 0}>
          <summary onClick={(e) => toggle(0, e)}>Who can participate?</summary>
          <p>Bits2Wave is open to <strong>all college students</strong>! Whether you are pursuing an Undergraduate or Postgraduate degree in Engineering, Management, Arts, Commerce, Sciences, Law, or Medical fields, you are welcome to participate.</p>
        </details>
        <details open={openIndex === 1}>
          <summary onClick={(e) => toggle(1, e)}>What is the team size?</summary>
          <p>Each team must consist of <strong>2 to 4 members</strong>. Please note that no individual can be a part of more than one team.</p>
        </details>
        <details open={openIndex === 2}>
          <summary onClick={(e) => toggle(2, e)}>Is there a registration fee?</summary>
          <p><strong>Round 1 (Idea Submission) is completely FREE!</strong> You only need to pay if your team gets shortlisted. Shortlisted teams will need to pay a registration fee of <strong>₹1000 per team</strong> to confirm their spot for the on-campus Grand Finale.</p>
        </details>
        <details open={openIndex === 3}>
          <summary onClick={(e) => toggle(3, e)}>What should we bring?</summary>
          <p>For the Idea Submission round, you just need to submit a PPT (max 6 slides). If you are shortlisted for the Grand Finale, you should bring your laptops, chargers, valid Student IDs, and any specific hardware components you need to build your working prototype.</p>
        </details>
        <details open={openIndex === 4}>
          <summary onClick={(e) => toggle(4, e)}>Is the hackathon online or offline?</summary>
          <p>It's a hybrid format! <strong>Round 1 (Idea Submission)</strong> is completely online. Only the shortlisted teams will be invited to our campus for the <strong>24-hour offline Grand Finale</strong> to build and present their prototypes in person.</p>
        </details>
      </div>
    </section>
  );
}