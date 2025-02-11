import Navbar from "../components/Navbar";
import FullPageImage from "../components/FullPageImage";
import OverlayImage from "../components/OverlayImage";
import Text from "../components/Text";
import SwitchImageGrid from "../components/SwitchImageGrid";
import FooterSlider from "../components/FooterSlider";
import Footer from "../components/Footer";


import heroImage from "../assets/Information/image1.png"; // 第一张图
import img2 from "../assets/Information/image2.png";
import bg1 from "../assets/Information/bg1.png";
import bg2 from "../assets/Information/bg2.png";
import bg3 from "../assets/Information/bg3.png";
import switch1 from "../assets/Information/switch1.png";
import part4 from "../assets/Information/part4.png";
import human1 from "../assets/Information/human1.png";
import human2 from "../assets/Information/human2.png";
import human3 from "../assets/Information/human3.png";
import human4 from "../assets/Information/human4.png";
import human5 from "../assets/Information/human5.png";
import human6 from "../assets/Information/human6.png";
import img3 from "../assets/Information/image3.png";

function ImageWithText({ src, alt }) {
  return (
    <div className="relative w-full h-auto">
      {/* 图片 */}
      <img src={src} alt={alt} className="w-full h-full object-cover rounded-lg" />
      {/* 文字层 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-xl font-semibold">{alt}</span>
      </div>
    </div>
  );
}

function Information() {
  return (
    <div>
      <Navbar />

      {/* part1 */}
      <FullPageImage src={heroImage} />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <FullPageImage src={img2}/>
      </div>

      {/* part2 */}
      <Text variant="title" className="my-10 text-center">
        衣脉相承探索Style3D 
      </Text>
      <div className="flex flex-col items-center gap-6 p-6">
        <div className="flex flex-wrap justify-center gap-10 p-6">
          <OverlayImage bgSrc={bg1} overlaySrc={bg1} />
          <OverlayImage bgSrc={bg2} overlaySrc={bg1} />
          <OverlayImage bgSrc={bg3} overlaySrc={bg1} />
        </div>
        <Text variant="body" className="max-w-[900px] text-center">
          Style3D作为一种三维虚拟试衣的软件工具，有利于加快民族服饰的数字化构建，为中华民族传统服饰文化、非遗服饰与技艺的保护及相关产业发展带来重要意义和广阔的经济前景。9月13日下午，衣脉相承实践团走进了浙江凌迪数字科技有限公司，切身感受Style3D技术在实践中的应用以及对传统服饰产业带来的颠覆性变革。
        </Text>
      </div>

      {/* part3 */}
      <Text variant="title" className="my-10 text-center">
        万事利丝绸溢彩，民族服饰韵流芳
      </Text>
      <div className="flex justify-center gap-6 p-6">
        <SwitchImageGrid images={[switch1, switch1, switch1]} />
        <Text variant="body" className="max-w-[200px]">
          华美的丝绸承载着民族服饰丰富的文化内涵。随着时代的变迁，丝绸的工艺不断创新，为民族服饰的设计提供了更多的可能性。同时，创造出既具有民族特色又符合时代潮流的民族服饰，有利于让古老的丝绸文化在新的时代换发出新的活力。9月13日上午，我们也借参观万事利丝绸文化股份有限公司的契机，深刻感受到了丝绸服饰文化与现代时尚元素的奇妙碰撞。  
        </Text>
      </div>

      {/* part4 */}
      <Text variant="title" className="my-10 text-center">
        回溯展柜里的历史，听见文物的“新生”
      </Text>
      <div className="flex justify-center items-center p-2">
        <img src={part4} alt="part4" style={{width: "700px", height: "auto"}}/>
      </div>

      {/* part5 */}
      <Text variant="title" className="my-10 text-center">
        他们是非遗的“守望者”
      </Text>
      <div className="flex justify-center items-center gap-2">
        <div className="flex h-[300px]">
          <img src={human1} alt="human1"/>
          <img src={human2} alt="human2"/>
        </div>
        <div className="flex flex-col max-w-[370px] p-2">
          <div className="flex">
            <div className="w-2.5 h-auto bg-[#009983] my-1"></div>
            <Text variant="name" className="flex mx-4">
              黄金美
            </Text>  
          </div>
          <Text variant="introduce" className="my-2">
            老师是畲族传统服饰传承人，凭着扎实精湛的技术与不断的探索、琢磨，获得了许多的奖项，设计的服装和配色受到了越来越多人的认可与喜爱。我们找到黄老师的时候，她热情地接待了我们。黄老师表示，畲族服饰面临受众小、市场化发展可能性小、数字化推广力度小，元素、样式等均没有统一标准的难题。时尚在更新迭代，只有不断创新，才能不断涌现出新的生命力。
          </Text>
        </div>
      </div>

      {/* part6 */}
      <Text variant="title" className="my-10 text-center">
        银针飞舞，畲绣传承的脚步从未停止
      </Text>
      <div className="flex justify-center items-center gap-2">
        <div className="flex flex-col max-w-[370px] p-2">
          <div className="flex">
            <div className="w-2.5 h-auto bg-[#009983] my-1"></div>
            <Text variant="name" className="flex mx-4">
              夏安静
            </Text>  
          </div>
          <Text variant="introduce" className="my-2">
            老师是景宁县畲绣非遗传承人、凤舞银针畲绣体验基地负责人，曾获浙江省“百名女工”巧手称号。她于2017年成立畲族刺绣工作室后，就一直致力于将畲族文化和畲族刺绣的有机融合。团队现场观摩欣赏了夏老师俯首绣架工作的样子。夏安静对于青少年缺乏对传统文化的认识和动手能力这一点感到特别遗憾。她说，作为非遗传承人，她认为自己有责任去宣传畲绣文化、普及畲绣文化，并希望能鼓舞更多的人参与到传承和守护畲绣工作。
          </Text>
        </div>
        <div className="flex h-[300px]">
          <img src={human3} alt="human3" className="h-full"/>
          <div className="grid grid-row-3 h-full">
            <img src={human4} alt="human4" className="h-full object-cover w-[200px] rounded-2xl"/>
            <img src={human5} alt="human5" className="h-full object-cover w-[200px] rounded-2xl"/>
            <img src={human6} alt="human6" className="h-full object-cover w-[200px] rounded-2xl"/>
          </div>
        </div>

      </div>

      {/* part7 */}
      <Text variant="title" className="my-10 text-center">
        潜移默化，织就科普教育网
      </Text>
      <div className="flex justify-center items-center gap-5">
        <div className="flex flex-col max-w-[370px] p-2">
          <Text variant="body" className="my-2 leading-9">
            为深入学习贯彻落实习近平总书记关于教育的重要论述和党的二十大精神，杭州电子科技大学根据浙江省校地联动助推浙江山区海岛县学生资助高质量发展项目工作部署，对接仙居山区开展“校地资助共建 助力乡村振兴”暑期社会实践。晨光初破晓，我们踏上征途携着智慧的甘霖绘一幅支教蓝图。支教过程中，我们亲身感受了当地教育的现状。我们尝试在课堂上引入民族服饰和特色纹样的教学内容，通过生动的讲解和互动，让孩子们感受到民族文化的魅力和价值，让民族之花在他们心中生根发芽，绽放出绚烂的光彩。
          </Text>
        </div>
        <img src={img3} alt="img3" style={{width: "400px", height: "auto"}}/>
      </div>

      {/* part8 */}
      <FooterSlider />

      <Footer />
    </div>
  );
}

export default Information;
