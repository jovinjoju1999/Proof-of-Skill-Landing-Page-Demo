import { CheckCircle2 } from "lucide-react";
import globe from "../assets/globe.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20" id="workflow">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Elevate your{" "}
        <span className="bg-gradient-to-b from-green-400 to-blue-500 text-transparent bg-clip-text">
          accreditation workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img
            src={globe}
            alt="Code"
            className="opacity-90 rounded-lg border border-neutral-700 shadow-neutral-400 mx-2 my-4"
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
