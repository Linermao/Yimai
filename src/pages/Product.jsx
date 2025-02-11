import Navbar from "../components/Navbar";
import FullPageImage from "../components/FullPageImage";
import ImageSlider from "../components/ImageSlider";
import ImageOverlay from "../components/ImageOverlay";
import Text from "../components/Text";
import FooterSlider from "../components/FooterSlider";
import Footer from "../components/Footer";


import cover from "../assets/Product/cover.png";
import imgslider1 from "../assets/Product/imgslider1.png";
import imgslider2 from "../assets/Product/imgslider2.png";
import imgslider3 from "../assets/Product/imgslider3.png";
import imgslider4 from "../assets/Product/imgslider4.png";
import imgslider5 from "../assets/Product/imgslider5.png";
import imgslider6 from "../assets/Product/imgslider6.png";
import imgslider7 from "../assets/Product/imgslider7.png";
import imgslider8 from "../assets/Product/imgslider8.png";
import imgoverlay1 from "../assets/Product/imgoverlay1.png";
import imgoverlay2 from "../assets/Product/imgoverlay2.png";
import img1 from "../assets/Product/img1.png";
import img2 from "../assets/Product/img2.png";
import img3 from "../assets/Product/img3.png";
import img4 from "../assets/Product/img4.png";
import img5 from "../assets/Product/img5.png";
import img6 from "../assets/Product/img6.png";
import img7 from "../assets/Product/img7.png";
import img8 from "../assets/Product/img8.png";
import img9 from "../assets/Product/img9.png";
import altimg1 from "../assets/Product/altimg1.png";
import altimg2 from "../assets/Product/altimg2.png";
import altimg3 from "../assets/Product/altimg3.png";
import altimg4 from "../assets/Product/altimg4.png";


function GridImage({src, alt, name, price}) {
  return (
    <div className="flex flex-col gap-2">
      <a href="buy">
        <img src={src} alt={alt} />
        <Text variant="name" className="font-bold">
          {name}
        </Text>
        <Text variant="body" className="font-bold">
          {price}
        </Text>
      </a>
    </div>
  );
}

function Product() {
  return (
    <div className="w-full">
      <Navbar />
      
      {/* part1 */}
      <FullPageImage src={cover} />
      <div className="my-[100px] mx-[100px] h-[600px]">
          <ImageSlider images={[imgslider1, imgslider2, imgslider3, imgslider4]} />
      </div>

      {/* part2 */}
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="mx-[100px]">
          <ImageOverlay src={imgoverlay1} alt="Example1" text="畲族人物文创系列产品" direction="top" />
        </div>
        <div className="mx-[100px]">
          <ImageOverlay src={imgoverlay2} alt="Example2" text="从上方滑入" direction="right" />
        </div>
      </div>

      {/* part3 */}
      <div className="my-[100px] mx-[100px] h-[500px]">
          <ImageSlider images={[imgslider5, imgslider6, imgslider7, imgslider8]} altImages={[altimg1,altimg2,altimg3,altimg4]} hoverSwap="true" />
      </div>

      {/* part4 */}
      <div className="my-[100px] mx-[100px]">
        <img src={img1} alt="img1" />
      </div>
      <div className="my-10 mx-[100px]">
        <img src={img2} alt="img1" />
      </div>
      <div className="my-10 mx-[100px]">
        <img src={img3} alt="img1" />
      </div>

      {/* part5 */}
      <div className="grid grid-cols-3 gap-10 mx-[100px] p-2 my-[200px]">
       <GridImage src={img4} alt="img4" name="定制明信片" price="¥ 5/张" />
       <GridImage src={img5} alt="img5" name="国礼丝巾" price="¥ 160/条" />
       <GridImage src={img6} alt="img6" name="佘佘亚克力板" price="¥ 30/套" />
       <GridImage src={img7} alt="img7" name="藏银款-蓝猫眼" price="¥ 355/个" />
       <GridImage src={img8} alt="img8" name="古法香套件" price="¥ 45/套" />
       <GridImage src={img9} alt="img9" name="盐池伴手礼" price="¥ 10/个" />
      </div>

      <FooterSlider />
      <Footer />

    </div>
  );
}

export default Product;
