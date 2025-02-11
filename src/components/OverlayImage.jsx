import { useState } from "react";

function OverlayImage({ bgSrc, overlaySrc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-[300px] h-[200px] lg:w-[350px] lg:h-[250px] rounded-xl shadow-lg overflow-visible">
      {/* 底层图片 */}
      <img src={bgSrc} alt="背景图" className="w-full h-full object-cover rounded-xl" />

      {/* 叠放的图片（可超出底层图片范围） */}
      <img
        src={overlaySrc}
        alt="叠加图"
        className={`absolute -bottom-6 -right-6 w-1/3 max-w-[120px] rounded-full shadow-md transition-all duration-300 ease-out ${
          isHovered ? "scale-300 rounded-lg translate-x-4 translate-y-4" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ zIndex: 10 }}
      />
    </div>
  );
}

export default OverlayImage;
