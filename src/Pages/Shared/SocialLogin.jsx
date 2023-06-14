import { useContext } from "react";
import { AuthContext } from "../../Provieders/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
        console.log(result.user)
    })
    .catch(error => console.log(error))
}
    return (
      <div>
        <div className="divider">OR</div>
        <div className="text-center">
          <button onClick={handleGoogleSignIn} className="btn btn-circle bg-[#FF3811] border-0 font-bold ">G</button>
        </div>
      </div>
    );
};

export default SocialLogin;