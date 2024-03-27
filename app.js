import { questions } from "./questions.js";

let button = document.querySelectorAll('.btn')
let heading = document.querySelector('.head')
let submit = document.querySelector('.submit button')
let index = 0
let right = 0


const answers = [{
    'ans':'HTML'
    
},
{'ans':'world wide web'},
{'ans':'Javascript'}
]

const updateQuestions = ()=>{
    if (index == 3){
        button.forEach(elem=>{
            elem.style.display = 'none'
            submit.style.display = 'none'
            
        })
        heading.innerText = `you got ${right}/${questions.length} right answers`
        // index = 0
    }
    heading.innerText = `${index + 1}) ${questions[index].que}`
    button[0].innerText = questions[index].a
    button[1].innerText = questions[index].b
    button[2].innerText = questions[index].c
    button[3].innerText = questions[index].d
 
  
    index++

    
    
}
updateQuestions()


let ind = 0 
const checkAnswer= ()=>{
    button.forEach(buttons=>{
        buttons.addEventListener('click',function(){
            
            button.forEach(btn=>{
                btn.classList.remove('clicked')
            })
            this.classList.add('clicked')
            if (ind==3){
                ind= 0
            }
            if (this.innerText == answers[ind].ans){
                    
                    
                    right++
                    console.log(right);
                    
                
            }
            
            ind++
          
        })
        
        
    })
    
}


checkAnswer()
const reset= ()=>{
    button.forEach(btn=>{
        btn.classList.remove('clicked')
    })
}


submit.addEventListener('click',()=>{
    checkAnswer()
    updateQuestions()
    reset()
    
})

