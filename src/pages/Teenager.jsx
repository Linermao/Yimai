import { useState } from "react"

import FooterSlider from "../components/FooterSlider";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";



import cover1 from "../assets/Teenager/cover1.png";
import cover2 from "../assets/Teenager/cover2.png";
import cover3 from "../assets/Teenager/cover3.png";
import pattern from "../assets/Teenager/pattern.png";
import navbar from "../assets/Teenager/navbar.png";
import logo from "../assets/logo_photo.svg";
import bg1 from "../assets/Teenager/bg1.png";
import bg2 from "../assets/Teenager/bg2.png";
import bg3 from "../assets/Teenager/bg3.png";
import bg4 from "../assets/Teenager/bg4.png";
import bg7 from "../assets/Teenager/bg7.png";
import bg5 from "../assets/Teenager/bg5.png";
import bg6 from "../assets/Teenager/bg6.png";
import title1 from "../assets/Teenager/title1.png";
import title2 from "../assets/Teenager/title2.png";
import title3 from "../assets/Teenager/title3.png";
import img1 from "../assets/Teenager/img1.png";
import img2 from "../assets/Teenager/img2.png";
import img3 from "../assets/Teenager/img3.png";
import linepattern1 from "../assets/Teenager/linepattern1.png";
import introduce1 from "../assets/Teenager/introduce1.png";
import introduce2 from "../assets/Teenager/introduce2.png";
import line1 from "../assets/Teenager/line1.png";
import line2 from "../assets/Teenager/line2.png";
import person1 from "../assets/Teenager/person1.png";
import person2 from "../assets/Teenager/person2.png";
import person3 from "../assets/Teenager/person3.png";
import person4 from "../assets/Teenager/person4.png";
import person5 from "../assets/Teenager/person5.png";
import popout from "../assets/Teenager/popout.png";
import show1 from "../assets/Teenager/show1.png";
import show2 from "../assets/Teenager/show2.png";
import arrow1 from "../assets/Teenager/arrow1.png";
import arrow2 from "../assets/Teenager/arrow2.png";
import button from "../assets/Teenager/button.png";
import product1 from "../assets/Teenager/product1.png";
import product2 from "../assets/Teenager/product2.png";
import product3 from "../assets/Teenager/product3.png";

function Product({ product, name, price, color="" }) {
  return (
    <div className="relative w-full h-full bg-white rounded-2xl flex flex-col justify-between">
      
      {/* 图片部分 */}
      <div className="flex justify-center items-center flex-grow p-6">
        <img src={product} alt="" className="max-w-full max-h-full object-contain"/>
      </div>

      {/* 文字部分 */}
      <div className={`w-full bottom-0 p-2 bg-gradient-to-l rounded-b-2xl ${color} `}>
        <div className="flex justify-between mx-5">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-2xl font-bold">{price}</p>  
        </div>
      </div>
    </div>
  );
}



