let formNew = document.forms["formNewUser"];
addNewUser();

function addNewUser() {
    formNew.addEventListener("submit", ev => {
        ev.preventDefault();
        let newUserRoles = [];
        for (let i = 0; i < formNew.roles.options.length; i++) {
            if (formNew.roles.options[i].selected) newUserRoles.push({
                id: formNew.roles.value,
                name: "ROLE_" + formNew.roles.options[i].text
            });
        }
        fetch("http://localhost:8080/admin/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formNew.username.value,
                password: formNew.password.value,
                email: formNew.email.value,
                roles: newUserRoles
            })
        }).then(() => {
            formNew.reset();
            findAll();
            $('#home-tab').click();
        });
    });
}