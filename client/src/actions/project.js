import axios from 'axios';
import { CREATE_PROJECT, FETCH_PROJECT, DELETE_PROJECT, EDIT_PROJECT,
        FETCH_PROJECT_ISSUES, CREATE_ISSUE, VIEW_ISSUE, FETCH_ISSUE,
        EDIT_ISSUE
} from './types';

export const createProject = values => async dispatch => {
    try {
        const res = await axios.post('api/admin/project', values,
        { headers: { Authorization: localStorage.getItem('token') } });
        console.log(res);
        dispatch({ type: CREATE_PROJECT, payload: res });
    } catch(err){
        console.log(err);
    }
}

export const fetchProject = projectId => async dispatch => {
    try {
        const res = await axios.get(`api/project/${projectId}`,
        { headers: { Authorization: localStorage.getItem('token') } });
        dispatch({ type: FETCH_PROJECT, payload: res });
    } catch(err){
        console.log(err);
    }
}

export const deleteProject = projectId => async dispatch => {
    try {
        console.log(projectId);
        const res = await axios.delete(`api/admin/project/${projectId}`,
        { headers: { Authorization: localStorage.getItem('token') } });
        console.log(res);
        dispatch({ type: DELETE_PROJECT, payload: res });
    } catch(err){
        console.log(err);
    }
}

export const editProject = project => async dispatch => {
    try {
        const res = await axios.put(`api/admin/project/${project._id}`, project,
        { headers: { Authorization: localStorage.getItem('token') } });
        dispatch({ type: EDIT_PROJECT, payload: res });
    } catch(err){
        console.log(err);
    }   
}

export const fetchIssues = projectId => async dispatch => {
    try {
        const res = await axios.get(`/api/issue/getIssues/${projectId}`,
        { headers: { Authorization: localStorage.getItem('token') } });
        dispatch({ type: FETCH_PROJECT_ISSUES, payload: res });
    } catch(err){
        console.log(err);
    }
}

export const fetchIssue = issueId => async dispatch => {
    try {
        const res = await axios.get(`/api/issue/getIssue/${issueId}`,
        { headers: { Authorization: localStorage.getItem('token') } });
        console.log(res);
        dispatch({ type: FETCH_ISSUE, payload: res });
    } catch(err){
        console.log(err);
    }
}

export const createIssue = (values, projectId) => async dispatch => {
    try {
        const res = await axios.post(`/api/issue/createIssue/${projectId}`, values,
        { headers: { Authorization: localStorage.getItem('token') } });
        dispatch({ type: CREATE_ISSUE, payload: res });
    } catch(err){
        console.log(err);
    }
}

export const editIssue = issue => async dispatch => {
    try {
        const res = await axios.put(`/api/issue/editIssue/${issue._id}`, issue,
        { headers: { Authorization: localStorage.getItem('token') } });
        dispatch({ type: EDIT_ISSUE, payload: res });
    } catch(err){
        console.log(err);
    }   
}

export const viewIssue = projectId => dispatch => {
    dispatch({ type: VIEW_ISSUE, payload: projectId });
}