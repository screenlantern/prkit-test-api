var app = new Vue({
    el: '#app',
    data: {
        test: {
            firstname: "warren",
            lastname: "baugh",
            email: "screenlantern@gmail.com"
        },
        baseUrl: 'http://localhost:9000/api/users',
        users: []
    },
    beforeMount: function () {
        this.fetchUsers();
    },
    methods: {
        fetchUsers: function () {
            axios.get(this.baseUrl).then(function (res) {
                app.$set(app.users, res.data);
                console.log(app.users);
            });
        },
        createUser: function () {

        },
        deleteUser: function (id) {
            axios.delete(this.baseUrl + '/' + id).then(function (res) {
                console.log(app.users);
            });
        }
    }
})