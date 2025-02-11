import { useState } from "react";

function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-[75px] w-full h-full">
      {/* 左侧大图 */}
      <div className="flex-1 h-full">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 右侧预览图列表 */}
      <div className="flex flex-col justify-between w-[17%] h-full p-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Preview ${index}`}
            className="flex w-full h-auto object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            onMouseEnter={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
