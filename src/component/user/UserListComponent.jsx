import React, { Component } from 'react';
import {withParamsAndNavigate} from '../../WithRouter.js';
import ApiService from '../../ApiService.js';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

class UserListComponent extends Component {

    state = {
        users: [],
        message: null
    }
    
    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = () => {
        ApiService.fetchUsers()
            .then( res => {
                this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log('reloadUserList() Error!', err);
        })
    }

    deleteUser = (userID) => {
        ApiService.deleteUser(userID)
            .then( res => {
                this.setState({
                    message: 'User Deleted Successfully.'
                });
                this.setState({
                    useres: this.state.users.filter( user =>
                        user.id !== userID)
                });
                this.reloadUserList();
            })
            .catch(err => {
                console.log('deleteUser() Error!', err);
            })
    }

    editUser = (ID) => {
        window.localStorage.setItem("userID", ID);
        this.props.navigate('/edit-user');
    }

    addUser = () => {
        window.localStorage.removeItem("userID");
        this.props.navigate('/add-user');
    }

    render() {
        const{params,navigate} = this.props;
        return(
            <div>
                <Typography variant="h4" style={style}>User List</Typography>
                <div className="Card1" style={style}>
                    <div className="c1image">
                        <img className="phoneImage" alt="sea" src="img/sea.png" style={{
                        width: sea.imageSize
                       
                        }}/>
                    </div>
                </div>
                <br/>
                <Button variant="contained" color='primary' onClick={this.addUser}> Add User </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">FirstName</TableCell>
                            <TableCell align="right">LastName</TableCell>
                            <TableCell align="right">UserName</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Salary</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map( user =>
                            <TableRow key={user.id}>
                                <TableCell component="th" scope='user'>{user.id}</TableCell>
                                <TableCell align='right'>{user.firstName}</TableCell>
                                <TableCell align='right'>{user.lastName}</TableCell>
                                <TableCell align='right'>{user.username}</TableCell>
                                <TableCell align='right'>{user.age}</TableCell>
                                <TableCell align='right'>{user.salary}</TableCell>
                                <TableCell align='right' onClick={ () => this.editUser(user.id) } >
                                    <CreateIcon/>
                                </TableCell>
                                <TableCell align='right' onClick={ () => this.deleteUser(user.id) } >
                                    <DeleteIcon/>
                                </TableCell>
                            </TableRow>
                            )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
const style = {
    display: 'flex',
    justifyContent: 'center'
}
const sea = {
    imageSize: "100%",
    flexGrow: 1
  };
export default withParamsAndNavigate(UserListComponent);
