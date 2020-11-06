export class TestsRunner {

    success = 0;
    failure = 0;
    logText = '';

    static extractReport(expect: string, line: any) {
        const pos = line.toString().indexOf(expect);
        if (pos < 0) {
            return null;
        }
        return JSON.parse(line.substr(pos + expect.length));
    }

    extractTestsReportFromLogLine(line: any) {
        const startLog = TestsRunner.extractReport('[TEST_START]', line);
        if (startLog) {
            return;
        }
        const successLog = TestsRunner.extractReport('[TEST_SUCCESS]', line);
        if (successLog) {
            this.success += 1;
            console.log(`✓ ${successLog.name} (${this.success} / ${this.failure})`);
            return;
        }
        const failureLog = TestsRunner.extractReport('[TEST_FAILURE]', line);
        if (failureLog) {
            this.failure += 1;
            console.log(`\x1b[0;31m𐄂 ${failureLog.name} (${this.success} / ${this.failure}) - ${JSON.stringify(
                failureLog.errors,
                undefined,
                '    ',
            )}\x1b[m`);
            return;
        }
        const completeLog = TestsRunner.extractReport('[TEST_COMPLETE]', line);
        if (completeLog) {
            console.log(`---`);
            console.log(`success: ${this.success}`);
            console.log(`failure: ${this.failure}`);
            process.exit(this.failure > 0 ? 1 : 0);
        }
    }


    log(...args: any[]) {
        this.logOutput(`${args.map(x => `${x}`).join(' ')}\n`);
    }

    logOutput(text: string) {
        if (text.indexOf('\n') < 0) {
            this.logText += text;
            return;
        }
        const lines = (this.logText + text).split('\n');
        this.logText = lines[lines.length - 1];
        lines.slice(0, -1).forEach((line) => this.extractTestsReportFromLogLine(line));
    }
}
