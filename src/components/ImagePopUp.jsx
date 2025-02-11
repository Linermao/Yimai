import { useState } from "react";

export default function ImagePopup({ thumbnail, fullImage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* 点击小图显示弹窗 */}
      <img
        src={thumbnail}
        alt="Thumbnail"
        className="cursor-pointer w-48 h-32 object-cover rounded-md shadow-lg"
        onClick={() => setIsOpen(true)}
      />

      {/* 弹窗 */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="relative p-4 bg-white rounded-lg shadow-2xl">
            {/* 关闭按钮 */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* 显示大图 */}
            <img src={fullImage} alt="Full" className="w-[500px] h-auto rounded-md" />
          </div>
        </div>
      )}
    </div>
  );
}
