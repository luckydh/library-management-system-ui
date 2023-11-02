export default {
    editItem (publisher) {
        this.form.edit(publisher);
    },

    deleteItem (publisher) {
        this.form.delete(publisher.id);
    },

    save () {
        this.form.store();
    }
}