function FullPageImage({ src, alt }) {
    return (
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="h-full w-full flex items-center justify-center bg-black/30">
          <h1 className="text-white text-4xl font-bold">{alt}</h1>
        </div>
      </div>
    );
}
  
export default FullPageImage;
  