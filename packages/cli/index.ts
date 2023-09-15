export * from "./compile"
export * from "./giver"
export * from "./graphql"
export * from "./kamikadze"
export * from "./touch"
export * from "./utils"
import * as Touch from "./contracts/Touch.js"
import * as Kamikadze from "./contracts/Kamikadze.js"
export const contracts = {Touch, Kamikadze}
