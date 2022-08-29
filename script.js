function advice() {
    let adviceUrl = "https://api.adviceslip.com/advice";
    let element = document.getElementById("advice");

    $.ajax(
        adviceUrl,
        {
            success: function (APIResponse) {
                let jsonResponse = JSON.parse(APIResponse);
                let adviceQuote = jsonResponse.slip.advice;
                element.innerHTML = `"${adviceQuote}"`;

            }
        })
}

advice();