import React from "react";
import Icon1 from '../../images/image4.jpg'
import Icon2 from '../../images/image5.jpg'
import Icon3 from '../../images/image6.jpg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>GTAW Tig Welding</ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>SMAW Stick Welding</ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Mig Welding</ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
