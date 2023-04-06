import {TestsRunner} from "./runner";

export class TestsLogger {

    success = 0;
    failure = 0;

    private logText = '';

    static extractReport(expect: string, line: any) {
        const pos = line.toString().indexOf(expect);
        if (pos < 0) {
            return null;
        }
        return JSON.parse(line.substr(pos + expect.length));
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

    extractTestsReportFromLogLine(line: any) {
        const startLog = TestsLogger.extractReport('[TEST_START]', line);
        if (startLog) {
            return;
        }
        const successLog = TestsLogger.extractReport('[TEST_SUCCESS]', line);
        if (successLog) {
            this.success += 1;
            TestsRunner.log(`✓ ${successLog.name} (${this.success} / ${this.failure})`);
            return;
        }
        const failureLog = TestsLogger.extractReport('[TEST_FAILURE]', line);
        if (failureLog) {
            this.failure += 1;
            TestsRunner.log(`\x1b[0;31m𐄂 ${failureLog.name} (${this.success} / ${this.failure}) - ${JSON.stringify(
                failureLog.errors,
                undefined,
                '    ',
            )}\x1b[m`);
            return;
        }
        const completeLog = TestsLogger.extractReport('[TEST_COMPLETE]', line);
        if (completeLog) {
            TestsRunner.log(`---`);
            TestsRunner.log(`success: ${this.success}`);
            TestsRunner.log(`failure: ${this.failure}`);
            TestsRunner.log(`finished in ${process.uptime().toFixed(2)}s`);
            TestsRunner.exit(this.failure > 0 ? 1 : 0);
        }
    }
}
