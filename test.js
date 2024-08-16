// Constants
const limit = 80; // km/h
const KM_PER_POINT = 5; // km/h

// Example usage
let curSpeed = 130;

if (curSpeed <= limit) {
    message = 'bye';
} else {
    const penaltyPoints = Math.floor((curSpeed - limit) / KM_PER_POINT);
    if (penaltyPoints < 8) {
        message = `Speed Limit Crossed by Penalty Point: ${penaltyPoints}`;
    } else {
        message = 'no driving license';
    }
}