export const abi: {
    "ABI version": number
    header: string[]
    functions: (
        | {
              name: string
              inputs: {
                  name: string
                  type: string
              }[]
              outputs: any[]
          }
        | {
              name: string
              inputs: any[]
              outputs: {
                  components: {
                      name: string
                      type: string
                  }[]
                  name: string
                  type: string
              }[]
          }
    )[]
    events: any[]
}
export const tvc: string
export const code: string
export const codeHash: string
