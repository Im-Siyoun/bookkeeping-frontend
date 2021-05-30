import React from 'react';
import styled from 'styled-components';

const Books = styled.div`
    font-size: 20px;
    text-align: center;
    align-content: center;
    margin-left: 50%;
`;

const Cards = styled.div`
    transform: translateX(-50%);
    background-color: #ffffff;
    margin: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 10px;
    width: 80%;
    margin-bottom: 20px;
    margin-top: 20px;
`;

class Booklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            content: []
        };
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
        const { error, isLoaded, content } = this.state;
        console.log(this.state)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="listcontent" class="center">
                    <Books>
                        {content.map(book => (
                            <Cards>
                                <a href={ `http://localhost:3000/post?id=${book.title}` }>
                                    {book.title}
                                </a>
                            </Cards>
                        ))}
                    </Books>
                </div>
        )}
    }
}

export default Booklist;