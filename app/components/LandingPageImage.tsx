import Image from 'next/image'
import LPImage from "../IMAGES/logos for wimb 3.png"

const LandingPageImage = () => {
  return (
    <div className="h-[50vh] flex items-center justify-cente">
      
      <div className="w-full h-full relative">
        <Image 
          src={LPImage} 
          alt="Landing Page"
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

export default LandingPageImage;
