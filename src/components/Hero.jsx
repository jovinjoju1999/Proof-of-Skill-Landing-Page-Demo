import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" id="hero">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Proof of Skill, building
        <span className="bg-gradient-to-b from-green-400 to-blue-500 text-transparent bg-clip-text">
          {" "}
          trust in credentials
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Discover your skills with our innovative platform. Validate your
        expertise, showcase your abilities, and embark on a journey of authentic
        talent recognition. Join us today and let your capabilities speak for
        themselves!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-b from-green-400 to-blue-500 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-teal-700 shadow-teal-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Oops!! Your browser does not support the video.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-teal-700 shadow-teal-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Oops!! Your browser does not support the video.
        </video>
      </div>
    </div>
  );
};

export default Hero;
