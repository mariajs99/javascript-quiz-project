class Quiz {
    // YOUR CODE HERE:
    //
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }
    
    moveToNextQuestion() {
        return this.questions[this.currentQuestionIndex ++]
    }

    shuffleQuestions() {
        for ( let i = this.questions.length - 1; i > 0 ; i--) {
                const j = Math.floor(Math.random() * (i + 1) );
                [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
            }
            return this.questions;
        }
    
    checkAnswer(answer) {
        if(answer === this.questions[this.currentQuestionIndex].answer) {
            return this.correctAnswers += 1
            
        }
    }

    hasEnded() {
        if(this.currentQuestionIndex < this.questions.length) {
            return false
        } else if (this.currentQuestionIndex = this.questions.length) {
            return true
        }
    }
    filterQuestionsByDifficulty(difficulty) { //Math.floor(Math.random * 3) + 1 //
        if ( difficulty !== 1 && difficulty !== 2 && difficulty !== 3) {
            return 
        }
        let filteredQuestions = this.questions.filter((eachQuestion) => {
            if (difficulty == eachQuestion.difficulty){
                return true
            } else {
                return false
            }
        });
        this.questions = filteredQuestions
        return filteredQuestions
    }
    averageDifficulty() {
        let dificultadMedia = this.questions.reduce((acumulado, eachQuestion) => {
            let average = (acumulado + eachQuestion.difficulty) 
            return average 
        }, 0)
        return dificultadMedia / this.questions.length
    }
}