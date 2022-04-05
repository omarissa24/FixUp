import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Header, Button, Table, Card, Confirm } from 'semantic-ui-react';
import SidebarMenu from '../Menu';
import * as dashboardActions from '../../../actions/dashboard';
import * as projectActions from '../../../actions/project';
import ProjectModal from '../modals/ProjectModal';
import { Link } from 'react-router-dom';

class Projects extends Component {
    state = { open: false, currentProject: {} };

    componentWillMount() {
        this.props.dashboardActions.fetchProjects();
        this.props.dashboardActions.fetchUser();
    }

    conditionallyRender(element) {
        if (this.props.user) {
            return (
                <div style={{ display: this.props.user.isAdmin ? 'block' : 'none' }}>
                    {element}
                </div>
            )
        }
    }

    showConfirm = (projectId) => {
        this.setState({ open: true, currentProject: projectId });
    }
    handleCancel = () => this.setState({ open: false });
    handleConfirm = () => {
        this.props.projectActions.deleteProject(this.state.currentProject);
        this.setState({ open: false });
    }

    renderProjectsTable() {
        if (this.props.projects) {
            return this.props.projects.map((project) => {
                const date = new Date(project.created);
                return (
                    <Table.Row key={project._id}>
                        <Table.Cell>{project.title}</Table.Cell>
                        <Table.Cell>{project.type}</Table.Cell>
                        <Table.Cell>{project.owner}</Table.Cell>
                        <Table.Cell>{date.getMonth() + 1}/{date.getDay()}/{date.getFullYear()}</Table.Cell>
                    </Table.Row>
                )
            })
        }
    }

    renderProjectsCards() {
        if (this.props.projects && this.props.user) {
            return this.props.projects.map(project =>
                    <Card key={project._id}>
                        <Card.Content>
                            <Card.Header>
                                {project.title}
                            </Card.Header>
                            <Card.Meta>
                                {project.type} Project
                            </Card.Meta>
                            <Card.Description>
                                {project.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui three buttons'>
                                <Link to={`singleProject/${project._id}`}>
                                    <Button>View</Button>
                                </Link>
                                {this.conditionallyRender(
                                    <div>
                                        <ProjectModal editMode={true} initialValues={project} form={project._id} />
                                        <Button onClick={() => this.showConfirm(project._id)}>
                                            Delete
                                    </Button>
                                        <Confirm
                                            open={this.state.open}
                                            content={<Header as='h3'>Are you sure you want to delete?</Header>}
                                            cancelButton='Never mind'
                                            confirmButton={<Button style={{ backgroundColor: 'red' }}>Delete!</Button>}
                                            onCancel={this.handleCancel}
                                            onConfirm={this.handleConfirm}
                                        />
                                    </div>
                                )}
                            </div>
                        </Card.Content>
                    </Card>
            )
        }
    }

    render() {
        return (
            <div>
                <SidebarMenu />
                <Grid style={{ marginLeft: '7em', marginTop: '1em' }}>
                    <Grid.Row>
                            <Header as="h1">Projects</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Card.Group>
                            {this.renderProjectsCards()}
                        </Card.Group>
                    </Grid.Row>
                    <Grid.Row>
                            <Table style={{ width: '70%' }}>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Title</Table.HeaderCell>
                                        <Table.HeaderCell>Type</Table.HeaderCell>
                                        <Table.HeaderCell>Owner</Table.HeaderCell>
                                        <Table.HeaderCell>Created on</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {this.renderProjectsTable()}
                                </Table.Body>

                                {this.conditionallyRender(
                                    <Table.Footer>
                                        <Table.Row>
                                            <Table.HeaderCell />
                                            <Table.HeaderCell colSpan='4'>
                                                    <ProjectModal />
                                            </Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Footer>
                                )}
                            </Table>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.dashboard.projects,
        user: state.dashboard.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
        projectActions: bindActionCreators(projectActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);