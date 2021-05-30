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

const Textbox = styled.div`
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

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            content: [],
        };
    }

    componentDidMount() {
        const queryID = this.props.location.search.split('=')[1];
        fetch(`http://localhost:3002/library/postlist?id=${queryID}`)
            .then(res => res.json())
            .then(
                (data) => {this.setState({
                    isLoaded: true,
                    content: data.postlist
                });
            },
            (error) => {this.setState({
                isloaded: true,
                error
            });
        })
    }

    render() {
        const { content, error, isloaded } = this.state;
        if (!content) {
            return (
                <div>
                <Navigation/>
                <Box>
                    <h1>아직 독서록을 안썼나봐요...</h1>
                </Box>
            </div>
            )
        }
        return (
        <div>
            <Navigation/>
            <Box>
                <h3>{content.Book_title}</h3>
                <Textbox>
                    <h2>{content.Content}</h2>
                </Textbox>
            </Box>
        </div>
        )
    }
}

export default Post;