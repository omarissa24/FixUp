import { InputField, TextAreaField, SelectField } from 'react-semantic-redux-form';

const issueTypes = [
    { key: 'select', value: '', text: 'Choose Issue Type' },
    { key: 'Request', value: 'Request', text: 'Request' },
    { key: 'Bug', value: 'Bug', text: 'Bug' },
    { key: 'Issue', value: 'Issue', text: 'Issue'}
]

const issuePriority = [
    { key: 'select', value: '', text: 'Choose Issue Severity' },
    { key: 'LOW', value: 'LOW', text: 'LOW' },
    { key: 'MINOR', value: 'MINOR', text: 'MINOR' },
    { key: 'MAJOR', value: 'MAJOR', text: 'MAJOR' },
    { key: 'CRITICAL', value: 'CRITICAL', text: 'CRITICAL' },
    { key: 'BLOCKER', value: 'BLOCKER', text: 'BLOCKER' }
]

const issueStatus = [
    { key: 'select', value: '', text: 'Choose Issue Status' },
    { key: 'Open', value: 'Open', text: 'Open' },
    { key: 'Work in progress', value: 'Work in progress', text: 'Work in progess' },
    { key: 'Closed', value: 'Closed', text: 'Closed'}
]

export const projectFields = [
    { name: 'title', label: 'Title', placeholder: 'Enter Project Title', type: 'text', component: InputField, key: '1', value: 'Test' },
    { name: 'type', label: 'Type', placeholder: 'Enter Project Type', type: 'text', component: InputField, key: '2', value: 'Test'  },
    { name: 'description', label: 'Description', placeholder: 'Enter Project Description', type: 'text', component: TextAreaField, key: '4', value: 'Test'  }
]

export const createUserFields = [
    { name: 'username', placeholder: 'Enter Username', label: 'Username', type: 'text', component: InputField, key: '5' },
    { name: 'firstName', placeholder: 'Enter First Name', label: 'First Name', type: 'text', component: InputField, key: '6' },
    { name: 'lastName', placeholder: 'Enter Last Name', label: 'Last Name', type: 'text', component: InputField, key: '7' },
    { name: 'password', placeholder: 'Enter Password', label: 'Password', type: 'password', component: InputField, key: '8' },
    { name: 'confirmPass', placeholder: 'Confirm Password', label: 'Confirm Password', type: 'password', component: InputField, key: '9' }
]

export const issueFields = [
    { name: 'summary', placeholder: 'Enter Issue Summary', label: 'Issue Summary', type: 'text', component: InputField, key: '10' },
    { name: 'description', placeholder: 'Enter Issue Description', label: 'Issue Description', type: 'text', component: TextAreaField, key: '11' },
    { name: 'issueType', placeholder: 'Enter Issue Type', label: 'Issue Type', type: 'text', options: issueTypes, component: SelectField, key: '12' },
    { name: 'issueStatus', placeholder: 'Enter Issue Status', label: 'Issue Status', type: 'text', options: issueStatus, component: SelectField, key: '13'},
    { name: 'priority', placeholder: 'Enter Issue Priority', label: 'Issue Priority', type: 'text', options: issuePriority, component: SelectField, key: '14' },
    { name: 'assignee', placeholder: 'Select Assignee', label: 'Assignee', type: 'text', options: 'assignee', component: SelectField, key: '15' }
]