function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let total = 0;
    for (let time of interviewTimes) {
        total = total + time;
    }
    let average_Time = Math.round(total / interviewTimes.length);

    let beforeIsrat = (serialNumber - 1) - interviewTimes.length;

    let waitingTime = beforeIsrat * average_Time;

    return waitingTime;
}