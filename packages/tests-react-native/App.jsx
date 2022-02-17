import { TonClient } from "@eversdk/core";
import React, { Component } from 'react';
import {
    View,
    Text, Button,
} from 'react-native';
import { TestsRunner } from "@eversdk/tests";

class App extends Component {
    async componentDidMount() {
        const client = new TonClient({
            network: {
                server_address: 'net.ton.dev'
            }
        });
        const version = (await client.client.version()).version;
        this.setState({
            version
        });
        TestsRunner.run(
            state => this.setState(state),
            (...args) => console.log(...args),
        ).then(_ => {
        });
    }

    render() {
        const state = this.state || {};
        return (
            <>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}
                >
                    <Text style={{ fontSize: 24 }}>Core
                        Version: {state.version || 'loading...'}</Text>
                    <Text style={{
                        fontSize: 24,
                        color: 'green',
                    }}>Tests Passed: {state.passed || 0}</Text>
                    <Text style={{
                        fontSize: 24,
                        color: 'red',
                    }}>Tests Failed: {state.failed || 0}</Text>
                    <Text
                        style={{ fontSize: 24 }}>{state.finished ? 'Complete' : 'Testing...'}</Text>
                    <Text style={{
                        paddingTop: 24,
                        fontSize: 24
                    }}>Clicks: {state.clicks || 0}</Text>
                    <Button title='Test Click' style={{
                        fontSize: 24
                    }} onPress={() => this.setState({
                        ...state,
                        clicks: (state.clicks || 0) + 1
                    })} />
                </View>
            </>
        );
    }
}

export default App;
