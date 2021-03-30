import React from 'react';
import { connect } from 'react-redux';

const Page2 = (props) => {
    return <React.Fragment> <h1>Page 2</h1>
        <h3>Welcome {props.user_name}</h3>
    </React.Fragment>
}

const _state = (state) => ({
    user_name: state.user_name
});

export default connect(_state, {})(Page2);
