import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Indicators from './indicators';

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
`;

const SalesCard = ({ salesOverview }) => (
  <CardContainer>
    <Title>Sales</Title>
    <p>You had {salesOverview.uploads} uploads and {salesOverview.linesSaved} lines added.</p>
    <Indicators salesOverview={salesOverview} />
  </CardContainer>
);

SalesCard.propTypes = {
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
    lastUploadDate: PropTypes.number.isRequired
  }).isRequired
};

export default SalesCard;
