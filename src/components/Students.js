import React from 'react';

export class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: props,
            students: props.students,
            posts: props.posts.slice(0, 10),
            choosenBtn: 'ranks',
            showTable: 'ranks'
        }
    }

    render() {
        const defaultButton = {
            // background: "#fff",
            color: "#4c99d8"
        }

        const chosenButton = {
            background: "#4c99d8",
            color: "#fff"
        }

        const changeTable = (newInfo) => {
            this.setState({
                choosenBtn: newInfo,
                showTable: newInfo
            })
        }



        return <div className="students">
            <div className="students-buttons">
                <button className="students-button" style={this.state.choosenBtn === 'ranks' ? chosenButton : defaultButton} onClick={() => changeTable('ranks')}>რეიტინგი</button>
                <button className="students-button" style={this.state.choosenBtn === 'posts' ? chosenButton : defaultButton} onClick={() => changeTable('posts')}>პოსტები</button>
            </div>
            {
                this.state.showTable === 'ranks'
                ?
                <div>
                    <h1 style={{margin: "10px 0 30px 0"}}>მაღალ რეიტინგული სტუდენტები</h1>
                    <div className="box">
                        <div className="info">
                            <h3 className="table-header">name</h3>
                            <h3 className="table-header">email</h3>
                            <h3 className="table-header">city</h3>
                            <h3 className="table-header">street</h3>
                        </div>
                        {
                            this.state.students ? this.state.students.map((student, index) => (
                                <div className="student" key={index}>
                                    <p className="table-body">{student.name}</p>
                                    <p className="table-body">{student.email}</p>
                                    <p className="table-body">{student.address.city}</p>
                                    <p className="table-body">{student.address.street}</p>

                                </div>
                            )) : ""
                        }
                    </div>
                </div>
                :
                <div>
                    <h1 style={{margin: "10px 0 30px 0"}}>სტუდენტების პოსტები</h1>
                    <div className="posts-container">
                        <div className="posts">
                            {
                                this.state.posts ? this.state.posts.map((post, index) => (
                                    <div className="post" key={index}>
                                        <h2 className="post-title">{post.title}</h2>
                                        <p className="post-body">{post.body}</p>
                                    </div>
                                )) : ""
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    }
}