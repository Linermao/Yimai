import {useState} from "react";

import Navbar from "../components/Navbar";
import FullPageImage from "../components/FullPageImage";
import ImageGallery from "../components/ImageGallery";
import FooterSlider from "../components/FooterSlider";
import Footer from "../components/Footer";
import HoverReveal from "../components/HoverReveal";
import TextOverlay from "../components/TextOverlay";


import cover from "../assets/Home/cover.png";
import logo from "../assets/logo_l.svg";
import changeimg1 from "../assets/Home/changeimg1.png";
import changeimg2 from "../assets/Home/changeimg2.png";
import changeimg3 from "../assets/Home/changeimg3.png";
import changeimg4 from "../assets/Home/changeimg4.png";
import bg from "../assets/Home/bg.png";
import img1 from "../assets/Home/img1.png";
import img2 from "../assets/Home/img2.png";
import img3 from "../assets/Home/img3.png";
import img4 from "../assets/Home/img4.png";
import img5 from "../assets/Home/img5.png";
import img6 from "../assets/Home/img6.png";
import img7 from "../assets/Home/img7.png";
import logo_text from "../assets/logo_text.svg";
import frame1 from "../assets/Home/frame1.png";
import frame2 from "../assets/Home/frame2.png";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Navbar />

      {/* part1 */}
      <FullPageImage src={cover} />
      <div className="flex justify-center items-center p-[200px] bg-gray-100">
        <img src={logo} alt="logo" />
      </div>

      {/* part2 */}
      <div className="mx-[100px] my-[100px] h-[700px]">
        <ImageGallery images={[changeimg1, changeimg2, changeimg3, changeimg4]}/>
      </div>

      <div className="relative w-full h-auto bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        {/* part3 */}
        <div className="grid grid-cols-5 grid-rows-4 mx-[200px] gap-6 h-[800px]">
          <div className="col-span-3 row-span-2">
            <HoverReveal src={img1} alt="img1" text="对外平台"/>
          </div>
          <div className="col-span-2 row-span-2">
            <HoverReveal src={img2} alt="img2" text="民族地区"/>
          </div>
          <div className="col-span-2 row-span-1">
            <HoverReveal src={img3} alt="img3" text=""/>
          </div>     
          <div className="col-span-3 row-span-2">
            <HoverReveal src={img5} alt="img5" text="文创商城"/>
          </div>
          <div className="col-span-2 row-span-1">
            <HoverReveal src={img4} alt="img4" text=""/>
          </div>
        </div>

        {/* part4 */}
        <div className="grid grid-cols-3 gap-5 my-[100px] mx-[200px]">
          <TextOverlay
            src={frame1}
            alt="frame1"
            title="衣脉·活动"
            paragraphs={[
              "万事利丝绸溢彩，民族服饰韵流芳",
              "赴景宁畲族自治县畲族博物馆社会实践",
              "数字化服饰，活态化传承",
            ]}
          />

          <div className="overflow-hidden rounded-lg relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={img6} alt="img6" className={`absolute w-full h-full transitin-opacity duration-300 ${isHovered? "opacity-0" : "opacity-100"}`}/>
            <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered? "opacity-100" : "opacity-0"}`}>
              <TextOverlay
                src={img7}
                alt="img7"
                title="匠人集"
                paragraphs={[
                  "国家级非遗传承人",
                  "陆光正 冯文土 周福礼",
                  "省级非遗传承人",
                  "陈友艺 刘瑞龙 ",
                  "市级非遗传承人",
                  "朱嫣红",
                ]}
                mesh={true}
              />

            </div>
          </div>


          <TextOverlay
            src={frame2}
            alt="frame2"
            title="近期热榜"
            paragraphs={[
              "民族文化传承创新的多元路径探索",
              "新时代民族传统节日的价值与变迁",
              "民族服饰文化内涵与时尚融合之道",
              "民族音乐舞蹈传承发展的破局之策",
              "构建民族间相互理解包容之桥梁",
              "论民族精神传承在当代的重要意义",
            ]}
          />
        </div>


      </div>

      


      {/* part5 */}
      <div className="flex justify-center items-center p-[200px]">
        <img src={logo_text} alt="logo_text" />
      </div>

      <FooterSlider />
      <Footer />
    </div>
  );
}

export default Home;
