import { useState } from "react";
import Text from "./Text";

function HoverReveal({ src, alt, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-full overflow-hidden bg-[#009983] rounded-lg flex justify-center items-end p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 底部文本区域 */}
      <div className="absolute bottom-2">
        <Text variant="title" className="text-white font-bold">
          {text}
        </Text>
      </div>

      {/* 图片层 */}
      <img
        src={src}
        alt={alt}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ${
          isHovered ? "-translate-y-[15%]" : "translate-y-0"
        }`}
      />
    </div>
  );
}

export default HoverReveal;
