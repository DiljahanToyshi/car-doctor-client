import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner4 from '../../../assets/images/banner/4.jpg';
const Banner = () => {
    return (
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full rounded-xl ">
          <img src={banner1} className="w-full rounded-xl " />
          <div className="absolute flex justify-end gap-5 bottom-5 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute   flex   gap-5 top-2/4 transform -translate-y-1/2   h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  rounded-xl  ">
            <div className="space-y-7 w-1/2 pl-12 pt-32">
              <h2 className="text-white text-6xl font-semibold ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-gray-300">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline btn-error">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full  rounded-xl ">
          <img src={banner2} className="w-full rounded-xl " />
          <div className="absolute flex justify-end gap-5 bottom-5 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute   flex   gap-5 top-2/4 transform -translate-y-1/2   h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  rounded-xl  ">
            <div className="space-y-7 w-1/2 pl-12 pt-32">
              <h2 className="text-white text-6xl font-semibold ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-gray-300">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline btn-error">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <div className="absolute flex justify-end gap-5 bottom-5 transform -translate-y-1/2 left-5 right-5  rounded-xl   ">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute   flex   gap-5 top-2/4 transform -translate-y-1/2   h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  rounded-xl  ">
            <div className="space-y-7 w-1/2 pl-12 pt-32">
              <h2 className="text-white text-6xl font-semibold ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-gray-300">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline btn-error">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <div className="absolute flex justify-end gap-5 bottom-5 transform -translate-y-1/2 left-5 right-5  rounded-xl  ">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute   flex   gap-5 top-2/4 transform -translate-y-1/2   h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  rounded-xl  ">
            <div className="space-y-7 w-1/2 pl-12 pt-32">
              <h2 className="text-white text-6xl font-semibold ">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-gray-300">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline btn-error">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;