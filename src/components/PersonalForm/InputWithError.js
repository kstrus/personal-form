import React from 'react';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';

const inputStyles = withError => `
    width: 100%;
    padding: 10px;
    border: 1px solid ${withError ? '#d3170d' : '#ccc'};
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    ${!withError && 'margin-bottom: 10px;'}
`;

const StyledInput = styled.input`
    ${props => inputStyles(props.withError)}
`;

const StyledTextarea = styled.textarea`
    ${props => inputStyles(props.withError)}
`;

const InputWithError = props => {
    const { isTextarea, shouldShowErrors, value } = props;
    const Component = isTextarea ? StyledTextarea : StyledInput;
    const withError = shouldShowErrors && !value;

    return (
        <React.Fragment>
            <Component {...props} withError={withError} />
            {withError && <ErrorMessage />}
        </React.Fragment>
    );
};

export default InputWithError;
