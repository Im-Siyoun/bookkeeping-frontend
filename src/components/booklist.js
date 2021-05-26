import React from 'react';
import styled from 'styled-components';

const Books = styled.div`
    font-size: 2px;
    text-align: center;
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
                            <div key={book._id}>
                                {book.title}
                            </div>
                        ))}
                    </Books>
                </div>
        )}
    }
}

export default Booklist;