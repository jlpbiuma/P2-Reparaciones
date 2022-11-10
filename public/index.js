const api = axios.create({
    baseURL: "https://p2-reparaciones-production.up.railway.app/",
    timeout: 2000

});

const login = async () => {
    const response = await api.post('api/auth/login', {
        email: "josephadmin@gmail.com",
        password: "123456789"
    })
    return response.token;
}

let token = login();

const getAllUsers = async () => {
    const users = await api.get('api/users/?token=' + token)
    console.log(users)
    return users
}
/*
getAllUsers()
.then(users => {
    const usersRoot = document.getElementById("users-root");
    users.forEach(user => {
        let row = document.createElement('div')
        row.classList.add('row')
        row.innerHTML = user.name
        usersRoot.appendChild(row)
    });
}) */