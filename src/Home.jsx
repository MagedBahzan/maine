import React from "react";
import Ads from "./componants/home-componants/Ads";
import BenefitsSection from "./componants/home-componants/BenefitsSection";
import CoursesSection from "./componants/home-componants/CoursesSection";
import FAQsection from "./componants/home-componants/FAQsection";
import HeroSection from "./componants/home-componants/HeroSection";
import PricingSection from "./componants/home-componants/PricingSection";
import TestimonialsSection from "./componants/home-componants/TestimonialsSection";
import VideoContainer from "./componants/home-componants/videoContiner";

function Home() {
      const [theApiData, setTheApiData] = React.useState({}); 
      React.useEffect(
          function loadDoc() {
              const xhttp = new XMLHttpRequest();
              xhttp.onload = function () {
                  setTheApiData(JSON.parse(this.responseText).data);
              };
              xhttp.open("GET", "http://127.0.0.1:8000/api/v1/main/news", true);
              xhttp.send();
          },
          []
      );  
      console.log(theApiData);
  return (
    <div className="home">
{/* <div className="joks--contaner">
              {<pre>{JSON.stringify(theApiData, null, 2)}</pre>}
              <p>{count}</p>
              <button onClick={numCount}>Clic for Counting</button>
          </div> */}
      <HeroSection data={theApiData} />
      <Ads />
      <VideoContainer src="https://b9.icdn.ru/m/maged-bahzan/4/790j20034iyP.jpg" />
      <BenefitsSection />
      <CoursesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQsection />
    </div>
  );
}

export default Home;
