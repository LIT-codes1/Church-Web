import { Link } from "react-router-dom";
const Home = () => {

    return ( 
        <div className="Home">
          <h1 className="homeDesign">CHURCH</h1>
          <h1 className="ofLove">OF LOVE</h1>
          <h1 className="andCharity">AND CHARITY</h1>
        <p>For you granted him authority over all people that he might give <br />
         eternal life to all those of you have given him .Now this is external <br />
         life: that they know you,the only true God,and Jesus Christ</p>
         <div className="link">
            <Link  to="/createAcc" className='linkA'> SIGN UP</Link>
            <Link to="/signUp" className='linkB'>LOGIN</Link>
         </div>
        </div>
     );
}
 
export default Home;