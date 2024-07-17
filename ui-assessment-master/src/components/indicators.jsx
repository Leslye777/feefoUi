import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Indicator = styled.div`
  text-align: left;
  padding: 20px;
  width:100%;
  height: 100%;
  border-top: 1px solid #ddd;
  &:not(:last-child) {
    border-right: 1px solid #ddd; 
  }
`;

const IndicatorTitle = styled.div`
  font-size: 16px;
  color: #667;
  font-weight: bold;

`;

const IndicatorValue = styled.div`
  
  font-size: 25px;
  font-weight: bold;
  color: #22ab55;
`;

const Indicators = ({ salesOverview }) => {
  const uploadSuccess = salesOverview.uploads > 0 ? (salesOverview.successfulUploads / salesOverview.uploads) * 100 : 0;
  const linesSaved = salesOverview.linesAttempted > 0 ? (salesOverview.linesSaved / salesOverview.linesAttempted) * 100 : 0;

  return (
    <IndicatorContainer>
      <Indicator>
        <IndicatorValue>{uploadSuccess.toFixed(2)}%</IndicatorValue>
        <IndicatorTitle>UPLOAD SUCCESS</IndicatorTitle>
      </Indicator>
      <Indicator>
        <IndicatorValue>{linesSaved.toFixed(2)}%</IndicatorValue>
        <IndicatorTitle>LINES SAVED</IndicatorTitle>
      </Indicator>
    </IndicatorContainer>
  );
};

Indicators.propTypes = {
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired
  }).isRequired
};

export default Indicators;
