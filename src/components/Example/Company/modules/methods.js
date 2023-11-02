export default {
    editItem (company) {
        this.form.edit(company);
    },

    deleteItem (company) {
        this.form.delete(company.id);
    },

    save () {
        this.form.store();
    }
}