function Teenager() {
  const covers = [cover1, cover2, cover3];
  const shows = [show1, show2];
  const [coverNum, setCoverNum] = useState(0);
  const [showNum, setShowNum] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    setCoverNum((coverNum + 1) % covers.length);
    setRotation((rotation + 30) % 360);
  }

  const trips = Object.values(import.meta.glob("/src/assets/trips/*.png", { eager: true })).map((module) => module.default);

  return (
    <div>
      {/* part1 */}
      <div className="relative w-full h-screen">
        <div>
          {covers.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={index}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === coverNum ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        {/* 切换按钮 */}
        <img
          src={pattern}
          alt="pattern"
          className={`absolute top-[25%] cursor-pointer translate-x-[-50%] transition-transform duration-500`}
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={handleNext}
        />

        <div className="flex justify-center">
          <img src={navbar} alt="" className="absolute top-0"/>
          <div className="absolute top-0 flex gap-24 z-10 text-black font-bold text-2xl items-center translate-y-[-20px] overflow-hidden">
            <p>专题</p>
            <p>资讯</p>
            <p>科普</p>
            <div className="flex flex-col justify-center items-center">
              <img src={logo} alt="logo" />
              <a href="/">
                <p>首页</p>
              </a>
            </div>
            <p>展厅</p>
            <p>商城</p>
            <p>定制</p>
          </div>
        </div>
      </div>

      {/* part2 */}
      <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="flex flex-col justify-center items-center">
          <img src={title1} alt="title1" />
          <div className="flex gap-8 my-[50px]">
            <div className="flex flex-col items-center">
              <img src={img1} alt="img1" />
              <p className="text-xl font-bold pt-4">东郭先生与狼</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={img2} alt="img2" />
              <p className="text-xl font-bold pt-4">愚公移山</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={img3} alt="img3" />
              <p className="text-xl font-bold pt-4">三人成虎</p>
            </div>
          </div>
          <img src={linepattern1} alt="linepattern1" />
          <div className="flex justify-center mx-[100px] pb-10">
            <img src={introduce1} alt="introduce1" className="w-full h-full"/>
            <img src={introduce2} alt="introduce2" className="w-full h-full"/>
          </div>
        </div>
      </div>

      {/* part3 */}
      <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="flex flex-col justify-center items-center">
          <img src={title2} alt="title1" />
          <div className="flex justify-center gap-24 pt-16">

            <div className="relative w-[150px] h-[550px] rounded-2xl shadow-2xl from-[#4B9CDE] bg-gradient-to-b ">
              <p className="text-white font-bold text-4xl pt-4 text-center">小游戏</p>
              <button onClick={() => setIsOpen(true)}>
                <img src={person1} alt="person1" className="absolute bottom-10 scale-135" />
              </button>
            </div>

            <div className="relative w-[150px] h-[450px] rounded-2xl shadow-2xl from-[#92D64D] bg-gradient-to-b ">
              <p className="text-white font-bold text-4xl pt-4 text-center">表情包</p>
              <img src={person2} alt="person2" className="absolute bottom-20 scale-135"/>
            </div>

            <div className="relative w-[150px] h-[350px] rounded-2xl shadow-2xl from-[#DE6252] bg-gradient-to-b ">
              <p className="text-white font-bold text-4xl pt-4 text-center">插画</p>
              <img src={person3} alt="person3" className="absolute bottom-10 scale-135"/>
            </div>

            <div className="relative w-[150px] h-[450px] rounded-2xl shadow-2xl from-[#D14753] bg-gradient-to-b ">
              <p className="text-white font-bold text-4xl pt-4 text-center">延伸文创</p>
              <img src={person4} alt="person4" className="absolute bottom-10 scale-135"/>
            </div>

            <div className="relative w-[150px] h-[550px] rounded-2xl shadow-2xl from-[#E68B30] bg-gradient-to-b ">
              <p className="text-white font-bold text-4xl pt-4 text-center">纹样科普</p>
              <img src={person5} alt="person5" className="absolute bottom-15 scale-135"/>
            </div>

          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="relative rounded-lg shadow-2xl">
              {/* 显示大图 */}
              <img src={popout} alt="popout" className="w-[500px] h-auto rounded-md" />
              {/* 关闭按钮 */}
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold p-4"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </div>
          </div>
        )}
        <div className="h-[200px]"></div>
      </div>

      {/* part4 */}
      <div>
        <ImageSlider images={[line1]}/>
      </div>

      {/* part5 */}
      <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg3})` }}>
        <div className="absolute left-1/2 z-20 translate-x-[-50%]">
          <img src={title3} alt="title3" />
        </div>
        <div className="absolute w-full h-full z-10">
          <img src={bg4} alt="bg4" />
        </div>

        <div className="absolute z-30 top-1/3 left-20">
          <button onClick={() => setShowNum((showNum + shows.length - 1) % shows.length)}  >
            <img src={arrow1} alt="arrow1" className="w-[80%]" />     
          </button>
        </div>
        <div className="absolute z-30 top-1/3 right-20">
          <button onClick={() => setShowNum((showNum + shows.length - 1) % shows.length)}  >
            <img src={arrow2} alt="arrow2" className="w-[80%]" />     
          </button>
        </div>

        <div className="absolute z-30 bottom-20 left-1/2 ">
          <a href="#">
            <img src={button} alt="button" className="w-[80%] translate-x-[-50%]"/>
          </a>
        </div>

        <div className="relative flex justify-center items-center w-full h-full translate-y-[-5%]">
          {shows.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={index}
              className={`absolute w-[65%] transition-opacity duration-500 ${
                index === showNum ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* part6 */}
      <div className="relative w-full h-[1000px]
           bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: `url(${bg7})` }}
      >
        <div className="w-full h-full flex justify-center items-center gap-10">
          <a href="/Buy" className="flex flex-col justify-center items-center gap-4">
            <div className="w-[300px] h-[300px]">
              <Product product={product1} name="背包" price="¥ 68" color="from-[#ff9999]" />
            </div>
            <div className="w-[300px] h-[300px]">
              <Product product={product2} name="袜子" price="¥ 20" color="from-[#aee67e]" />
            </div>
          </a>

          <a href="/Buy" className="w-[900px] h-[616px]">
            <Product product={product3} name="烫金徽章" price="¥ 45" color="from-[#5AD9BD] p-6" />
          </a>
        </div>
      </div>

      {/* part7 */}
      <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg6})`}}>

      </div>

      {/* part8 */}
      <div className="w-full h-auto bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg5})`}}>
        <div className="flex mx-[50px] justify-center gap-5 p-[75px]">
            <a href="/Nationality_Introduce">
              <img src={trips[0]} alt="trip1" className="w-full h-full rounded-2xl"/>
            </a>
            <a href="Nationality_Introduce">
              <img src={trips[1]} alt="trip2" className="w-full h-full rounded-2xl"/>
            </a>
        </div>
      </div>

      <div>
        <ImageSlider images={[line2]}/>
      </div>

      <div className="">
        <FooterSlider />
      </div>
      <Footer />


    </div>
  );
}

export default Teenager;
