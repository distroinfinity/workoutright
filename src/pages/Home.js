import React from "react";
import logo from "../assets/images/fitness.png";
import exercise from "../assets/images/exercise.png";
import meditaion from "../assets/images/meditation.png";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

export const Home = () => {
  // const [yogaRedirect,setYogaRedirect] = useState(false)
  // function onClickYoga(){
  //   setYogaRedirect(true)
  // }

  // if(yogaRedirect){
  //   return(
  //     <Redirect push to='/yoga'/>
  //   )
  // }

  return (
    <div>
      <div className="home">
        <div
          style={{
            fontSize: 45,
            "font-family": "Arial",
            fontWeight: "bold",
            flex: 1.5,
            marginLeft: 100,
            marginTop: 100,
          }}
        >
          <p>
            <h1 style={{margin:0}}>Welcome to WorkoutRight</h1>
            <h4 style={{margin:0}}>ML assisted fitness solution</h4>
          </p>
          <div style={{ display: "flex" }}>
            <Link to="/yoga">
              <Button
                size="large"
                variant="contained"
                color="primary"
                startIcon={<Avatar src={meditaion} />}
              >
                Yoga
              </Button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/counter">
              <Button
                size="large"
                variant="contained"
                color="primary"
                startIcon={<Avatar src={exercise} />}
              >
                Core Training
              </Button>
            </Link>
          </div>
        </div>
        <img
          src={logo}
          alt="Logo"
          style={{ flex: 1, marginRight: 100, marginTop: 50 }}
        ></img>
      </div>
    </div>
  );
};

export default Home;