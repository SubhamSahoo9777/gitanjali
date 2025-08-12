import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import bannerImg2 from "../../assets/7358602-removebg-preview.png";
import allImag from "../../assets/index"
const Projects = () => {
const labProjects = [
  {
    projectName: "Lab Websites Collection",
    projectDescription: "A website for scientific research and laboratory information.",
    name: "labosci.com",
    url: "https://labosci.com/",
    img: allImag.p2
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "A platform for laboratory facts and insights.",
    name: "labfact.com",
    url: "https://labfact.com/",
    img: allImag.p1
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Search platform for laboratory and scientific resources.",
    name: "labosearch.com",
    url: "https://labosearch.com/",
    img: allImag.p3
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Technology and innovation in laboratory equipment.",
    name: "labotech.best",
    url: "https://labotech.best/",
    img: allImag.p4
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Laboratory tools and services provider.",
    name: "laboten.com",
    url: "https://laboten.com/",
    img: allImag.p5
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Specialized testing services for laboratories.",
    name: "labotesting.com",
    url: "https://labotesting.com/",
    img: allImag.p6
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "News and updates from the lab industry.",
    name: "labotimes.com",
    url: "https://labotimes.com/",
    img: allImag.p7
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Laboratory tools and equipment provider.",
    name: "laboton.com",
    url: "https://laboton.com/",
    img: allImag.p8
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Advanced laboratory electronics and instruments.",
    name: "labotronix.com",
    url: "https://labotronix.com/",
    img: allImag.p9
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Lab equipment and boxing solutions.",
    name: "laboxer.com",
    url: "https://laboxer.com/",
    img: allImag.p1
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Analytical laboratory services and supplies.",
    name: "axylab.com",
    url: "https://axylab.com/",
    img: allImag.p2
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Supplies for laboratories worldwide.",
    name: "labsupplier.com",
    url: "https://labsupplier.com/",
    img: allImag.p3
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Best laboratory supply deals and products.",
    name: "labsupply.best",
    url: "https://labsupply.best/",
    img: allImag.p4
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Laboratory technology solutions.",
    name: "labtech.best",
    url: "https://labtech.best/",
    img: allImag.p9
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Medical laboratory networking and resources.",
    name: "mednics.cc",
    url: "http://mednics.cc/",
    img: allImag.p8
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Medical laboratory innovations.",
    name: "medniz.com",
    url: "https://medniz.com/",
    img: allImag.p7
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Showcasing medical and lab products.",
    name: "medshowcase.com",
    url: "https://medshowcase.com/",
    img: allImag.p5
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Medical and lab services provider.",
    name: "medwon.com",
    url: "https://medwon.com/",
    img: allImag.p3
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Medical and laboratory equipment marketplace.",
    name: "medxir.com",
    url: "https://medxir.com/",
    img: allImag.p9
  },
  {
    projectName: "Lab Websites Collection",
    projectDescription: "Communication solutions for laboratories.",
    name: "labcoms.com",
    url: "https://labcoms.com/",
    img: allImag.p1
  }
];



  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
  <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
  
  <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {labProjects.map((item, index) => (
      <ProjectCard
        key={index}
        title={item.projectName}
        main={item.projectDescription}
        url={item.url}
        img={item.img}
      />
    ))}
  </div>
</div>

  );
};

export default Projects;
