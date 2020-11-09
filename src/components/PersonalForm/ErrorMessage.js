import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
    color: #d3170d;
    font-size: 12px;
    margin: 3px 0 10px;
`;

const ErrorMessage = () => {
    return <StyledError>This field is required</StyledError>;
};

export default ErrorMessage;
