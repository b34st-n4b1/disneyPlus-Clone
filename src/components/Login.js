import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <div>
      <Container>
        <CTA>
          <CTALogo src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Container>
    </div>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  /* align-items: center; */
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogo = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  padding: 17px 0;
  text-align: center;
  font-size: 18px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 250ms;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #04b3ee;
  }
`;

const Description = styled.p`
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
