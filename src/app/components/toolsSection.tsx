const ToolsSection = () => {
    return (
      <section id="tools" className="py-16 bg-blue-100">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">
          Tools I&#39;d love to use
        </h1>
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { src: "/vscodelogo.png", alt: "vs code logo" },
            { src: "/nextailwind.png", alt: "next.js & tailwind logo" },
            { src: "/github.png", alt: "github logo" },
            { src: "/notionlogo.png", alt: "notion logo" },
            { src: "/canva.png", alt: "canva logo" },
            { src: "/Plasfy-Logo.svg", alt: "plasfy logo" },
            { src: "/buffer-inc-vector-logo.svg", alt: "buffer logo" },
            { src: "/Google_Drive_Logo.svg", alt: "google drive logo" },
          ].map((tool, index) => (
            <div
              key={index}
              className="tool bg-white w-32 h-32 mx-auto flex items-center justify-center rounded-lg shadow-md hover:blue-600 shadow hover:bg-gray-300 transition"
            >
              <img
                src={tool.src}
                alt={tool.alt}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ToolsSection;
  
