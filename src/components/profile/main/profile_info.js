import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class ProfileInfo extends Component {
    render() {
        let user = this.props.user;

        return (
            <div className='profile-wrapper grey-shadow-bottom mt-4'>

                <div className='d-flex flex-column justify-content-center align-items-center flex-wrap mt-3'>
                    <h5 className='text-center'><strong>{user.firstName + ' ' + user.lastName}</strong></h5>
                    <img className='profile-img border' src={user.profileImg} />
                    <div className='align-self-center' style={{ width: '200px' }}>
                        <div className='text-center'>
                            <NavLink to={'/live-profile/activity/' + user.userId}>Live &#128065;</NavLink>
                            <NavLink className='ml-3' to='/profile/update-profile' activeClassName='active'>Edit &#9998;</NavLink>
                        </div>
                    </div>
                </div>

                {
                    user.goal ?
                        <div className='mt-3 p-3 d-flex justify-content-center'>
                            <span style={{ color: 'grey' }}>{user.goal}</span>
                        </div>
                        :
                        false
                }

                <div className='mt-3 p-3 d-flex justify-content-between flex-wrap'>
                    <small className='text-muted'>Born <strong>{user.birthDate}</strong></small>
                    <small className='text-muted'>Joined <strong>{user.dateJoined}</strong></small>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;