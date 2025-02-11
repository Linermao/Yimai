import Navbar from "../../components/Navbar";
import FooterSlider from "../../components/FooterSlider";
import Footer from "../../components/Footer";
import ImageSlider from "../../components/ImageSlider";

import bg from "../../assets/Nationality/bg.png";
import cover1 from "../../assets/Nationality/cover1.png";
import cover2 from "../../assets/Nationality/cover2.png";
import img1 from "../../assets/Nationality/img1.png";
import text1 from "../../assets/Nationality/text1.png";
import text2 from "../../assets/Nationality/text2.png";

function Nationality() {

  const clothes = Object.values(import.meta.glob("/src/assets/Nationality/clothes/*.jpg", { eager: true })).map((module) => module.default);
  const pattern1 = Object.values(import.meta.glob("/src/assets/Nationality/pattern1/*.png", { eager: true })).map((module) => module.default);
  const pattern2 = Object.values(import.meta.glob("/src/assets/Nationality/pattern2/*.png", { eager: true })).map((module) => module.default);

  return (
    <div>
      <Navbar />

      <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="h-[400px]">

        </div>


        <div className="flex mx-[100px] justify-center gap-5 my-[100px]">
          <a href="/Nationality_Introduce">
            <img src={cover1} alt="cover1" className="w-full h-full"/>
          </a>
          <a href="Nationality_Introduce">
            <img src={cover2} alt="cover2" className="w-full h-full"/>
          </a>
        </div>

        
      </div>



      <div className="flex mx-[50px] my-[50px] justify-center">
        <img src={img1} alt="img1" className="w-full h-full" />
      </div>

      <div className="mx-[100px] h-[400px] my-[100px]">
        <ImageSlider images={[...clothes]}/>
      </div>

      <div className="flex justify-center">
        <img src={text1} alt="text1" />
      </div>

      <div className="mx-[100px] h-[350px]">
        <ImageSlider images={[...pattern1]}/>
      </div>

      <div className="h-[200px]"></div>

      <div className="flex justify-center">
        <img src={text2} alt="text2" />
      </div>

      <div className="mx-[100px] h-[350px] my-[50px]">
        <ImageSlider images={[...pattern2]}/>
      </div>

      <div className="h-[100px]"></div>

      <FooterSlider />
      <Footer />
    </div>
  );
}

export default Nationality;
