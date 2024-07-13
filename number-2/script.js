class UberRide {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    calculateFare(distance, time) {
        const distanceCost = this.costPerMile * distance;
        const timeCost = this.costPerMinute * time;
        const totalFare = this.baseFare + distanceCost + timeCost + this.bookingFee;
        return totalFare;
    }
}

// Example usage:
const uberX = new UberRide(2.00, 1.50, 0.25, 1.75);

// Example ride details
const distance = 10; // in miles
const time = 15; // in minutes

const fare = uberX.calculateFare(distance, time);
console.log(`The fare for your ride is: ₹${fare.toFixed(2)}`);
