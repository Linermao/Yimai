import Navbar from "../../components/Navbar";
import FullPageImage from "../../components/FullPageImage";
import ImageOverlay from "../../components/ImageOverlay"
import FooterSlider from "../../components/FooterSlider";
import Footer from "../../components/Footer";
import Text from "../../components/Text";

import cover1 from "../../assets/Nationality/Nationality_Introduce/cover1.png";
import cover2 from "../../assets/Nationality/Nationality_Introduce/cover2.png";
import cover3 from "../../assets/Nationality/Nationality_Introduce/cover3.png";
import cover4 from "../../assets/Nationality/Nationality_Introduce/cover4.png";

function Introduce({ title, text }){
    return (
        <div className="flex flex-col items-center gap-4 max-w-[600px]">
            <Text variant="title" className="text-white text-6xl">{title}</Text>
            <Text variant="introduce" className="text-white">{text}</Text>
        </div>
    )
}

function Nationality() {
  return (
    <div>
      <Navbar />

      <FullPageImage src={cover1}/>

      <div className="relative">
        <ImageOverlay src={cover2}/>
        <div className="absolute inset-0 flex items-center justify-center translate-x-[15%] translate-y-[15%]">
          <Introduce 
            title="献哈达" 
            text="献哈达是藏族人民日常交往中常见的一种礼仪,常在觐期佛像,建房竖柱、认错请罪,拜会尊长,送别迎亲、馈赠亲友时使用,表示敬意、祝贺,表达纯洁、诚挚之心。哈达有蓝、白、黄、绿、红五种,最常见的为白色哈达,象征、纯洁、吉利。哈达一般用丝绸做成。五彩哈达是最为隆重的礼物,是献给菩萨和迎亲做彩礼用的特定礼物。送接哈达有讲究:下辈向上辈或高僧活佛敬献哈达,要微微躬身,双手捧着献于手上或置座前桌上,献后后退数步方能转身离去,以示尊敬。"  
          />
        </div>
      </div>

      <div className="relative">
        <ImageOverlay src={cover3}/>
        <div className="absolute inset-0 flex items-center justify-center translate-x-[-15%] translate-y-[15%]" >
          <Introduce 
            title="酥油茶" 
            text="酥油茶是藏乡群众日常生活所必需的一种饮料,也是藏族人民待客、礼仪、祭祀等活动不可或缺的用品,极具民族特色和文化内涵。刚进藏的汉族干部,要适应高原环境,首先要过生活关,其中重要的一条就是能不能喝酥油茶。顾名思义,酥油茶由酥油、茶和食盐三种原料做成。酥油是藏族人民用手工工艺从牛羊奶中提炼出的奶油。提取的方法既简单又别致。酥油茶营养非常丰富,喝后还能生津止渴。"  
          />
        </div>
      </div>

      <div className="relative">
        <ImageOverlay src={cover4}/>
        <div className="absolute inset-0 flex items-center justify-center translate-y-[15%]">
          <Introduce 
            title="唐卡" 
            text="唐卡(Thang-ga)也叫唐嘎,唐喀,系藏文音译,指用彩缎装裱后悬挂供奉的宗教卷轴画。唐卡是藏族文化中一种独具特色的绘画艺术形式,题材内容涉及藏族的历史、政治、文化和社会生活等诸多领域,堪称藏民族的百科全书。传世唐卡大都是藏传佛教和苯教作品。唐卡是在藏传佛教文化孕育下诞生的一种宗教艺术,早已成为藏区人民生活不可或缺的一部分。唐卡的制作、供奉和流传有着自己的规制,是藏传佛教乃至中华文化的重要组成。"  
          />
        </div>
      </div>
      <FooterSlider />
      <Footer />
    </div>
  );
}

export default Nationality;
