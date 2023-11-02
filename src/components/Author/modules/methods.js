export default {
    editItem (author) {
        this.form.edit(author);
    },

    deleteItem (author) {
        this.form.delete(author.id);
    },

    save () {
        this.form.store();
    }
}