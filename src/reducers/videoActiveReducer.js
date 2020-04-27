export default (state = true, actions) => {
    if(actions.type === "FALSE") {
        return false
    } else {
        return state
    }
}