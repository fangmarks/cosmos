import { createContext, useReducer } from "react";
import { Filter as EFilter} from "utils/types";
import Reducer from "utils/RFilter";
// @ts-ignore
export const Context = createContext()

const I = EFilter.ASC

export default function Filter(props){
    const [state,dispatch] = useReducer(Reducer, I)
    
    return <Context.Provider value={[state, dispatch]}>{props.children}</Context.Provider>
}