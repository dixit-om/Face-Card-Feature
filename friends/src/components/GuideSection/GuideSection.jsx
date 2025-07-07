import React, { useState } from "react";
import "./GuideSection.css";
import GuideCard from "./GuideCard";
import Modal from "./Modal";

const guides = [
  {
    name: "Shreya Kanade",
    title: "Software Test Engineer",
    image: "/assets/shreya.png",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Guide_Andrea_4x3_LQ_NC.mp4",
    description:
      "I build bots that never sleep, testing every click, flow, and edge case.With scripts as my soldiers, I fight bugs before they break things.Speed meets precision in every automated test I craft.Reliable, repeatable, and ready for scale — that’s how I test",
  },
  {
    name: "Om Dixit",
    title: "Full Stack Developer",
    image: "/assets/om.png",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Guide_Andrea_4x3_LQ_NC.mp4",
    description:
      "Crafting pixels into powerful pages, I build experiences that speak.om design to deployment, I turn ideas into interactive realities.Passionate about clean code, smooth flows, and stunning UI.Let's build the web — together.",
  },
  {
    name: "Rutuja Thengal",
    title: "Software Test Engineer",
    image: "/assets/rutuja.png",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Guide_Bri_4x3_LQ_NC.mp4",
    description:
      "Every bug I catch is a win for the user.I don’t break things — I uncover hidden truths.Detail-driven and precision-focused, I protect the product.Quality isn’t optional — it’s my promise.",
  },
  {
    name: "Harsh Nargide",
    title: "Full Stack Developer",
    image: "/assets/Harsh.png",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Guide_Andrew_4x3_LQ_NC.mp4",
    description:
      "I write logic that breathes life into ideas.Problem solver by passion, coder by craft.From backend engines to frontend magic — I do it all.Code is my canvas, innovation my brush.",
  },
  {
    name: "Akanksha Pasale",
    title: "Software Engineer",
    image: "/assets/akansha.png",
    video:
      "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Guide_Bri_4x3_LQ_NC.mp4",
    description:
      "I turn complex problems into elegant code.From backend logic to frontend finesse, I build seamless experiences.Innovation is my habit, quality is my promise.Code is not just my tool — it’s my language",
  },
];

const GuideSection = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const openModal = (guide) => {
    setSelectedGuide(guide);
  };

  const closeModal = () => {
    setSelectedGuide(null);
  };

  return (
    <section className="guide-section">
      <div className="guide-title">
        <h3>Besties for Resties</h3>
        <p style={{ paddingBottom: "2.9rem" }}>
          One Goal. Many Skills. Forever Friends.
        </p>
      </div>

      <div className="guide-grid">
        {guides.map((guide, index) => (
          <div
            key={index}
            style={{ "--i": index / (guides.length - 1) }}
            onClick={() => openModal(guide)}
          >
            <GuideCard {...guide} />
          </div>
        ))}
      </div>

      {selectedGuide && <Modal guide={selectedGuide} onClose={closeModal} />}
      <div className="tag-list">
        <div className="inner">
          <div className="tag">C/C++</div>
          <div className="tag">C#</div>
          <div className="tag">Java</div>
          <div className="tag">Python</div>
          <div className="tag">JavaScript</div>
          <div className="tag">Go</div>
          <div className="tag">PHP</div>
          <div className="tag">TypeScript</div>
          <div className="tag">React.js</div>
          <div className="tag">Angular</div>
          <div className="tag">Vue.js</div>
          <div className="tag">Bootstrap</div>
          <div className="tag">Node.js</div>
          <div className="tag">PostgreSQL</div>
          <div className="tag">Oracle</div>
          <div className="tag">MongoDB</div>
          <div className="tag">AWS</div>
          <div className="tag">Docker</div>
          <div className="tag">Kubernetes</div>
          <div className="tag">GitHub</div>
          <div className="tag">Kotlin</div>

          <div className="tag">C/C++</div>
          <div className="tag">C#</div>
          <div className="tag">Java</div>
          <div className="tag">Python</div>
          <div className="tag">JavaScript</div>
          <div className="tag">Go</div>
          <div className="tag">PHP</div>
          <div className="tag">TypeScript</div>
          <div className="tag">React.js</div>
          <div className="tag">Angular</div>
          <div className="tag">Vue.js</div>
          <div className="tag">Bootstrap</div>
          <div className="tag">Node.js</div>
          <div className="tag">PostgreSQL</div>
          <div className="tag">Oracle</div>
          <div className="tag">MongoDB</div>
          <div className="tag">AWS</div>
          <div className="tag">Docker</div>
          <div className="tag">Kubernetes</div>
          <div className="tag">GitHub</div>
          <div className="tag">Kotlin</div>
        </div>
        <div className="fade"></div>
      </div>
    </section>
  );
};

export default GuideSection;
