"use client"
import Image from "next/image"
import LOgo from "../IMAGES/Where Logo.png"
import Down from "../IMAGES/icons8-down-40.png"

function Track() {
  return (
    <div className=" w-[100vw] h-[36vh] bg-white flex flex-col items-center justify-center " >
        <div className=" w-[48%] h-[40%] mb-[4vh] " >
            <Image 
            src={LOgo} 
            alt="Landing Page"
            className="  w-full h-full " 
            /> 
        </div>
        <div className=" w-[70%] flex items-center justify-center flex-col  " >
            <button onClick={callme} className=" w-full h-[6vh] bg-[#fcd660] text-black rounded-xl text-[5.5vw] border-2 border-black tracking-widest "  >Track Buses</button>
            <div className=" animate-updown flex mt-[4vh] gap-3 " >
                 <Image src={Down} alt="" width={25} />
                <p className="text-xl font-semibold text-black ">
                    know more
                </p>
            </div>
        </div>
    </div>
  )
}

function callme() {
    return (
        alert("There is no next page")
    )
}

export default Track