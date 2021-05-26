import BookRegistration from '../components/book_registration';
import PublisherRegistration from '../components/publisher_registration';
import styled from 'styled-components';
import React from 'react';
import Navigation from '../components/navbar';

const Inputbox = styled.div`
    display: flex;
    justify-content: center;
`;

class Register extends React.Component {
    render() {
        return (
            <div className="register">
                <Navigation />
                <Inputbox className="registration">
                    <BookRegistration />
                    <PublisherRegistration />
                </Inputbox>
            </div>
        );
    }
}

export default Register;