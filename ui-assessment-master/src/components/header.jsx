import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const ContactInfo = styled.div`
  text-align: right;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Account Overview</Title>
    <ContactInfo>
      <div>Your Feefo Support Contact</div>
      <div>Support</div>
      <div>support@feefo.com</div>
      <div>020 3362 4208</div>
    </ContactInfo>
  </HeaderContainer>
);

export default Header;
