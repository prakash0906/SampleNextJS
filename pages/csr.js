import React from 'react';
import Header from '../components/Header';
import store from '../src/store';
import withRedux from 'next-redux-wrapper';

class CSR extends React.Component {
    state = {
        comp: null
    };
    static async getInitialProps({store}) {
        console.log('~~~~store~~~~', store);
        store.dispatch()
    }
    componentDidMount() {
        import('../src/components/App').then(comp => comp.default)
            .then(comp => {
                this.setState({
                    comp
                });
            });

    }

    render() {

        return (
            <React.Fragment>
                <Header />
                <h1>CSR Wrapper</h1>
                {
                    this.state.comp ? this.state.comp() : <h1>Unable to do CSR</h1>
                }
            </React.Fragment>
        );
    }
}

const state = (state) => ({
    user_name: state.user_name
});

export default withRedux(store, state, {})(CSR);