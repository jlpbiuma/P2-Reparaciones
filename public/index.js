
const getAllUsers = async () => {
    const response = await axios.get()
    console.log(response);
}

getAllUsers()
.then(users => {
    const usersRoot = document.getElementById("users-root");
    users.forEach(user => {
    });
})