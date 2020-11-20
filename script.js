const answer = "September 1909"; 

const answerButton = document.getElementById('checkAns1');
/*
untuk pertanyaan seputar aurora
*/ 
answerButton.addEventListener('click', function(){
    console.log('menekan melakukan pengecekan')
    
    const answerElement = document.getElementById('input-ans1')
    
    console.log(answerElement.value)
    if (answerElement.value.toLowerCase() === answer.toLocaleLowerCase()) {
        alert('Good job! Yuk cari tahu lebih hal unik di sekitarmu.')
    } else if (answerElement.value.toLocaleLowerCase() === "") {
        alert('Cari jawaban dulu baru mengisi. Semangat!!!')
    } else {
        alert('Belum tepat. Tetap mencari ya Semangat!!!')
    }
})
/*
untuk pertanyaan seputar musik
*/ 
const answer1 = "25";
const answerButton1 = document.getElementById('checkAns2');

answerButton1.addEventListener('click', function(){
    console.log('menekan melakukan pengecekan')
    
    const answerElement1 = document.getElementById('input-ans2')
    
    console.log(answerElement1.value)
    if (answerElement1.value === answer1) {
        alert('Good job! Yuk cari tahu lebih hal unik di sekitarmu.')
    } else if (answerElement1.value === "") {
        alert('Cari jawaban dulu baru mengisi. Semangat!!!')
    } else {
        alert('Belum tepat. Tetap mencari ya Semangat!!!')
    }
})
