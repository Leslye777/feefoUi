import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: #6B6B6B;

`;

const SupportBoard = styled.div`
  display: flex;
  
`;

const ContactInfo = styled.div`
  font-weight: bold;
  color: grey;
  width:60%;
  text-align: initial;
  padding: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #ffd700;
  color: #000;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const Header = ({ supportContact }) => (
  <HeaderContainer>
    <Title>Account Overview</Title>
    <ContactInfo>
      <div>YOUR FEEFO SUPPORT CONTACT</div>
      <SupportBoard>
        <IconContainer>S</IconContainer>
        <div>
          <strong>Support</strong>
          <div>             <FontAwesomeIcon icon={faEnvelope} color='grey'/>
 {supportContact.email} &nbsp;&nbsp;&nbsp; 020 3362 4208</div>
        </div>
      </SupportBoard>
      
    </ContactInfo>
  </HeaderContainer>
);

Header.propTypes = {
  supportContact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default Header;
