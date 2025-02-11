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
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video2,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",

    },
    {
      thumbnail: video3,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video4,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video5,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video6,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video7,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video8,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video9,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "/Video_9",
    },
    {
      thumbnail: video10,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video11,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video12,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
  ]
  const videos2 = [
    {
      thumbnail: video13,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video14,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video15,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video16,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video17,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video18,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video19,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
    {
      thumbnail: video20,
      title: "21321213",
      views: "123123",
      days: "123213",
      link: "#",
    },
  ]

  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute left-0 w-[200px] h-screen">
          <Sidebar
            title=""
            links={["Link1", "Link2", "Link3", "Link4"]}
          />
        </div>
        <div className="absolute flex flex-col right-0 w-[200px] h-screen gap-7 my-6">
          <Sidebar
            title="Hot search"
            links={["Link1", "Link2", "Link3", "Link4"]}
          />
          <Sidebar
            title="Unpopular"
            links={["Link1", "Link2", "Link3", "Link4"]}
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
