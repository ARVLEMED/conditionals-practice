function bookingFlight(age, hasPassport, isFlightAvailable) {
    if (age >= 18 && age <= 70) {
        if (hasPassport === true) {
            if (isFlightAvailable === true) {
                return "Booking successful";
            }
        }
    }
    return "Booking failed";
}



