import { useState, useRef } from "react";

function ImageSlider({ images, altImages = [], hoverSwap = false}) {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 处理鼠标按下
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // 处理鼠标移动
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // 处理鼠标释放
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={sliderRef}
      className="w-full h-full flex overflow-hidden cursor-grab"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`relative h-full mx-4 flex-shrink-0 overflow-hidden`}
          onMouseEnter={() => hoverSwap && setHoveredIndex(index)}
          onMouseLeave={() => hoverSwap && setHoveredIndex(null)}
        >
          {/* 默认图片 */}
          <img
            src={img}
            alt={`Image ${index}`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              hoveredIndex === index && hoverSwap ? "opacity-0" : "opacity-100"
            }`}
            draggable="false"
          />
          {/* 替换图片（仅当 hoverSwap 为 true 时显示） */}
          {hoverSwap && altImages[index] && (
            <img
              src={altImages[index]}
              alt={`Alt Image ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
              draggable="false"
              onDragStart={(e) => e.preventDefault()} // 阻止默认行为
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;
