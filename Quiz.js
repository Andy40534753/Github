 
var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');
var question_answer = [];                                             //User answer array

var app={                                                             // Question and correct answer an options array.
      questions: [{ 
             q: "From the TV show ‘The Chase’ Who is the governess?", 
             options: ["Anne Hathaway", 
                       "Anne Elizabeth", 
                       "Anne Curtis", 
                       "Anne Hegerty"], 
             answer: 4 
           },
           { 
             q: "In which of the following movie has Jason Stratham played ?",
             options: ["The Expendables", 
                       "Paddington", 
                       "The Terminator", 
                       "The Accountant"], 
             answer: 1 
           },
           { 
             q: "What is Jeremy Clarkson famous for?", 
             options: ["Broadcasting", 
                       "Farming", 
                       "Top Gear", 
                       "Working at amazon"], 
           answer: 3 
           },
           { 
            q: "What was the name of Spike's son in Tom and Jerry cartoon", 
            options: ["Droopy", 
                      "Tyke", 
                      "Tuffy", 
                      "Butch"], 
            answer: 2 
            },
            { 
              q: "Who is the host of Eight out of Ten Cats?", 
              options: ["Ricky Gervais", 
                        "Jimmy Carr", 
                        "Michael McIntyre", 
                        "Russle Howard"], 
            answer: 2 
            },
            { 
              q: "Which member of The Beatles appeared in a Japanese TV commercial for an apple drink? ", 
              options: ["Paul McCartney", 
                        "John Lennon", 
                        "Ringo Starr", 
                        "Norman Chapman"], 
            answer: 3 
            },
            { 
              q: "What is Jeremy Clarkson famous for?", 
              options: ["Broadcasting", 
                        "Farming", 
                        "Top Gear", 
                        "Working at amazon"], 
            answer: 3 
            },
            { 
              q: "In batman what was the surname of alfred the butler?", 
              options: ["Pennyworth", 
                        "Jarvis", 
                        "Raff", 
                        "Belvedere"], 
            answer: 1 
            },
            { 
              q: "In Doctor Who, who played Martha Jones ", 
              options: ["Freema Agyeman", 
                        "Mandip Gill", 
                        "David Tennant", 
                        "Tom Baker"], 
            answer: 1 
            },
            { 
              q: "Who was the winner of Get Me Out Of Here in 2003", 
              options: ["Dougie Poynter", 
                        "Tom Blackburn", 
                        "Vicky Pattison", 
                        "Phil Tufnell"], 
            answer: 4
            },
      ],
      index:0,
      load:function(){                                                                        // Load Question with options and call function and display Question in Quiz.html page
           if(this.index<=this.questions.length-1){
              quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
              op1.innerHTML=this.questions[this.index].options[0];
              op2.innerHTML=this.questions[this.index].options[1];
              op3.innerHTML=this.questions[this.index].options[2];
              op4.innerHTML=this.questions[this.index].options[3];
                 this.scoreCard();
              }
              else{
                                                                                            // Questions And then display results with Correct and wrong Options
                $("#questionBox").empty();
                app.questions.forEach(myFunction);
                function myFunction(get_question, index) {
                  var count = 1;
                  $("#questionBox").append(`<div class="question_c">`+(index+1)+` .`+get_question['q']+`</div>`);
                  // alert(get_question.answer);
                  get_question.options.forEach(sub_options);
                  function sub_options(question_options, index_sub) {

                    if(get_question.answer == (index_sub+1)){
                      $("#questionBox").append(`<li class="answer_correct">`+question_options+`</li>`);
                      
                    }else{
                      if(get_question.answer != question_answer[index] && question_answer[index] == count){
                        $("#questionBox").append(`<li class="answer_wrong">`+question_options+`</li>`);
                       
                      }else{
                        $("#questionBox").append(`<li>`+question_options+`</li>`);

                      }
                    }
                    count++;
                  }
                }


              // quizBox.innerHTML="Quiz Over......!!!"      
              op1.style.display="none";
              op2.style.display="none";
              op3.style.display="none";
              op4.style.display="none";
              $('#btnNext').hide();
              }
      },
       next:function(){                                                     // Call function when the user clicks the next question button then the next question will display.
          this.index++;
          this.load();
       },
      check:function(ele){                                                 // Check Correct and wrong answers when the user selects options.
         
               var id=ele.id.split('');
               console.log(id[id.length-1]);
               if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                ele.innerHTML="Correct";
                this.scoreCard();
               }
               else{
                ele.className="wrong";
                ele.innerHTML="Wrong";
                // question_answer.push("Wrong");
               }
                question_answer.push(id[id.length-1]);
      },
      notClickAble:function(){
             for(let i=0;i<ul.children.length;i++){
                  ul.children[i].style.pointerEvents="none";
             }
      },

      clickAble:function(){
             for(let i=0;i<ul.children.length;i++){
                  ul.children[i].style.pointerEvents="auto";
                  ul.children[i].className=''

             }
      },
      score:0,  
      scoreCard:function(){                                               // Add Score and display the result when the user click correct answer
        scoreCard.innerHTML=this.score+"/"+this.questions.length;

      }

 }

 window.onload=app.load();                                                // Load display when the page will load
  var number = 1;
   function button(ele){
         app.check(ele);
         app.notClickAble();
 }

function  handleNextQuestion(){                                         // Call Next Question Function
    number +=1;
    if((app.questions.length) >= number){
      document.getElementById('question_number').innerHTML=number;

    }
    app.next();
    app.clickAble();
    $('#btnNext').prop('disabled', true);
    $('#btnNext').addClass('disable_none');

} 
$('.choice_container').click(function (e) {                             // The next Question button will disabled when clicking the next question button.
    $('#btnNext').prop('disabled', false);
    $('#btnNext').removeClass('disable_none');
});
document.getElementById('total_question').innerHTML=app.questions.length;
document.getElementById('question_number').innerHTML=number;


