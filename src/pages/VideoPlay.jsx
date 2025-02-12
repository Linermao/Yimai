import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

import video from "../assets/Foreign/videos/video9.png"

function VideoPlay(){

    const icons = Object.entries(
        import.meta.glob("/src/assets/Foreign/Sidebar/*.svg", { eager: true })
      )
        .sort(([a], [b]) => a.localeCompare(b)) // 按文件路径排序
        .map(([, module]) => module.default);
  
    return(
        <div>
            <Navbar />
            <div className="flex w-full h-screen bg-cover bg-center">
                <div className="left-0 w-[200px] h-screen -z-10">
                    <Sidebar
                        title=""
                        icons={icons}
                        links={["Recommend", "Browsing History", "Figures", "Culture", "Astronomy", "Geography", "History", "Cuisine", "Custom", "Architecture", "Commerce", "Medicine", "Art", "Ancient war" ]}
                        margin = "my-7"
                        bgColor = "bg-white"
                    />
                </div>

                <div className="flex flex-col w-full h-full">
                    <img src={video} alt="video" />
                    <div className="bg-white h-[300px]">
                        {/* waiting */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoPlay;