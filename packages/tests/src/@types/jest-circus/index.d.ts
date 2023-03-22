declare module 'jest-circus' {
    export type DoneFn = (reason?: string | Error) => void;
    export type BlockFn = () => void;
    export type BlockName = string | Function;
    export type BlockMode = void | 'skip' | 'only';
    export type TestMode = BlockMode;
    export type TestName = string;
    export type TestFn = (done?: DoneFn) => null | Promise<any>;
    export type HookFn = (done?: DoneFn) => null | Promise<any>;
    export type AsyncFn = TestFn | HookFn;
    export type SharedHookType = 'afterAll' | 'beforeAll';
    export type HookType = SharedHookType | 'afterEach' | 'beforeEach';
    export type Hook = { fn: HookFn, type: HookType };
    export type TestContext = Object;
    export type Exception = any; // Since in JS anything can be thrown as an error.
    export type FormattedError = string; // String representation of error.

    export type EventHandler = (event: Event, state: State) => void;

    export type Event =
        | {
        mode: BlockMode,
        name: 'start_describe_definition',
        blockName: BlockName,
    }
        | {
        name: 'finish_describe_definition',
    }
        | {
        name: 'add_hook',
        hookType: HookType,
        fn: HookFn,
    }
        | {
        name: 'add_test',
        testName: TestName,
        fn?: TestFn,
        mode?: TestMode,
    }
        | {
        name: 'hook_start',
        hook: Hook,
    }
        | {
        name: 'hook_success',
        hook: Hook,
    }
        | {
        name: 'hook_failure',
        error: string | Exception,
        hook: Hook,
    }
        | {
        name: 'test_start',
        test: TestEntry,
    }
        | {
        name: 'test_success',
        test: TestEntry,
    }
        | {
        name: 'test_failure',
        error: Exception,
        test: TestEntry,
    }
        | {
        name: 'test_skip',
        test: TestEntry,
    }
        | {
        name: 'run_describe_start',
        describeBlock: DescribeBlock,
    }
        | {
        name: 'run_describe_finish',
        describeBlock: DescribeBlock,
    }
        | {
        name: 'run_start',
    }
        | {
        name: 'run_finish',
    };

    export type TestStatus = 'pass' | 'fail' | 'skip';
    export type TestResult = {
        duration: null | number,
        errors: Array<FormattedError>,
        status: TestStatus,
        testPath: Array<BlockName | TestName>,
    };

    export type TestResults = Array<TestResult>;

    export type State = {
        currentDescribeBlock: DescribeBlock,
        hasFocusedTests: boolean, // that are defined using test.only
        rootDescribeBlock: DescribeBlock,
        testTimeout: number,
        expand?: boolean, // expand error messages
    };

    export type DescribeBlock = {
        children: Array<DescribeBlock>,
        hooks: Array<Hook>,
        mode: BlockMode,
        name: BlockName,
        parent: DescribeBlock | null,
        tests: Array<TestEntry>,
    };

    export type TestEntry = {
        errors: Array<Exception>,
        fn: null | TestFn,
        mode: TestMode,
        name: TestName,
        parent: DescribeBlock,
        startedAt: null | number,
        duration: null | number,
        status: null | TestStatus,
    };

    export const test: {
        (testName: TestName, fn?: TestFn): void;
        each(variants: any[]): (testName: TestName, fn: TestFn) => void;
        skip(testName: TestName, fn?: TestFn): void;
        only(testName: TestName, fn: TestFn): void;
    }

    export function afterAll(fn: HookFn): void;

    export function afterEach(fn: HookFn): void;

    export function beforeAll(fn: HookFn): void;

    export function beforeEach(fn: HookFn): void;
}

declare module 'jest-circus/build/state' {

    import { EventHandler, State } from "jest-circus";

    export function addEventHandler(handler: EventHandler): void;
    export function getState(): State;
}

declare module 'jest-circus/build/run' {
    import { TestResults } from "jest-circus";
    export default function run(): Promise<TestResults>;
}
