import img1 from "../../../assets/images/about_us/parts.jpg";
import img2 from "../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          {" "}
          <img src={img2} className="w-3/4  rounded-lg shadow-2xl" />{" "}
          <img
            src={img1}
            className="absolute rounded-lg border-8 border-white w-1/2 right-5 top-1/2 shadow-2xl"
          />
        </div>

        <div className="lg:w-1/2 ">
          <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
          <p
            className="text-4xl font-bold w-[376px] h-[ 162px]"
          >
            We are qualified & of experience in this field
          </p>
          <p
            className="py-6 pr-10 "
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br /> <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] border-0 px-5">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
