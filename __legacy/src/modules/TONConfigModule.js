/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */

// @flow
import type { TONConfigData } from "../../types";
import type { TONModuleContext } from "../TONModule";
import { TONModule } from '../TONModule';
import { Tracer } from 'opentracing';
import { tracer as noopTracer } from "opentracing/lib/noop";

const DEFAULT_MESSAGE_RETRIES_COUNT = 10;
const DEFAULT_MESSAGE_PROCESSING_TIMEOUT = 40000;
const DEFAULT_WAIT_FOR_TIMEOUT = 40000;
const DEFAULT_NETWORK_TIMEOUT = 0;

const DEFAULT_OUT_OF_SYNC_THRESHOLD = 15000;

export class URLParts {
    static parse(url: string): URLParts {
        const protocolSeparatorPos = url.indexOf('://');
        const protocolEnd = protocolSeparatorPos >= 0 ? protocolSeparatorPos + 3 : 0;
        const questionPos = url.indexOf('?', protocolEnd);
        const queryStart = questionPos >= 0 ? questionPos + 1 : url.length;
        const pathEnd = questionPos >= 0 ? questionPos : url.length;
        const pathSeparatorPos = url.indexOf('/', protocolEnd);
        // eslint-disable-next-line no-nested-ternary
        const pathStart = pathSeparatorPos >= 0
            ? (pathSeparatorPos < pathEnd ? pathSeparatorPos : pathEnd)
            : (questionPos >= 0 ? questionPos : url.length);
        return new URLParts(
            url.substring(0, protocolEnd),
            url.substring(protocolEnd, pathStart),
            url.substring(pathStart, pathEnd),
            url.substring(queryStart),
        );
    }

    static resolveUrl(baseUrl: string, url: string): string {
        const baseParts = URLParts.parse(baseUrl);
        return URLParts.parse(url)
            .fixProtocol(x => x || baseParts.protocol)
            .fixHost(x => x || baseParts.host)
            .toString();
    }

    fixProtocol(fix: (p: string) => string): URLParts {
        this.protocol = fix(this.protocol);
        return this;
    }

    fixHost(fix: (p: string) => string): URLParts {
        this.host = fix(this.host);
        return this;
    }

    fixPath(fix: (p: string) => string): URLParts {
        this.path = fix(this.path);
        return this;
    }

    fixQuery(fix: (q: string) => string): URLParts {
        this.query = fix(this.query);
        return this;
    }


    protocol: string;

    host: string;

    path: string;

    query: string;

    constructor(protocol: string, host: string, path: string, query: string) {
        this.protocol = protocol;
        this.host = host;
        this.path = path;
        this.query = query;
    }


    toString(): string {
        let { path } = this;
        while (path.indexOf('//') >= 0) {
            path = path.replace('//', '/');
        }
        if (path !== '' && !path.startsWith('/')) {
            path = `/${path}`;
        }
        return `${this.protocol}${this.host}${path}${this.query !== '' ? '?' : ''}${this.query}`;
    }
}
const defaultServer = 'http://localhost';
function valueOrDefault(value, defaultValue) {
    return (value === undefined || value === null) ? defaultValue : value;
}

export default class TONConfigModule extends TONModule {
    data: TONConfigData;
    tracer: Tracer;

    constructor(context: TONModuleContext) {
        super(context);
        this.data = {
            servers: [defaultServer],
        }
    }

    setData(data: TONConfigData) {
        this.data = data || this.data;
        if (this.data.servers.length === 0) {
            this.data.servers.push(defaultServer);
        }
        this.tracer = data.tracer || noopTracer;
    }

    getConfigServer(): string {
        return this.data?.servers?.[0] || '';
    }

    outOfSyncThreshold(): number {
        return valueOrDefault(this.data.outOfSyncThreshold, DEFAULT_OUT_OF_SYNC_THRESHOLD);
    }

    messageRetriesCount(): number {
        return valueOrDefault(this.data.messageRetriesCount, DEFAULT_MESSAGE_RETRIES_COUNT);
    }

    messageProcessingTimeout(): number {
        const timeout = this.data.messageProcessingTimeout;
        return timeout === 0 ? 0 : (timeout || DEFAULT_MESSAGE_PROCESSING_TIMEOUT);
    }

    waitForTimeout(): number {
        return valueOrDefault(this.data.waitForTimeout, DEFAULT_WAIT_FOR_TIMEOUT);
    }

    networkTimeout(): number {
        return valueOrDefault(this.data.networkTimeout, DEFAULT_NETWORK_TIMEOUT);
    }

    isNetworkTimeoutExpiredSince(startTime: number): boolean {
        const timeout = this.networkTimeout();
        if (timeout === 0) {
            return false;
        }
        return Date.now() > (startTime + timeout);
    }

    log(...args: any[]) {
        const profile = (this._profileStart || 0) !== 0;
        if (profile) {
            const current = Date.now() / 1000;
            const timeString = `${String(current.toFixed(3))} ${
                String((current - this._profileStart).toFixed(3))} ${
                String((current - this._profilePrev).toFixed(3))}`;
            if (this._logVerbose) {
                console.log(`[${timeString}]\n`, ...args);
            } else {
                console.log(`[${timeString}]\n`, args[0]);
            }
            this._profilePrev = current;
        } else if (this._logVerbose) {
            console.log(`[${Date.now() / 1000}]`, ...args);
        }
    }

    startProfile() {
        this._profileStart = Date.now() / 1000;
        this._profilePrev = this._profileStart;
    }

    stopProfile() {
        this._profileStart = this._profilePrev = 0;
    }

    async getVersion(): Promise<string> {
        return this.requestCore('version');
    }


    async setup(): Promise<void> {
        if (this.data) {
            const coreConfig = Object.assign({}, this.data);
            delete coreConfig.tracer;
            await this.requestCore('setup', coreConfig);
        }
        this._logVerbose = this.data.log_verbose || false;
        if (this._logVerbose) {
            this.startProfile();
        }
        this._errLogVerbose = this.data.err_log_verbose || true;
    }

    _logVerbose: boolean;
    _errLogVerbose: boolean;
    _profileStart: number;

    _profilePrev: number;
}

TONConfigModule.moduleName = 'TONConfigModule';
