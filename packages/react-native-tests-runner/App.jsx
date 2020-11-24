import {TonClient} from "@ton-client/main";
import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import {TestsRunner} from "@ton-client/main-tests";

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
        return (
            <>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}
                >
                    <Text style={{fontSize: 24}}>Core
                        Version: {this.state && this.state.version || 'loading...'}</Text>
                    <Text style={{
                        fontSize: 24,
                        color: 'green',
                    }}>Tests Passed: {this.state && this.state.passed || 0}</Text>
                    <Text style={{
                        fontSize: 24,
                        color: 'red',
                    }}>Tests Failed: {this.state && this.state.failed || 0}</Text>
                    <Text style={{fontSize: 24}}>{this.state && this.state.finished
                        ? 'Complete'
                        : 'Testing...'}</Text>
                </View>
            </>
        );
    }
}

export default App;
