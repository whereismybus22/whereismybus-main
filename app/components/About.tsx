import Image from "next/image"
import BusLogo from "../IMAGES/buslogo.png"

function About() {
  return (
    <div className=" w-[100vw] h-[43vh] bg-[#ffef9d]   " >
        <div className="w-full h-[25%] text-black text-xl font-extrabold flex items-center justify-center flex-col " >
            <p>Welcome to </p>
            <p className=" tracking-widest leading-[2vh] text-[#3d408a] " >Where is my bus?</p>
        </div>
        <div className="w-full h-[50%] text-black flex items-center justify-center  " >
            <p className="w-[78%] text-[3.44vw] " >Your ultimate companion for hassle-free college commutes! Designed with students in mind, our progressive web application provides real-time tracking for college buses, ensuring you never miss a ride. Join us and experience the convenience of knowing exactly where your bus is, every step of the way!</p>
        </div>
        <div className="w-full h-[25%] flex items-center justify-center " >
            <Image src={BusLogo} className="w-[22vw] h-[22vh" alt=""  />
        </div>
    </div>
  )
}

export default About