import React from "react";
import Cards from "./Cards";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full w w-full">
      <div className="md:flex md:mx-32">
        <h1 className="text-3xl font-bold px-6 py-3 text-slate-900 mx-6">
          Powerful features to help you manage all your leads
        </h1>
        <p className="text-md px-6 py-3 mx-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          praesentium ipsam consectetur commodi exercitationem distinctio,
          beatae recusandae temporibus accusantium rerum.
        </p>
      </div>
      <div className="md:flex md:flex-wrap md:mx-32">
        <Cards
          logo={'/assets/reshot-icon-web-development-GXQPND28UE.svg'}
          heading={"Web Development"}
          text={
            "We carry more than just good coding skills. Our experience makes us stand out from other web development"
          }
        />
        <Cards
          logo={"/assets/reshot-icon-search-engine-optimization-X4D9BWGSE5.svg"}
          heading={"Search Engine Optimaization"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam laborum cum ipsum sequi animi iusto eaque officia ad modi."
          }
        />
        <Cards
          logo={"/assets/reshot-icon-social-media-marketing-CSMQNDG56H.svg"}
          heading={"Social Media Optimaization"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam laborum cum ipsum sequi animi iusto eaque officia ad modi."
          }
        />
        <Cards
          logo={"/assets/reshot-icon-digital-marketing-C4BN5DZYUF.svg"}
          heading={"Digital Marketing"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam laborum cum ipsum sequi animi iusto eaque officia ad modi."
          }
        />
        <Cards
          logo={"/assets/reshot-icon-ui-ux-designer-96PWLQYATG.svg"}
          heading={"UI/UX Design"}
          text={
            "Build the product you need on time with an experienced team that uses a clear and effective design process."
          }
        />
      </div>
    </section>
  );
};

export default About;
