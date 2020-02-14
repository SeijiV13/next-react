import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as blogActions from '../store/blog/actions';
import BlogItem from '../components/BlogItem';
import Router from 'next/router'
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import {actions as toastrActions} from 'react-redux-toastr'
const button = {
    marginRight: "0px",
}
class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            blogs: Object.assign({}, this.props.blogs)
        }
        this.selectBlog = this.selectBlog.bind(this);
    }
    render() {
        const { blogs } = this.props;

        return (
                 <Layout>
                    <div>
                      {blogs.map(blog =>{
                          return (
                          <BlogItem key={blog.id} blog={blog} onClick={(data) => this.selectBlog(data)}></BlogItem>
                          )
                      })}
                    </div>
        
                    <Button style={button}  onClick={(data) => this.selectBlog({blog: null, action: 'create'})}>Create Blog</Button>

                 </Layout>
             
        )
    }
    componentDidMount() {
        this.props.actions.getAllBlogs();
        // this.setState({blogs})
    }


    selectBlog(data) {
        if(data.action === "delete") {
            this.props.actions.deleteBlog(data.blog.id).then(() => {
                this.props.actions.getAllBlogs();
                this.props.toastr.add({   
                    position: 'top-right',
                    type: 'success', 
                    title: `Delete Successful`, 
                    message: `successfully deleted ${data.blog.title}`})
            });
            
            return;
        }
        this.props.actions.setSelectedBlog(data.blog);
        this.props.actions.setFormState(data.action);
        Router.push('/blogpage')
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      blogs: state.blogs.allBlogs
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(Object.assign({}, blogActions), dispatch),
        toastr: bindActionCreators(Object.assign({}, toastrActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);