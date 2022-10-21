import React from "react";
import "./carousel.scss";

export const Carousel = () => {
  return (
    <div class="carousel">
      <div class="container">
        <div class="content">
          {/* <div class="carousel-content">
            <h1 class="carousel-heading">Professional Working Environment</h1>
            <h3 class='carousel-des'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              rerum tenetur sapiente minima excepturi nisi similique eos laborum
              perspiciatis natus! 
            </h3>
          </div> */}
          <div class="slideshow">
            
           

            <div class="slideshow-wrapper">
              <div class="slide">
                <img
                  class="slide-img"
                  src="https://mobirise.com/extensions/coworkingamp/coworking_space/assets/images/07.jpg"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  class="slide-img"
                  src="https://mobirise.com/extensions/coworkingamp/coworking_space/assets/images/02.jpg"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  class="slide-img"
                  src="https://mobirise.com/extensions/coworkingamp/coworking_space/assets/images/10.jpg"
                  alt=""
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
