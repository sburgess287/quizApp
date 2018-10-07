'use strict';

const quizQuestions = [
    {   
        question: `This Russian painter and art theorist lived from 1866-1944. He is credited with 
        painting one of the first recognized purely abstract works. In 1933 he moved from Germany 
        to France, where he produced his most prominent art. He had synethesia, which meant that 
        he could hear tones and chords as he painted. His best known works include “In Grey,” 
        “Several Circles,” and “Composition X.”`,
        answers: {
            a: `Sergie Ivanov`, 
            b: `Nikolay Kasatkin`,
            c: `Wassily Kandinsky`,
            d: `Feodor Vasilyev`,
        },
        correctAnswer: "c",
    },

    {   
        question : `This Mexican painter is best known for her self-portraits, which mixed realism 
        with fantasy. Her first exhibition was in 1931 in the Sixth Annual Exhibition of the San 
        Francisco Society of Women Artists. She is regarded as a feminine force in the Surrealist 
        movement, although some art historians believe her works fit more in a magical realism style 
        called “New Objectivity.” Her most famous works include "Self-Portrait with Cropped Hair," 
        "Self-Portrait with Thorn Necklace," and "Hummingbird."`,
        answers: {
            a: `Rocio Caballerro`, 
            b: `Frida Kahlo`,
            c: `Laura Elenes`,
            d: `Ana Karen Allende`,
        },
        correctAnswer: "b",
    },

    {   
        question : `This artist was a French painter and founder of the French Impressionist painting.  
        He lived from 1840-1926. The topics of his best-known works were the lily pads at his home in 
        Giverny. His most famous paintings include “Water Lilies,” "The Japanese Footbridge and the Water 
        Lily Pool”, and “Giverney.”`,
        answers: {
            a: `Edouard Manet`, 
            b: `Camille Pissarro`,
            c: `Paul Cezanne`,
            d: `Claude Monet`,
        },
        correctAnswer: "d",
    }, 

    {   
        question : `This painter was a highly imaginative and eccentric artist, born in Catalonia, Spain.  
        His artistic endeavors included film, sculpture, photography, and multimedia. He moved to the 
        United States for a few years during World War II. His later works included optical illusions, 
        puns, and pointillism. His most famous works include “Persistence of Memory” and 
        “The Burning Giraffe.”`,
        answers: {
            a: `Pablo Rey`, 
            b: `Jorge Oteiza`,
            c: `Salvador Dali`,
            d: `Francisco Lopez`,
        },
        correctAnswer: "c",
    }, 

    {   
        question : `This Italian painter interests included invention, painting, sculpting, architecture, science, 
        music, mathematics, engineering, literature, anatomy, astronomy, botany, writing, history and cartography.  
        He is widely considered one of the greatest painters of all time. He epitomized the Renaissance Ideal, 
        living from 1452-1519. His best known paintings include “Mona Lisa” and “The Last Supper.”`,
        answers: {
            a: `Michelangelo`, 
            b: `Leonardo da Vinci`,
            c: `Raphael`,
            d: `Marcello Figolino`,
        },
        correctAnswer: "b",
    }, 

    {   
        question : `Considered one of the most important painters in Dutch history, this painter lived from 1606-1669.  
        His works depict everything from portraits, self-portraits, to allegorical, mythological, and historical scenes.  
        His most famous works include “The Night Watch,” “Artemisia,” and “The Storm on the Sea of Galilee.”`,
        answers: {
            a: `Rembrandt`, 
            b: `Willem de Poorter`,
            c: `Jacob Storck`,
            d: `Johannes Vermeer`,
        },
        correctAnswer: "a",
    }, 

    {   
        question : `This painter was an American artist who is known for her dramatic and innovative works of art. She lived 
        in the United States between 1887-1986. Her best known paintings are of enlarged flowers, New York skyscrapers, and 
        New Mexico landscapes. She spent the last few years of her life living in Santa Fe. A fossilized species of archosaur 
        was named for her. Her most famous works include "Cow’s Skull with Calico Roses," "The Black Place," and "Sky Above Clouds."`,
        answers: {
            a: `Elaine Breiger`, 
            b: `Georgia O’Keefe`,
            c: `Naureen Zaim`,
            d: `Jenny Saville`,
        },
        correctAnswer: "b",
    }, 

    {   
        question : `This Spanish painter lived in during 1881-1973. He was a painter, sculptor, printmaker, ceramicist, 
        stage designer, poet, and playwrite who spent most of his life in France. He is regarded as one of the most influential 
        artists in the 20th century. His works included different periods: Blue Period, Rose Periodd, African-influenced 
        Period, Analytic Cubism, and Crystal period. His most famous works include “Guernica," "The Old Guitarist," and "Las Meninas."`,
        answers: {
            a: `Francisco Goya`, 
            b: `Diego Velazquez`,
            c: `Eduardo Arroyo`,
            d: `Pablo Picasso`,
        },
        correctAnswer: "d",
    }, 

    {   
        question : `Rival to Leonardo da Vinci, this artist lived during the High Renaissance in Florence Italy during 1475-1564.  
        He was a sculptor, painter, architect and poet. His best known sculptures were completed before the age of 30; the “Pieta” 
        and “David.” He had a low opinion of painting. His frescoes on the ceiling of the Sistine Chapel in Rome, and “The Last 
        Judgement” on the alter wall are 2 of the most influential frescoes in the history of Western art.`,
        answers: {
            a: `Raphael`, 
            b: `Michelangelo`,
            c: `Giovanni Bellini`,
            d: `Botticelli`,
        },
        correctAnswer: "b",
    }, 

    {   
        question : `This Dutch Post-Impressionistic painter lived from 1853-1890. Within a 10-year span, he created over 2,100 
        artworks, most in the last 2 years of his life. His favorite subjects were landscapes, still lifes, portraits, and 
        self-portraits. He was unsuccessful during his lifetime, and considered a failure. He became famous after his suicide, 
        and is remembered as a quintessential misunderstood genius. His most famous works include “The Starry Night,” “Vase 
        with Fifteen Sunflowers,” and “Wheat Field with Cypresses.”`,
        answers: {
            a: `Hans Bollengier`, 
            b: `Vincent van Gogh`,
            c: `Jan Miense Molenaer`,
            d: `Jonannes Vermeer`,
        },
        correctAnswer: "b",
    }, 
];

