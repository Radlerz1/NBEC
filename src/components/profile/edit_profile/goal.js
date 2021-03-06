import React, { Component } from 'react';

class Description extends Component {
    render() {
        let formValues = this.props.formValues;
        let user = this.props.user;

        return <div className='form-group'>
            <label htmlFor='goals'>What do you wish to achieve?</label>
            <textarea
                type='text'
                onChange={(e) => this.props.onChange(e)}
                className='form-control'
                name='goal'
                placeholder={user.goal}
                value={formValues['goal'] || ''}>
            </textarea>
        </div>
    }
}

export default Description;