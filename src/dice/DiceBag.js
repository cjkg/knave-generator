class DiceBag {
    constructor(diceArray) {
        this.diceArray = diceArray;
        this.diceCount = diceArray.length;
    }

    roll() {
        return this.diceArray.map((die) => die.roll());
    }

    rollSum() {
        const roll = this.roll()
        return roll.reduce((sum, curr) => sum + curr, 0);
    }

    rollTakeLowest() {
        const roll = this.roll()
        return Math.min(...roll);
    }
}

export default DiceBag;