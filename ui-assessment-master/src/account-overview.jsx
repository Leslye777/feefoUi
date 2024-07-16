import React from 'react';
import styled from 'styled-components';
import Header from './components/header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';

import './account-overview.css';

const AccountOverviewContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 20px;
`;

export const AccountOverview = ({data}) => {
  console.log(data);
  return (
    <div className="AccountOverview">
      <FontAwesomeIcon icon={faHardHat} />
      
      <AccountOverviewContainer>
        <Header supportContact={data.supportContact} />
      </AccountOverviewContainer>
      Build your components here
    </div>
  )
}

export default AccountOverview;