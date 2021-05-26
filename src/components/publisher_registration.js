import React from 'react';

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
            <div className="book">
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>출판사 등록하기</legend>
                    출판사 이름을 입력하세요 : <br/><input type="text" name="name"/>
                    <input type="submit" value="전송"/>
                </fieldset>
            </form>
            </div>
    )}
}

export default PublisherRegistration;