//emailAddressForm
const label = document.querySelector('#l1');
const email = document.getElementById('email');
email.addEventListener('focusin',()=>{
    label.classList.remove('b4click');
    label.classList.add('afterClick');
})
email.addEventListener('focusout',()=>{
    if(!(email.value))
    {
        label.classList.add('b4click');
        label.classList.remove('afterClick');
    }
})

//Questions
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const q = question.querySelector('.question-text');
    // console.log(question);
    q.addEventListener('click',function() {
        // alert('clicked!');
        questions.forEach(function(toClose){
            if(toClose !== question)
            {
                toClose.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    })

    
})

