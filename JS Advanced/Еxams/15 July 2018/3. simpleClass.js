class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){

        this.shelf = [];

        if(room === 'livingRoom' || room === 'bedRoom' || room === 'closet'){
            this.shelfGenre = shelfGenre;
            this.room = room;
            this.shelfCapacity = shelfCapacity;
        }else{
            throw new Error(`Cannot have book shelf in ${room}`);
        }

        return this;
    }

    get shelfCondition() {

        let count = 0;

        for(let i = 0; i < this.shelf.length; i++) {
            if(this.shelf[i] == null)
            {
                count++;
                return count;
            }
        }
    }

    addBook(bookName, bookAuthor, genre){
        if(this.shelf.length < this.shelfCapacity){
            let obj = {
                bookName: bookName,
                bookAuthor: bookAuthor,
                genre: genre
            };
            this.shelf.push(obj);
        }
    }

    showBooks(genre) {
        return `Results for search "${genre}":
\uD83D\uDCD6 ${this.shelf.bookAuthor} – "${this.shelf.bookName}"`
        for (let g of this.shelf.genre) {

        }
    }

    throwAwayBook(bookName) {
        let index = this.shelf.indexOf(bookName);
        if (index > -1) {
            this.addBook().splice(index, 1);
        }
    }

    toString(){
        if(this.shelf.length === 0){
            console.log('It\'s an empty shelf');
        }else{
            console.log(`${this.shelfGenre} shelf in ${this.room} contains:`);
            console.log(`\uD83D\uDCD6 "${this.shelf.bookName}" - ${this.shelf.bookAuthor}`)
        }
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());
