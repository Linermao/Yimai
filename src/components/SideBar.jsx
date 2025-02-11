function Sidebar({ title, links }) {

  return (
    <>
      {/* 侧边栏 */}
      <div 
        className={`h-full w-full rounded-lg bg-white/50 
                    backdrop-blur-sm text-black p-6 transition-transform duration-300 ease-in-out
                    `}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-300 transition-colors">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
