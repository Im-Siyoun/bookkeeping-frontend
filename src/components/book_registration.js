import React from 'react';
import styled from 'styled-components';

const Box = styled.fieldset`
    justify-content: center;
    text-align: center;
`;
class BookRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        }
    }

    //등록 핸들러입니다.
    handleRegister = (data) => {
        fetch('http://localhost:3002/library/book', {
            method: 'post',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify(data)
        })
    }

    //제출 핸들러입니다.
    handleSubmit = (e) => {
        this.handleRegister({
            title: e.target.title.value,
            writer: e.target.writer.value,
            publisher_name: e.target.publisher_name.value
        });
    }

    render() {
        return (
            <div className="book">
            <form onSubmit={this.handleSubmit}>
                <Box>
                    <legend>책 등록하기</legend>
                    책 이름을 입력하세요 : <br/><input type="text" name="title" size="30" value="" border='1' font-size= '9pt'/><br/>
                    작가 이름도 입력하세요 : <br/><input type="text" name="writer" size="30" value="" border='1' font-size= '9pt'/><br/>
                    출판사 이름도 입력하세요 : <br/><input type="text" name="publisher_name" size="30" value="" border='1' font-size= '9pt'/><br/>
                    <input type="submit" value="전송"/>
                </Box>
            </form>
            </div>
    )}
}

export default BookRegistration;