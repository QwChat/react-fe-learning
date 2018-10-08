import MobxIndex from "./mobxIndex"
import ReduxIndex from "./reduxIndex"

const useMobx = true

export default (useMobx ? MobxIndex : ReduxIndex)
