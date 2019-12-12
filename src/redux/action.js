export function createUser(e){
    e.preventDefault()
    return {type: "CREATE_USER", payload: e.target[0].value}
}