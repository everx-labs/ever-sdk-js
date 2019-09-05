// @flow
/* eslint-disable class-methods-use-this, no-use-before-define, no-undef */
export interface TONClientLibrary {
    request: (
        method: string,
        paramsJson: string,
        onResult: (resultJson: string, errorJson: string) => void,
    ) => void,
}

export interface TONModuleContext {
    optionalLibrary(): ?TONClientLibrary,

    getModule<T>(ModuleClass: typeof TONModule): T,
}

export const TONModuleContextHelper = {
    requiredLibrary(context: TONModuleContext): TONClientLibrary {
        const library = context.optionalLibrary();
        if (library) {
            return library;
        }
        const message = 'TON SDK JS Library doesn\'t set up';
        console.error(message);
        throw new Error(message);
    },

    requestLibrary<Params, Result>(
        context: TONModuleContext,
        method: string,
        params?: Params,
    ): Promise<Result> {
        const native = TONModuleContextHelper.requiredLibrary(context);
        return new Promise((resolve: (Result) => void, reject: (Error) => void) => {
            native.request(
                method,
                params !== undefined ? (JSON.stringify(params) || '') : '',
                (resultJson, errorJson) => {
                    if (errorJson) {
                        reject(JSON.parse(errorJson));
                    } else if (resultJson) {
                        resolve(JSON.parse(resultJson));
                    } else {
                        resolve(({}: any));
                    }
                },
            );
        });
    },
};

export class TONModule {
    static moduleName: string;

    context: TONModuleContext;

    constructor(context: TONModuleContext) {
        this.context = context;
    }

    // Module
    async setup() {
        //
    }

    requestLibrary<Params, Result>(method: string, params?: Params): Promise<Result> {
        return TONModuleContextHelper.requestLibrary(this.context, method, params);
    }
}