const progress = {
    currentQuestion: 0,
    currentScore: 0,
}

function generateNewPageString(){
    // Passes the string of the welcome page into showWelcomePage();
    return `
    <section role="region" class="welcomePage row"> 
        <!-- Page 1 --> 
        <h2 class="welcomeMessage">Come and test your knowledge of 
        some of the greatests artists of all time! Through their imagination and 
                skill, they have shaped our view of the world! 
        </h2>

        <p class="instructions">
            Read each question, then select 1 answer to the choices provided. Click Enter Answer. 
        </p> 
        <!-- Begin quiz button is only on the welcomePage-->
        <button class="beginQuiz button-class1" aria-label="Begin Quiz">Click to Begin Quiz</button>
    </section> 
    `;

}

function showWelcomePage() {  
    // Get the html for the welcome page
    // Put it inside the contentContainer
    const newPage = generateNewPageString();
    $('.contentContainer').html(newPage);
}

function generateQuestionPage(questionObject, score, questionNumber) {
    //typeof(questionNumber);

    // Dynamically generates questions, answers, score and question number from the object!!
    return `
    <section role="region" class="questionPage row">
        <div class="col-6">
        <!-- This shows on 2nd page of the app starting at 0 of 0. 
                First number increments with correct answers, second with the question number-->
            <p class="ongoingScore">Your score: ${score} correct of 10</p>
        </div>
        <form class="row questionForm" id="js-questions-form">
            <fieldset class="col-6">
                <h2 class="js-item-index-element">${questionObject.question}</h2>
                <!-- legend element tells screenreaders to read question and associates the answers with the question-->
                <!-- Radio buttons with answers appear on 2nd page through end of questions. 
                User can click then click enter button below. The correct answer will highlight a box around the text, along 
                with text confirmation below. -->

                <input type="radio" id="firstAnswer" name="answer" value="a" required>
                <label for="firstAnswer">${questionObject.answers.a}</label>
                <input type="radio" id="secondAnswer" name="answer" value="b">
                <label for="secondAnswer">${questionObject.answers.b}</label>
                <input type="radio" id="thirdAnswer" name="answer" value="c">
                <label for="thirdAnswer">${questionObject.answers.c}</label>
                <input type="radio" id="fourthAnswer" name="answer" value="d">
                <label for="fourthAnswer">${questionObject.answers.d}</label>
                <!-- Show on the second page when the questions begin -->
                <button aria-label="submit" type="submit" class= "enterAnswer button-class2">Enter Answer</button>
            </fieldset>
        </form>
        <div class="col-6">
            <!-- This keeps track of which question the user is answering. Last page will say "You have answered all questions!" -->
            <p class="questionNumber">You are on question 
            ${(questionNumber+1)} of 10. 
            </p>
        </div>
    </section>`; 
    
}

