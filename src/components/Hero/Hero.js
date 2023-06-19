import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am Ayush Panday, a deep-learner, web-developer and Javascript enthusiast from Rajasthan, India.
        <br />
        I have 9+ months of experience in web-developement.
        </SectionText>
        <Button onClick={props.handleClick}>See below</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;