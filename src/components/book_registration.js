import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Box = styled.fieldset`
    justify-content: center;
    text-align: center;
`;
const Inputbox = styled.input`
    justify-content: center;
    text-align: center;
`;
class BookRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            content: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3002/library/publisherlist')
            .then(res => res.json())
            .then(
                (data) => {this.setState({
                    isLoaded: true,
                    content: data.publisherlist
                });
            },
            (error) => {this.setState({
                isloaded: true,
                error
            });
        })
    }

    //등록 핸들러입니다.
    handleRegister = async (formData) => {
        alert('등록 핸들러 실행됨')
        return await axios.post('http://localhost:3002/library/book', formData);
    }

    //제출 핸들러입니다.
    handleSubmit = (e) => {
        alert('제출 핸들러 실행됨')
        this.handleRegister({
            title: e.target.title.value,
            writer: e.target.writer.value,
            publisher_name: e.target.publisher_name.value,
        });
    }

    render() {
        const { content } = this.state;
        return (
            <div className="book">
            <form onSubmit={this.handleSubmit}>
                <Box>
                    <legend>책 등록하기</legend>
                    책 이름을 입력하세요 : <br/><Inputbox type="text" name="title"/><br/>
                    작가 이름도 입력하세요 : <br/><Inputbox type="text" name="writer"/><br/>
                    출판사를 선택해주세요 : <br/><select name='publisher_name'>
                        <option value='' selected>출판사 선택</option>
                        {content.map(publisher => (
                            <option value={publisher.name}>{publisher.name}</option>
                        ))}
                    </select><br/>
                    <input type="submit" value="전송"/> 
                </Box>
            </form>
            </div>
    )}
}

export default BookRegistration;