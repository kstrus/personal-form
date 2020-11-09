import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.div`
    width: 100%;
    padding: 15px;
    border: 1px solid #00b894;
    border-radius: 4px;
    color: #00b894;
    margin-bottom: 30px;
`;

const FormMessage = ({ message }) => {
    return <StyledMessage>{message}</StyledMessage>
};

export default FormMessage;
