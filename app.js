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
            this.$http.get('http://192.168.99.100:8000/').then(function (data) {
                this.quotes = data.body;
                console.log('getQuotes: ' + this.quotes.length);
                if (data.body.length > 0) {
                    this.quote = data.body[0];
                }
            })
        },
        loopQuotes: function () {
            let counter = 0;
            window.setInterval(() => {
                if (this.quotes.length > 0) {
                    let listLength = this.quotes.length;
                    let divided = (counter % listLength);
                    this.quote = this.quotes[divided];
                    if(counter >= listLength) {
                        counter = 0;
                    } else {
                        counter++;
                    }
                }
            }, 5000);
        }
    },
    created() {
        this.getQuotes();
    },
    beforeMount() {
        this.loopQuotes();
    }
});