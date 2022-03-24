import React from "react";
import "./contact.css";
import { Typography } from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Helmet from "react-helmet";
const Contact = () => {

  return (
    <>
      <Helmet>
           <title> contact</title>
          </Helmet>
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Contact Info</Typography>

        <div>
          <div>
             <img  src="https://images.hive.blog/p/cyxkEVqiiLy5czXQBKG59VCKvfmf4jgpbtDNVxTFHjmuZfF3xZc8Uw3887PQtx8UuSfj5eC7QPdA3ig7uj8FGYzrqNP48Xi4H9h34T2S34bumWyYyawCYKziZ5jaHmxr9vn/?format=match&width=500&mode=fit" alt="playstore" />

            <span>
            403/j West Razabazar indira road dhaka, , 
            <br/>Ground Floor,,Dhaka-1205
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Stay Connected With Us</Typography>
            <a href=""target="blank">
              <FacebookIcon className="facebookSvgIcon" />
            </a>

            <a href="" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="" target="blank">
              <LinkedInIcon className="linkedInSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;