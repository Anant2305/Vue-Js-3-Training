const app = Vue.createApp({
    //data, function
    //template: '<h2>I am the template<h2>'
    data(){
        // return {
        //     showBooks: true,
        //     title: 'The Final Empire',
        //     author: 'Brandon Snaderson',
        //     age: 45,
        //     x: 0,
        //     y: 0
        // }

        return {
            url: "https://www.bbc.co.uk",
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/NameOfWind.jpg', isFav: true },
                { title: 'the way of kings', author: 'Brandon Snaderson', img: 'assets/WayOfKings.jpg', isFav: false },
                { title: 'The Final Empire', author: 'Brandon Snaderson', img: 'assets/finalEmpire.jpg', isFav: true }
            ]
        }
    },
    methods: {
        changeAgeAdd() {
            this.age++
        },
        changeAgeMinus() {
            this.age--
        },
        changeTitle() {
            this.title = "New Title Name"
        },
        changeTitle2(title) {
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks //this will set showBooks toopposite to last clicked value.
        },
        handleEvent(e) {
            console.log(e, e.type)
        },
        handleMouseMove(e){
            this.x = e.offsetX,
            this.y = e.offsetY
        },
        toggleIsFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) =>  book.isFav)
        }
    }
})

app.mount("#app")
