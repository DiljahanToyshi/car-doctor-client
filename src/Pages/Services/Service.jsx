/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {_id,title,img,price} = service;
    return (
      <div className="card w-96 bg-base-100 border-2 m-5 mt-12">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl w-[314px] h-[208.01px]"
          />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title font-semibold text-2xl">{title}</h2>
          <div className="card-actions">
            <p className="text-[#FF3811] font-semibold card-title">
              Price:${price}
            </p>

            <p className="text-[#FF3811] text-xl">❯</p>
          </div>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
              {" "}
              <button className="btn bg-[#FF3811] border-0 px-5">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;