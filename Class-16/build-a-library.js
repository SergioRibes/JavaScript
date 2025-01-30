class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }

    get title () {
        return this._title;
    }

    get isCheckedOut () {
        return this._isCheckedOut;
    }

    get ratings () {
        return this._ratings;
    }

    toggleCheckOutStatus () {
        if (this._isCheckedOut == false) {
            this._isCheckedOut = true;
        } else {
            this._isCheckedOut = false;
        }
    }

    addRating (newRating) {
        this._ratings.push(newRating);
    }

    set isCheckedOut (newIsCheckedOut) {
        this._isCheckedOut = newIsCheckedOut
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title, false, [])
        this._author = author;
        this._pages = pages;
    }

    get author () {
        return this._author;
    }

    get pages () {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title, false, [])
        this._director = director;
        this._runTime = runTime;
    }

    get director () {
        return this._director;
    }

    get runTime () {
        return this._runTime;
    }
}

const historyOfEverything = new Book ("Bill Bryson", 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// get average rating hw //

const speed = new Movie ("Speed", "Jan de Bon", 116)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

