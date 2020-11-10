import { Context, createContext, h } from "preact";
import { useReducer, useMemo } from "preact/hooks";

import { detailsReducer, IDetailsState, IDetailsAction } from "./detailsReducer";

interface IProviderProps {
  children?:any
}

interface IContextProps {
  details: IDetailsState,
  dispatch: (action: IDetailsAction) => void
}

const initialState = {} as IDetailsState;
const DetailsContext = createContext({} as IContextProps) as Context<IContextProps>

function DetailsProvider({children}: IProviderProps){
  const [details, dispatch] = useReducer(detailsReducer, initialState)
  const contextObj = useMemo(()=>({details, dispatch}), [details])
  return (
    <DetailsContext.Provider value={contextObj}>
      {children}
    </DetailsContext.Provider>
  )
}

export {DetailsContext, DetailsProvider}
