import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, url,img }) => {
  const handleDemoClick = () => {
    console.log(url)
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="p-3 md:p-6 flex flex-col w-75 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 w-full h-48 md:h-56 object-cover rounded-t-2xl" src={img} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button
  onClick={handleDemoClick}
  className="md:mt-10 text-white py-2 px-3 text-xs md:text-sm md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
>
  Demo
</button>
<button
  className="md:mt-10 text-white py-2 px-3 text-xs md:text-sm md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
>
  Source Code
</button>

      </div>
    </div>
  );
};

export default ProjectCard;
