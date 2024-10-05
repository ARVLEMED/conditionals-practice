
function jobApplication(age, yearsExperience, knowsJavaScript) {
    if (age >= 18 && age < 50) {
        if (yearsExperience >= 5 ||age<30 && yearsExperience>=3) {
            if (knowsJavaScript === true) {
                return "Eligible for the job";
            }
        }
    }
    return "Not eligible";
}
console.log(jobApplication(17,4,true))