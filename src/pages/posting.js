import styled from 'styled-components';
import React from 'react';
import Navigation from '../components/navbar';
import axios from 'axios'
const Box = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;
    margin: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 10px;
    width: 80%;
`;

const Textbox = styled.textarea`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 4px;
    margin: 3px 0;
    font-size: 14px;
    width: 100%;
    height: 160px;
`;

const Submit = styled.input`
    border: 1px solid #ddd;
    border-radius: 4px;
`;

class Posting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            content: []
        };
    }

    handleRegister = async (formData) => {
        alert(formData.book_title)
        return await axios.post('http://localhost:3002/library/posting', formData);
    }


    handleSubmit = (e) => {
        alert('제출 핸들러 실행됨')
        this.handleRegister({
            book_title: e.target.book.value,
            content: e.target.post.value
        });
    }

    componentDidMount() {
        fetch('http://localhost:3002/library/booklist')
            .then(res => res.json())
            .then(
                (data) => {this.setState({
                    isLoaded: true,
                    content: data.booklist
                });
            },
            (error) => {this.setState({
                isloaded: true,
                error
            });
        })
    }

    render() {
        const { content } = this.state;
        return (
        <div>
            <Navigation/>
            <form onSubmit={this.handleSubmit}>
                <Box>
                    <h1>글쓰기</h1>
                    <hr/>
                    <select name='book'>
                        <option value='' selected>책 선택</option>
                        {content.map(book => (
                            <option value={book.title}>{book.title}</option>
                        ))}
                    </select>
                    <Textbox name="post" rows="5" cols="25"/>
                    <Submit type='submit'/>
                </Box>
            </form>
        </div>
        )
    }
}

export default Posting;