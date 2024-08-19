"use client";

import { useEffect } from "react";
import maincss from "./maincss.css";
import Image from "next/image";
import Link from "next/link";

import lofisleepimg from "./assets/lofi sleep spotify playlist (1).png";
import SpotifyImg from "./assets/spotify-svgrepo-com.svg";

const Main = () => {
  useEffect(() => {
    // Facebook Pixel Code
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    fbq("init", "702977162013759");
    fbq("track", "PageView");

    // NoScript code
    const noScript = document.createElement("noscript");
    noScript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=702977162013759&ev=PageView&noscript=1" alt="fb-pixel"/>
    `;
    document.body.appendChild(noScript);
  }, []);

  return (
    <>
      <div id="lofi-sleep-cont-main">
        <div className="lofi-sleep-secondary-cont">
          <div className="image-cont">
            <Image src={lofisleepimg} alt="Lofi Sleep Playlist" />
          </div>
          <Link
            target="_blank"
            href="https://open.spotify.com/playlist/47lW2YE5XIJB6Gxhs5rgK0?si=481db49b1e1f453d"
          >
            <button className="text-under-img">
              <Image src={SpotifyImg} alt="Spotify Logo" />
              <h2>Listen Here</h2>
            </button>
          </Link>
        </div>
        <div className="outro-text">
          <p>
            lofi sleep || relaxing lofi beats <br /> to help you repose
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
