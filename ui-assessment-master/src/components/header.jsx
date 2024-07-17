import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const ContactInfo = styled.div`
  text-align: right;
  font-weight: bold;
  color: grey;
`;

const Header = ({ supportContact }) => (
  <HeaderContainer>
    <Title>Account Overview</Title>
    <ContactInfo>
      <div>YOUR FEEFO SUPPORT CONTACT</div>
      <div>{supportContact.name}</div>
      <div>{supportContact.email}</div>
      <div>020 3362 4208</div>
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
