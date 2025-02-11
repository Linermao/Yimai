import { useState } from "react";
import share from "../assets/icons/share.svg";

function VideoThumbnail({ thumbnail, title, views, daysAgo, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* 视频封面 */}
      <div
        className="overflow-hidden rounded-t-lg h-[60%]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href={link}>        
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            className={`w-full transition-transform duration-300 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
        </a>
      </div>

      {/* 文字内容 */}
      <div className="p-3">
        <h3 className="text-lg font-semibold truncate">{title}</h3>

        {/* 播放次数 + 发布时间 */}
        <div className="text-sm text-gray-500 flex justify-between items-center mt-2">
          <span>{views} 次播放 • {daysAgo} 天前</span>

          {/* 分享按钮 */}
          <button className="p-1 rounded-full hover:bg-gray-200">
            <img src={share} alt="Share" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnail;
