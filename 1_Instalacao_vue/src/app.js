const MyNameApp = {
    data() {
        return {
            name: "Luana", 
            age: 25, 
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");