import React from 'react';
import styled from 'styled-components';

const Box = styled.fieldset`
    justify-content: center;
    text-align: center;
`;
const Inputbox = styled.input`
    justify-content: center;
    text-align: center;
`;

class PublisherRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        }
    }

    handleRegister = (data) => {
        fetch('http://localhost:3002/library/publisher', {
            method: 'post',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify(data)
        })
    }    

    handleSubmit = (e) => {
        this.handleRegister({
            name: e.target.name.value
        });
    }

    render() {
        return (
            <div className="publisher">
            <form onSubmit={this.handleSubmit}>
                <Box>
                    <legend>출판사 등록하기</legend>
                    출판사 이름을 입력하세요 : <br/><Inputbox type="text" name="name"/><br/>
                    <input type="submit" value="전송"/>
                </Box>
            </form>
            </div>
    )}
}

export default PublisherRegistration;