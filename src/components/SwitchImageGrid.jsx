import { useState } from "react";

function SwitchImageGrid({ images }) { 
    const [activeIndex, setActiveIndex] = useState(0); // 默认第一张放大

    return (
      <div className="w-full max-w-[550px]">
        <div className="grid grid-cols-4 gap-2 h-85">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative overflow-hidden transition-all duration-300 rounded-lg ${
                index === activeIndex ? "col-span-2" : "col-span-1"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <img
                src={src}
                alt={`image-${index}`}
                className={`absolute w-full h-full object-cover transition-transform duration-300 ${
                  index === activeIndex ? "scale-x-100" : "scale-x-100"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    );
}
  
  export default SwitchImageGrid;
  