function calculateLanguageLevel(HPWeek, n) {
    const totalHours = hoursPerWeek * 52 * n;

    if (totalHours >= 0 && totalHours <= 300) {
        console.log("A0 level");
    } else if (totalHours <= 600) {
        console.log("A1 level");
    } else if (totalHours <= 900) {
        console.log("A2 level");
    } else if (totalHours <= 1200) {
        console.log("B1 level");
    } else if (totalHours <= 1500) {
        console.log("B2 level");
    } else if (totalHours <= 1800) {
        console.log("C1 level");
    } else {
        console.log("Perfect");
    }
}
const HPWeek = 15;