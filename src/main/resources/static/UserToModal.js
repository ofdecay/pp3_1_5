async function userToModal(form, modal, id){
    modal.show();
    let user = await findUser(id);
    form.id.value = user.id;
    form.username.value = user.username;
    form.password.value = user.password;
    form.email.value = user.email;
    form.roles.value = user.roles[0].id;
}