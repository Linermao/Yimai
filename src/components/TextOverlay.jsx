function TextOverlay({ src, alt, title, paragraphs, mesh=false }) {
  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-lg"
    >
      {/* 背景图片 */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {/* 文字内容 */}
      <div className={`absolute inset-0 flex flex-col justify-center text-center p-3 transition-all duration-300 ${mesh? "bg-gray-600/60" : ""} `}>
        {/* 标题 */}
        <h2 className={`text-4xl font-bold transition-all duration-300 text-white my-5`}>
          {title}
        </h2>

        {/* 段落文本 */}
        {paragraphs.map((text, index) => (
          <p 
            key={index} 
            className={`text-gray-300 mt-2 text-base leading-relaxed transition-all duration-300 hover:text-white hover:scale-110`}
          >
            <a href="#">
                {text}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default TextOverlay;
