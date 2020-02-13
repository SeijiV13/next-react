import axios from 'axios';
import { HTTP_ENDPOINT } from '../../config';

export const blogActionTypes = {
    GET_ALL_BLOGS: 'GET_ALL_BLOGS',
    SET_FORM_STATE: 'SET_FORM_STATE',
    SET_SELECTED_BLOG: 'SET_SELECTED_BLOG'
}

export const getAllBlogs = () => {
    return dispatch => {return axios.get(`${HTTP_ENDPOINT}blogs`)
    .then(({data}) => data)
    .then(blogs => dispatch({type: blogActionTypes.GET_ALL_BLOGS, data: blogs}))
   }
}

export const saveBlog = (blog) => {
    return dispatch => { return axios.put(`${HTTP_ENDPOINT}blogs/${blog.id}`, blog)
    .then(({data}) => getAllBlogs())
    }
}

export const setSelectedBlog = (blog) => {
    return dispatch => dispatch({type: blogActionTypes.SET_SELECTED_BLOG, data: blog})
}

export const createBlog = (blog) => {
    return dispatch => { return axios.post(`${HTTP_ENDPOINT}blogs`, blog)
    .then(({data}) => getAllBlogs())
   }
}

export const deleteBlog = (id) => {
    return dispatch => { return axios.delete(`${HTTP_ENDPOINT}blogs/${id}`)
    .then(({data}) => getAllBlogs())
   } 
}

export const setFormState = (state) => {
    return dispatch => dispatch({type: blogActionTypes.SET_FORM_STATE, data: state})
}