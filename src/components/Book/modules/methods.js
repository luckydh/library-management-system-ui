export default {
    editItem (user) {
        this.form.edit(user);
    },

    deleteItem (user) {
        this.form.delete(user.id);
    },

    save () {
        this.form.store();
    }
}