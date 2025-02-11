import { useState } from "react";
import Text from "./Text";

function ImageOverlay({ src, alt, text, direction = "no", w, h }) {
  const [isHovered, setIsHovered] = useState(false);

  const width = w || "w-full";
  const height = h || "h-full";

  // 根据方向设置初始位置
  const directionClasses = {
    top: "top-0 left-0 w-full h-full translate-y-[-100%] bg-gradient-to-b",
    // something wired here, the right and bottom need to be -100% to be correct
    right: "top-0 right-0 w-full h-full -translate-x-[-100%] bg-gradient-to-l",
    bottom: "bottom-0 left-0 w-full h-full -translate-y-[-100%] bg-gradient-to-t",
    left: "top-0 left-0 w-full h-full translate-x-[-100%] bg-gradient-to-r",
    no: "top-0 left-0 w-full h-full bg-black/60"
  };

  return (
    <div
      className={`relative ${width} ${height} overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 图片 */}
      <img src={src} alt={alt} className="w-full h-auto object-cover" draggable="false" />

      {/* 蒙版 */}
      <div
        className={`absolute flex flex-col items-center justify-center w-full h-full 
            transition-transform duration-500 p-4
           from-gray-600/80 to-transparent
            ${directionClasses[direction]} ${isHovered ? "translate-x-[0%] translate-y-[0%]" : ""}`}
        >
          <Text variant="title" className="text-white">
            {text}
          </Text>
    </div>
    </div>
  );
}

export default ImageOverlay;
