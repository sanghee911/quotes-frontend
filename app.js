vueObject = new Vue({
    el: '#vue-app',
    data: {
        name: 'Sanghee Lee',
        quotes: [],
        quote: '',
        now: ''
    },
    methods: {
        getQuotes: function () {
            this.$http.get('http://backend:8000/').then(function (data) {
                this.quotes = data.body;
                if (data.body.length > 0) {
                    this.quote = data.body[0];
                }
            })
        },
        loopQuotes: function () {
            let counter = 0;
            window.setInterval(() => {
                let listLength = this.quotes.length;
                let divided = (counter % listLength)
                this.quote = this.quotes[divided];
                if(counter >= listLength) {
                    counter = 0;
                } else {
                    counter++;
                }
            },10000);
        }
    },
    beforeMount() {
        this.getQuotes();
    },
    mounted() {
        this.loopQuotes();
    },
});