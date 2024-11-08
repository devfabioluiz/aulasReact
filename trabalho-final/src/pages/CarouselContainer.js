import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//exemplo da lib react-responsive-carousel em
// nao esqueca de instalar a lib: https://www.npmjs.com/package/react-responsive-carousel

const CarouselContainer = () => {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <h1>Hello</h1>
          <img src="https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

export default CarouselContainer;
