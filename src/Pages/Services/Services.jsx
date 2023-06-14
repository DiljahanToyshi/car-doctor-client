import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services,setServices] = useState([]);
    const [ascending,setAscending] = useState(true);

    useEffect(() =>{
        fetch(`http://localhost:5000/services?sort=${ascending ? 'ascending' : 'descending'}`)
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[ascending]);

    return (
      <div className="text-center m-8">
        <h1 className=" text-[#FF3811] font-bold text-xl">Service</h1>
        <p className="text-4xl font-semibold">Our Service Area</p>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
        <button
          onClick={() => setAscending(!ascending)}
          className="btn  btn-error text-white"
        >
          {" "}
          {ascending ? "Price: High to Low" : "Price: Low to High"}
        </button>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;