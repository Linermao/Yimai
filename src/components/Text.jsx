function Text({ variant = "body", children, className="" }){
    const baseStyle = "w-full text-gray-800 font-medium";
    const variants = {
        title: "text-4xl font-bold",
        subtitle: "text-2xl font-medium",
        body: "text-base",
        caption: "text-sm",
        name: "font-bold text-2xl",
        introduce: "text-sm leading-8",
        no: "",
    };
    return <p className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</p>
}

export default Text;