export function getDefaultEndpoints() {
    return [getEnv("TON_NETWORK_ADDRESS") ?? "http://localhost"]
}

export function getEnv(name: string): string | undefined {
    const globalEval = eval
    try {
        return globalEval(`process.env.${name}`)
    } catch {
        return undefined
    }
}

export const sleep = (time: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, time))

export function myParseInt(value: string) {
    // parseInt takes a string and a radix
    const parsedValue = parseInt(value, 10)
    if (isNaN(parsedValue)) {
        throw new Error("Not a number.")
    }
    return parsedValue
}
