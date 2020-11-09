import React, { useState } from 'react';
import styled from 'styled-components';

import InputWithError from './InputWithError';
import ErrorMessage from './ErrorMessage';
import FormMessage from './FormMessage';
import useInput from '../../utils/useInput';

const StyledContainer = styled.div`
    max-width: 400px;
    margin: 100px auto 50px;
    padding: 40px 20px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

const StyledTitle = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
`;

const StyledFormSection = styled.div`
    margin-top: 20px;
`;

const StyledButton = styled.button`
    display: block;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: #00b894;
    padding: 10px 0;
    margin-top: 40px;
    color: #fff;
    width: 100%;
    cursor: pointer;
`;

const PersonalForm = () => {
    const [ firstName, setFirstName ] = useInput('');
    const [ lastName, setLastName ] = useInput('');
    const [ email, setEmail ] = useInput('');
    const [ bio, setBio ] = useInput('');
    const [ gender, setGender ] = useInput('');
    const [ termsAccepted, setTermsAccepted ] = useInput(false);
    const [ formStatus, setFormStatus ] = useState('notSend');

    const isFormValid = () => firstName && lastName && email && bio && gender && termsAccepted;

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setBio('');
        setGender('');
        setTermsAccepted(false);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (isFormValid()) {
            setFormStatus('send');
            clearForm();
        } else {
            setFormStatus('inProgress');
        }
    };

    const shouldShowErrors = (formStatus === 'inProgress');

    return (
        <StyledContainer>
            <StyledTitle>Please enter your personal details</StyledTitle>

            {formStatus === 'send' && <FormMessage message="Thank you for sending the form" />}

            <form onSubmit={handleSubmit}>
                <InputWithError type="text" name="firstName" placeholder="First name" value={firstName} shouldShowErrors={shouldShowErrors} onChange={setFirstName} />
                <InputWithError type="text" name="lastName" placeholder="Last name" value={lastName} shouldShowErrors={shouldShowErrors} onChange={setLastName} />
                <InputWithError type="email" name="email" placeholder="Email address" value={email} shouldShowErrors={shouldShowErrors} onChange={setEmail} />
                <InputWithError isTextarea={true} rows="8" name="bio" placeholder="Short bio" value={bio} shouldShowErrors={shouldShowErrors} onChange={setBio} />

                <StyledFormSection>
                    <div>Gender</div>
                    <div>
                        <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={setGender} />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={setGender} />
                        <label htmlFor="male">Male</label>
                    </div>
                    {shouldShowErrors && !gender && <ErrorMessage />}
                </StyledFormSection>

                <StyledFormSection>
                    <input type="checkbox" id="terms" name="terms" checked={termsAccepted} onChange={setTermsAccepted} />
                    <label htmlFor="terms">I accept Terms & Conditions</label>
                    {shouldShowErrors && !termsAccepted && <ErrorMessage />}
                </StyledFormSection>

                <StyledButton type="submit">Send</StyledButton>
            </form>
        </StyledContainer>
    );
};

export default PersonalForm;
