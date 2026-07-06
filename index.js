function formatWon(num){
    return Number(num).toLocaleString('ko-KR') + "원";
}

function calculate(){

    const amount =
        parseFloat(document.getElementById("amount").value);

    const dueDate =
        new Date(document.getElementById("dueDate").value);

    if(!amount || !dueDate){
        alert("모든 값을 입력하세요.");
        return;
    }

    const today = new Date();

    const diff =
        today.getTime() - dueDate.getTime();

    const days =
        Math.floor(diff / (1000*60*60*24));

    const elapsedDays =
        days < 0 ? 0 : days;

    const weeks =
        Math.floor(elapsedDays / 7);

    const fivePercent =
        amount * 0.08;

    const weeklyPenalty =
        amount * 0.12 * weeks;

    const totalPenalty =
        fivePercent + weeklyPenalty;

    const finalAmount =
        amount + totalPenalty;

    document.getElementById("days").innerText =
        elapsedDays + "일";

    document.getElementById("weeks").innerText =
        weeks + "주";

    document.getElementById("fivePercent").innerText =
        formatWon(fivePercent);

    document.getElementById("weeklyFee").innerText =
        formatWon(weeklyPenalty);

    document.getElementById("totalPenalty").innerText =
        formatWon(totalPenalty);

    document.getElementById("finalAmount").innerText =
        formatWon(finalAmount);
}