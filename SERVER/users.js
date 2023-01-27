let users = []

const trimStr = (str) => str.trim().toLowerCase()

const findUser = (user)=> {
    console.log('users' + user)
    const userName = trimStr(user.name)
    const userRoom = trimStr(user.room)


    return users.find((u) => trimStr(u.name) === userName && trimStr(u.room) === userRoom )
}




const addUser = (user) =>{

    const isExist = findUser(user)

    !isExist && users.push(user)
    const currentUser = isExist || user

    return{isExist: !!isExist, user: currentUser}
}

const getRoomUsers = (room ) => {
    return users.filter((u) => u.room === room)
}

const removeUser = (user) => {
    const foundUser = findUser(user)

    if(foundUser){
        users = users.filter(
            ({room, name}) => room === foundUser.room && name !== foundUser.name)
    }
    return foundUser
}

module.exports = {addUser, findUser, getRoomUsers, removeUser}