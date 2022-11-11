class Quiz {
    constructor(containerQuestion, containerAnswers, questionList) {
        
        if(typeof containerQuestion == 'string')
            this.containerQuestion = document.querySelector(containerQuestion);
        else if(typeof containerQuestion == 'object' )
            this.containerQuestion = containerQuestion;

        if(typeof containerAnswers == 'string')
            this.containerAnswers = document.querySelector(containerAnswers);
        else if(typeof containerAnswers == 'object' )
            this.containerAnswers = containerAnswers;

        if(typeof questionList == 'string')
            this.questionList = [ questionList ];
        else if(typeof questionList == 'array')
            this.questionList = questionList;
        else
            this.questionList = [];

            this.answerList = [];

            this.potentielAnswerList = [];

            this.answerListUser = [];

            this.currentPosition = 0;

            this.listCurrentAnswers;
    }

    addQuestion(question='', answer=''){
        this.questionList.push(question);
        this.answerList.push(answer);
    }

    get addCategoryAnswer(){
        return this.potentielAnswerList.push([]);
    }

    addPotentielAnswer(answer, category){
        return (this.potentielAnswerList[category]).push(answer);
    }

    changeQuestion(userAnswer=''){
        if(userAnswer!=''){
            this.currentPosition++;
            this.answerListUser.push(document.querySelector('input[name="answer"]:checked').value)
            document.querySelector('input[name="answer"]:checked').value;
        }

        if(this.currentPosition<=this.potentielAnswerList.length-1){
            //console.log(this.containerAnswers)
            let test = this.containerAnswers;
            this.containerQuestion.innerHTML = this.questionList[this.currentPosition];
            //let stringContent='';
            test.innerHTML = '';
            let loop = 0;
            (this.potentielAnswerList[this.currentPosition]).map(function(arrayAnswer){
                //stringContent += '<p>'+arrayAnswer+'</p>';
                //console.log(test)    
                let rep = test.appendChild(document.createElement("input"));
                let label = test.appendChild(document.createElement("label"));
                rep.value = loop;
                rep.type = "radio";
                rep.name = "answer";
                rep.setAttribute('id', 'ans_'+loop)
                rep.setAttribute('class', 'ans')
                label.innerHTML = arrayAnswer;
                label.htmlFor = 'ans_'+loop;
                loop++;
            });
        }
        else{
            let scoreFinal=0;
            for(let i=0; i< this.answerList.length; i++){
                if(this.answerList[i]==this.answerListUser[i])
                    scoreFinal++;    
            }
            this.containerQuestion.innerHTML='';   
            this.containerAnswers.innerHTML = 'Votre score final est de '+scoreFinal+' / '+this.answerListUser.length;
        }
    }
}