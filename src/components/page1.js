import React from 'react';
import { connect } from 'react-redux';

import {
    updateUserName
} from '../action';

const Page1 = (props) => {
    return <React.Fragment> <h1>Page 1</h1>
        <label>Enter user name</label>
        <input
            defaultValue={props.user_name}
            onChange={(e) => props.updateUserName(e.target.value)} />
    </React.Fragment>
}

const _state = (state) => {
    return ({
        user_name: state.user_name
    })
};

const mapDispatchToProps = {
    updateUserName
}

export default connect(_state, mapDispatchToProps)(Page1);
