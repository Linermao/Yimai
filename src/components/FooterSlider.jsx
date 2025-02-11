import footerslider1 from "../assets/footerslider1.png";
import footerslider2 from "../assets/footerslider2.png";
import footerslider3 from "../assets/footerslider3.png";
import footerslider4 from "../assets/footerslider4.png";
import footerslider5 from "../assets/footerslider5.png";
import footerslider6 from "../assets/footerslider6.png";

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

function FooterSlider(){
    return (
        <div className="flex justify-center gap-8 p-2">
            <ImageWithText src={footerslider1} alt="青少年版"/>
            <ImageWithText src={footerslider2} alt="对外平台"/>
            <ImageWithText src={footerslider3} alt="实践活动"/>
            <ImageWithText src={footerslider4} alt="文创商城"/>
            <ImageWithText src={footerslider5} alt="民族地区"/>
            <ImageWithText src={footerslider6} alt="关于衣脉"/>
        </div>
    )
}

export default FooterSlider;

