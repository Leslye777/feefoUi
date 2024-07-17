import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Indicators from './indicators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';


const CardContainer = styled.div`
  background-color: #fff;
  border: 1px #ddd;
  border-radius: 10px;
  text-align: center;

`;
const Content = styled.div`
    padding:10px 20px;
      text-align: left;

`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
`;

const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SalesCard = ({ salesOverview }) => (
  <CardContainer>
    <Content>
        <InfoContent>
            <Title> <FontAwesomeIcon icon={faUpload} color='#159dcf'/> &nbsp; Sales</Title>
            <FontAwesomeIcon icon={faInfoCircle} color='#ddd'/>
        </InfoContent>
        <p>You had <strong>{salesOverview.uploads} uploads</strong> and <strong>{salesOverview.linesSaved}</strong> lines added.</p>

    </Content>

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
