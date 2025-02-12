import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import VideoThumbnail from "../components/VideoThumbnail";

import FooterSlider from "../components/FooterSlider";
import Footer from "../components/Footer";

import bg from "../assets/Foreign/bg.png";
import title from "../assets/Foreign/title.png";
import roll from "../assets/Foreign/roll.png";
import buyline1 from "../assets/Foreign/buyline1.png";
import buyline2 from "../assets/Foreign/buyline2.png";

import video1 from "../assets/Foreign/videos/video1.png";
import video2 from "../assets/Foreign/videos/video2.png";
import video3 from "../assets/Foreign/videos/video3.png";
import video4 from "../assets/Foreign/videos/video4.png";
import video5 from "../assets/Foreign/videos/video5.png";
import video6 from "../assets/Foreign/videos/video6.png";
import video7 from "../assets/Foreign/videos/video7.png";
import video8 from "../assets/Foreign/videos/video8.png";
import video9 from "../assets/Foreign/videos/video9.png";
import video10 from "../assets/Foreign/videos/video10.png";
import video11 from "../assets/Foreign/videos/video11.png";
import video12 from "../assets/Foreign/videos/video12.png";
import video13 from "../assets/Foreign/videos/video13.png";
import video14 from "../assets/Foreign/videos/video14.png";
import video15 from "../assets/Foreign/videos/video15.png";
import video16 from "../assets/Foreign/videos/video16.png";
import video17 from "../assets/Foreign/videos/video17.png";
import video18 from "../assets/Foreign/videos/video18.png";
import video19 from "../assets/Foreign/videos/video19.png";
import video20 from "../assets/Foreign/videos/video20.png";


function Foreign() {

  const videos = [
    {
      thumbnail: video1,
      title: "白嫩软糯入口滑，芝麻香浓沁人心",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video2,
      title: "新手也能学会的汤圆简易做法",
      views: "70.4万",
      daysAgo: "4",
      link: "#",

    },
    {
      thumbnail: video3,
      title: "烟花也太震撼了吧！",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video4,
      title: "全村人都来看的灯火会！",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video5,
      title: "山一程，水一程，身向榆关那畔行",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video6,
      title: "“灯月遥相映，人间共良辰”",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video7,
      title: "元宵家人在一起吃汤圆，太幸福了！",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video8,
      title: "醉蟹",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video9,
      title: "这不是迷信，这是中国傩戏",
      views: "70.4万",
      daysAgo: "4",
      link: "/VideoPlay",
    },
    {
      thumbnail: video10,
      title: "湘西赶尸，其实没这么可怕",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video11,
      title: "绒花，传统非遗",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video12,
      title: "皮影戏，穿越时光的景象",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
  ]
  const videos2 = [
    {
      thumbnail: video13,
      title: "第一章 中国人对饮食的态度",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video14,
      title: "第二章 中国人的居住之道",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video15,
      title: "第一章 饮食在中国的文化象征",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video16,
      title: "第一章 饮食礼仪与文化",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video17,
      title: "饮茶之道",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video18,
      title: "工匠 塑魂",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video19,
      title: "工匠 寻传承",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
    {
      thumbnail: video20,
      title: "工匠 守艺",
      views: "70.4万",
      daysAgo: "4",
      link: "#",
    },
  ]
  
  const icons = Object.entries(
    import.meta.glob("/src/assets/Foreign/Sidebar/*.svg", { eager: true })
  )
    .sort(([a], [b]) => a.localeCompare(b)) // 按文件路径排序
    .map(([, module]) => module.default);
  
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute left-0 w-[200px] h-screen">
          <Sidebar
            title=""
            icons={icons}
            links={["Recommend", "Browsing History", "Figures", "Culture", "Astronomy", "Geography", "History", "Cuisine", "Custom", "Architecture", "Commerce", "Medicine", "Art", "Ancient war" ]}
            margin = "my-7"
          />
        </div>
        <div className="absolute flex flex-col right-0 w-[200px] h-auto gap-7 my-6">
          <Sidebar
            title="Hot search"
            links={["Latern Festival", "Yuanxiao", "Latern Show", "Latern Riddles", "Spring Festival", "Mid-Autumn Festival", "Lucky money", "Spring Festival Gala"]}
          />
          <Sidebar
            title="Unpopular"
            links={["Winter Clothing Festival", "Shangsi Festival", "Chill sauce", "Sweet germ", "The Lotus Festival", "Coconut powder", "Cured meat"]}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src={title} alt="title" className="w-[1000px] my-[100px]" />
          <img src={roll} alt="roll" className="w-[450px] translate-y-[-150px]" />
          <button className="flex justify-center items-center rounded-4xl bg-white/50 translate-x-[-25px] translate-y-[-150px]"
            onClick={() => console.log("Throw dice")}
          >
            <p className="text-white text-3xl font-bold px-[45px] py-[15px]">
              Throw dice
            </p>
          </button>
        </div>
      </div>
      
      <div className="w-full h-full bg-cover bg-center bg-repeat-y"
           style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${bg})` }}>

        <div className="flex flex-col items-center justify-center p-6 mx-[200px] bg-white rounded-2xl">
          <div className="grid grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div className="h-[250px]">
                <VideoThumbnail
                  key={index}
                  {...video}
                />
              </div>
            ))}
          </div>

          <a href="/Buy" className="my-[50px] mx-[100px]" >
            <img src={buyline1} alt="buyline1" />
          </a>

          <div className="grid grid-cols-4 gap-6">
            {videos2.map((video, index) => (
              <div className="h-[250px]">
                <VideoThumbnail
                  key={index}
                  {...video}
                />
              </div>
            ))}
          </div>

          <a href="/Buy" className="my-[50px] mx-[100px]">
            <img src={buyline2} alt="buyline2" />
          </a>

          <FooterSlider />
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Foreign;
