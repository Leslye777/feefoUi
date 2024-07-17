import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #535454;
`;

const SupportBoard = styled.div`
  display: flex;
  padding-top: 20px  
`;

const ContactInfo = styled.div`
  font-weight: bold;
  color: grey;
  width: 100%;
  text-align: initial;
  padding: 10px;
  
  @media (min-width: 720px) {
    width: 60%;
    text-align: initial;
  }
`;


const IconContainer = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #ffd700;
  color: #000;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const Content = styled.div`
  padding:0px 20px 10px 20px;
  line-height:1.5;
`;

const Content2 = styled.div`
  display:flex;
  line-height: 1;
  flex-wrap: wrap;
`;


const Header = ({ supportContact }) => (
  <HeaderContainer>
    <Title>Account Overview</Title>
    <ContactInfo>
      <div>YOUR FEEFO SUPPORT CONTACT</div>
      <SupportBoard>
        <IconContainer>S</IconContainer>
        <Content>
          <strong>Support</strong>
            <Content2>
              <FontAwesomeIcon icon={faEnvelope} color='grey' />
              &nbsp; {supportContact.email}  &nbsp;
              <div>020 3362 4208</div>
            </Content2>
            
        </Content>
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
