import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import {startTests} from '@ton-client/main-tests';
import {TestsRunningState} from '@ton-client/main-tests';

class App extends Component<{}, TestsRunningState> {
    async componentDidMount() {
        await startTests((state) => this.setState(state));
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
                        Version: {this.state.version || 'loading...'}</Text>
                    <Text style={{
                        fontSize: 24,
                        color: 'green',
                    }}>Tests Passed: {this.state.passed || 0}</Text>
                    <Text style={{
                        fontSize: 24,
                        color: 'red',
                    }}>Tests Failed: {this.state.failed || 0}</Text>
                    <Text style={{fontSize: 24}}>{this.state.finished
                        ? 'Complete'
                        : 'Testing...'}</Text>
                </View>
            </>
        );
    }
}

export default App;
