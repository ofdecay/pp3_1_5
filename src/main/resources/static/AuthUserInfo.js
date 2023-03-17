fillInPrincipal();

function fillInPrincipal() {
    fetch("http://localhost:8080/user/authUser")
        .then(res => res.json())
        .then(data => {
            $('#headerUserName').append(data.username);
            let roles = data.roles.map(role => " " + role.name.substring(5));
            $('#headerRole').append(roles);
            let user = `$(
                <tr>
                    <td>${data.id}</td>
                    <td>${data.username}</td>
                    <td>${data.password}</td>
                    <td>${data.email}</td>   
                    <td>${roles}</td>
                </tr>)`;
            $('#userTable').append(user);
        })
}