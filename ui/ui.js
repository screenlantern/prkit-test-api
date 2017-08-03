Vue.component('user-list', {
    template: '<div>{{user.firstname}} {{user.lastname}} {{user.email}}</div>',
    data: function () {
        return {
            user: {
                firstname: "warren",
                lastname: "baugh",
                email: "screenlantern@gmail.com"
            }
        };
    }
})

new Vue({
    el: '#app'
})