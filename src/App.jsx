import { useState } from "react";
import emailjs from '@emailjs/browser';
import kanye from "./assets/kanye.jpg";
import kuromi from "./assets/kuromi-icegif-12.gif";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

emailjs.init('rrWGOJ6WTkmv804nY');

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showNoImage, setShowNoImage] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setShowNoImage(true);
  };

  const handleYesClick = () => {
    setYesPressed(true);
    
    // Send email
    emailjs.send(
      "service_3nlyg2z",     // Replace with your EmailJS service ID
      "template_17uxoh3",    // Replace with your EmailJS template ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/TxdA0QrHdNgAAAAj/cat-farsi-kiss.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            yayyyyy!!! i love you!!
            <p className="text-sm">pls check ur email</p>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src={showNoImage ? kuromi : kanye}
            alt="Reaction"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            will u, ms valentine, be my valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};