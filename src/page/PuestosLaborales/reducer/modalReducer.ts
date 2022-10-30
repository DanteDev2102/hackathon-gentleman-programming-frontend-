export enum modalActionTypes {
    ON = 'ON',
    OFF = 'OFF'
}

interface modalAction {
    type: modalActionTypes 
}


export const modalReducer = (state: boolean, action: modalAction) => {
    const { type } = action
    switch (type) {
        case modalActionTypes.ON: {
          return true
        }
        case modalActionTypes.OFF: {
          return false
        }
        default: {
          throw new Error(`Unhandled type: ${action.type}`)
        }
      }
}


// function useOpenModal (reducer = modalReducer)  {
//   const [{openModal}, disptach] = React.useReducer(modalReducer) 
//   return {}
// }

