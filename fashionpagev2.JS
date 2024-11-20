let feedback = "dummy feedback for example for report 3"
if (feedback = ""){
    review = "Thank you for your response!"
    console.log(review)
}

else{
    review = "Thank you for your response!"
    console.log(review)
}

function submitFeedback(){
    let feed = document.getElementById('feedback').value;
    document.getElementsByClassName('feedback-form')[0].innerHTML = `<h1>Thank you for the feedback!</h1> <p>${feed}</p>`;
    
}
