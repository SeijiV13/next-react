import React from 'react';
import { connect } from 'react-redux'
import TextInput from '../components/TextInput';
import { bindActionCreators } from 'redux';
import * as blogActions from '../store/blog/actions';
import { Button } from 'react-bootstrap';
import  Router  from 'next/router';
class BlogPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedBlog: Object.assign({}, this.props.selectedBlog)
        }
        this.saveBlog = this.saveBlog.bind(this);
        this.updateState = this.updateState.bind(this)
    }

    render() {
        const {form} = this.props;
        let editableForm = false;
        if(form === 'view'){
            editableForm = true;
        }
        return (
            <div className="blogpage-container">

                <TextInput name="title" onChange={this.updateState} 
                value={this.state.selectedBlog.title ? this.state.selectedBlog.title : ""} 
                label="Title"
                disabled={editableForm}
                >
                </TextInput>

                <TextInput name="description" onChange={this.updateState}
                value={this.state.selectedBlog.description ? this.state.selectedBlog.description : ""} 
                label="Description"
                disabled={editableForm}
                >
                </TextInput>
                <br></br>
                {form !== 'view'?<Button onClick={() => this.saveBlog()}>Save Blog</Button> : ''}
            </div>
         
        )
    }

    saveBlog() {
     if(this.props.form == 'create') {
        this.props.action.createBlog(this.state.selectedBlog).then(() => {
            Router.push("/");
        });
     } else if(this.props.form == 'edit') {
        this.props.action.saveBlog(this.state.selectedBlog).then(() => {
            Router.push("/");
        });
     }

    }

    updateState(event) {
        let field = event.target.name;
        let selectedBlog = Object.assign({}, this.state.selectedBlog)
        selectedBlog[field] = event.target.value;
        return this.setState({selectedBlog});
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        selectedBlog: state.blogs.selectedBlog,
        form: state.blogs.form
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        action: bindActionCreators(Object.assign({}, blogActions), dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)