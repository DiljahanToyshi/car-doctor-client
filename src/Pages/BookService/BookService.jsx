import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provieders/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const BookService = () => {
  const service = useLoaderData();
  const { title,price ,_id,img} = service;
  const {user} = useContext(AuthContext);

  const handleBookService = event =>{
    event.preventDefault();
    const form = event.target;
const name = form.name.value;
const email = user?.email;
const date = form.date.value;
const booking={
  customerName:name,
  email,date,service_id:_id,price:price,service:title,img
}
fetch(`http://localhost:5000/bookings`,{
  method:"POST",
  headers:{
'content-type':'application/json'
  },
  body:JSON.stringify(booking)
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if(data.insertedId){
toast.success("service booked succesfully");
    }
  });

  }
  return (
    <div>
      <p className="font-semibold text-center text-2xl">BOOkSERVICE :{title}</p>
      <form className="bg-gray-100" onSubmit={handleBookService}>
        <div className="grid md:grid-cols-2 gap-6 px-28 pt-28 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              type="text"
              placeholder="name"
              name="name"
              className="input "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input " />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input "
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input type="text" defaultValue={"$" + price} className="input " />
          </div>
        </div>
        <div className="form-control px-28 pt-4">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <input
            type="text"
            placeholder="your message"
            className="input pb-28 h-44 "
          />
        </div>
        <div className="form-control mt-6 md:w-3/4 md:ml-36">
          <button className="bg-[#FF3811]  text-white btn-block p-2  rounded-md  font-semibold">
            Order Confirm
          </button>
          <Toaster />
        </div>
      </form>
    </div>
  );
};

export default BookService;
