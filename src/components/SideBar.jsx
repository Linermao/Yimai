function Sidebar({ title, links, icons, margin="", bgColor="bg-white/50" }) {

  return (
    <>
      {/* 侧边栏 */}
      <div 
        className={`h-full w-full rounded-lg ${bgColor}
                    backdrop-blur-sm text-black p-6 transition-transform duration-300 ease-in-out
                    `}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className={`space-y-2`}>
          {links.map((link, index) => (
            <li key={index} className={`flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors ${margin}`}>
              {icons && <img key={index} src={icons[index]} alt={`icons_${index}`} />}
              {link}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
