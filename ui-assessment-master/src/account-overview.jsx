import React from 'react';
import styled from 'styled-components';
import Header from './components/header';
import SalesCard from './components/sales-card';
import PropTypes from 'prop-types';

const AccountOverviewContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
`;

const AccountOverview = ({ data }) => (
  <AccountOverviewContainer>
    <Header supportContact={data.supportContact} />
    <SalesCard salesOverview={data.salesOverview} />
  </AccountOverviewContainer>
);

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired,
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      lastUploadDate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default AccountOverview;
