export default {
    store() {
        this.form.loading = true;
        this.form.submit('post', '/login').then(({data}) => {
            this.$auth.set(data);
            this.$router.push('/');
        });
    }
}