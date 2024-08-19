"use client"

import maincss from "./maincss.css"
import Image from "next/image"
import Link from "next/link"

import lofisleepimg from "./assets/lofi sleep spotify playlist (1).png"
import SpotifyImg from "./assets/spotify-svgrepo-com.svg"

const Main = () => { 

  return(<>
    <div id="lofi-sleep-cont-main">
      <div className="lofi-sleep-secondary-cont">
        <div className="image-cont">
          <Image src={lofisleepimg}></Image>
        </div>
        <Link target="_blank"  href="https://open.spotify.com/playlist/47lW2YE5XIJB6Gxhs5rgK0?si=481db49b1e1f453d">
          <button className="text-under-img">
            <Image src={SpotifyImg}></Image>
            <h2>Listen Here</h2>
          </button>
        </Link>
      </div>
      <div className="outro-text">
        <p>lofi sleep || relaxing lofi beats <br/> to help you repose</p>
      </div>
    </div>
  </>)
}
export default Main