function generateQuestionPageItemsString(questionObject, score){ 
    // Pass the quizQuestions object as the dynamicQuestions Parameter
    // Generate one list item string with the question/answers
    generateItemElement(item, index);

}

function showNextQuestion(event){
    // Get the current score;
    // Get question/answer for current question from QUESTIONS array
    const currentQuestionObject = quizQuestions[progress.currentQuestion]
    // Get the html for the question page
    const questionPageItemsString = generateQuestionPage(currentQuestionObject, progress.currentScore, progress.currentQuestion);
    // This will be added to the DOM innerHTML of the .contentContainer
    $('.contentContainer').html(questionPageItemsString); 
}

function submitAnswer(event){
    event.preventDefault();
    // Get the answer the user has submitted from radio button DOM
    const userAnswer = $('input[name=answer]:checked').val();

    // Get the correct answer from the QUESTIONS array 
    const correctCurrentAnswer = quizQuestions[progress.currentQuestion].correctAnswer;

    // Compare current answer to correctAnswer for the current question
    // Update the current score in Progress object when answer is correct
    // if the value of the userAnswer is equal to value of correctCurrentAnswer, add 1 to the currentScore
    // or add 0
    (userAnswer === correctCurrentAnswer) ? progress.currentScore++ : progress.currentScore+=0;
    
    // Show the Answer Page (new function)
    showAnswer(correctCurrentAnswer, userAnswer, quizQuestions[progress.currentQuestion]);
    
    // Always update the currentQuestion in Progress object.
    progress.currentQuestion++;
}

function showAnswer(correctAnswer, userAnswer, questionObject) {
    // Dynamically load the answer page inside the content container.
    const newAnswerPage = generateAnswerPageString(correctAnswer, userAnswer, questionObject);
    $('.contentContainer').html(newAnswerPage);
}

function generateAnswerPageString(correctAnswer, userAnswer, questionObject){
    return `
    <section class="answerPage row">
        <div class="col-6 col-12">
            <h2 class="answerStatus">
            ${(userAnswer === correctAnswer) 
                ? `Your answer is correct!` 
                : `Your answer is incorrect.`}
            </h2>
            <p class="correctAnswer">
            ${(userAnswer !== correctAnswer) 
                ? `The correct answer is ${questionObject.answers[correctAnswer]}.` 
                : ''}
            </p>   
        </div>
        <div class="col-6 col-12">
            <button aria-label="Next question" class="nextQuestion button-class2">Click to Go to Next Question</button>
        </div>
    </section>
    `
}

function nextQuestionOrFinalPage (event, questionNumber){
    // If user is answering questions 1-9, Show the next question. 
    // Otherwise goes to the final page.
    if (progress.currentQuestion < quizQuestions.length) { 
        return showNextQuestion();
    }
        const finalMessagePage = generateFinalMessagePageString();
        $('.contentContainer').html(finalMessagePage);
}

function generateFinalMessagePageString() {
    return `
    <!-- Page 4: Final Message Page-->
    <section class="endingPage row">
        <div class="col-6 col-12">
            <h2 class="finalMessage">Congratulations, you have completed the quiz! Thank you for playing.
            </h2>
            <p class="finalScore">Your score: ${progress.currentScore} correct out of 10</p>
        </div>
        <div class="col-6 col-12">
            <!-- Reset quiz button only shows on the final page -->
            <button type="reset" class="restartQuiz button-class2">Click to Start Quiz Over</button>
        </div>
    </section>
    `
}

function restartQuiz() {
    // When restart quiz button is clicked, refresh page to start quiz over
    window.location.reload(true);
}

function handleQuiz() {
    // Show welcome page
    showWelcomePage();

    // Event listener on the parent element (container) for Button:.beginQuiz to showNextQuestion(): 
    $('.contentContainer').on('click', '.beginQuiz', showNextQuestion);

    // Event listener on the parent element (container) for Button: .enterAnswer to submit answer form
    $('.contentContainer').on('submit', 'form.questionForm', submitAnswer);

    // Event listener on the parent element (container) for Button: .nextQuestion to nextQuestionOrFinalPage()
    $('.contentContainer').on('click', '.nextQuestion', nextQuestionOrFinalPage);

    // Event Listener ... for Button: .restartQuiz
    $('.contentContainer').on('click', '.restartQuiz', restartQuiz);
}

$(handleQuiz);