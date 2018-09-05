const api = require('./api')
let _survey_id = null;

const showSurveys = () => {
  $('#div-main').fadeIn(); $('#div-details-survey,#div-detail').hide();
}

/* create survey modal */
const showModalCreateSurvey = () => {

  $('#modal-create-survey').modal({
    backdrop: 'static',
    keyboard: false
  });
  $('#div-main').fadeIn(); $('#div-details-survey,#div-detail').hide();
  setTimeout(function(){ $('#txt-name-survey').focus() }, 800);
}
// surveys
const createNewSurvey = (event) => {
  event.preventDefault()

  let data = {
    "survey": {
      "name": $('#txt-name-survey').val(),
      "link": "/survey.html",
      "status": "Active"
    }
  }

  $('#create-survey-form').hide(); $('#create-survey-questions').fadeIn(); $('#txt-question-one').focus();

  console.log(data)
  api.createSurvey(data)
    .then((result) => {
      _survey_id = result.survey._id;

    })
    .catch((error) => {

    });

}
/* questions */
const createQuestions = (event) => {
  event.preventDefault()

  let data = {
    "question": {
      "questionOne": $('#txt-question-one').val(),
      "questionTwo": $('#txt-question-two').val(),
      "questionThree": $('#txt-question-three').val(),
      "questionFour": $('#txt-question-four').val(),
      "questionFive": $('#txt-question-five').val(),
      "survey_id": _survey_id
    }
  }

  $('#modal-create-survey').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();

  api.createQuestions(data)
    .then((result) => {
      showUserSurveys();

    })
    .catch((error) => {

    });

}
const showUserSurveys = () => {

  api.getUserSurveys()
     .then((data) => {

       if(data.surveys.length > 0) {

        $('#table-surveys > tbody').empty();
        $('#show-div-surveys').fadeIn();

          $.each(data.surveys, (index, element) => {

            $('#table-surveys > tbody').append('<tr><td>' + element._id + '</td><td><span class="text-info">' + element.name + '</span></td><td><a href=' + element.link + ' target="_blank"' + '>Send link</a></td><td><span class="text-info">' + element.status + '</span></td><td><button id="btn-select-project' + index + '" type="button" class="btn btn-danger btn-fill btn-xs pull-right"><i class="fa fa-clone"></i>Show details</button></td></tr>');

              $('#btn-select-project' + index).click(function (e) {
                  e.preventDefault();
                  $('#div-main,#show-div-stories').hide(); $('#div-details-survey').fadeIn();
                  $('#span-survey-name').html('<i class="fa fa-file-powerpoint-o icon-project" aria-hidden="true"></i>&nbsp; ' + element.name);

                  _survey_id = element._id;
              });
         });

       } else {
        $('#show-div-surveys').hide();
        console.log('this guy do not have surveys')
       }

     })
     .catch((error) => {
       console.log(error)
     });
}
const showDetail = () => {


  api.getSurveyQuestions(_survey_id)
     .then((result) => {

       if(result.questions.length > 0) {

          $('#div-detail').fadeIn();
          $('#ul-survey-questions').empty();

          $('#ul-survey-questions').append('<li>' + result.questions[0].questionOne + '</li>');
          $('#ul-survey-questions').append('<li>' + result.questions[0].questionTwo + '</li>');
          $('#ul-survey-questions').append('<li>' + result.questions[0].questionThree + '</li>');
          $('#ul-survey-questions').append('<li>' + result.questions[0].questionFour + '</li>');
          $('#ul-survey-questions').append('<li>' + result.questions[0].questionFive + '</li>');

          api.getSurveyResponses(_survey_id)
            .then((result) => {

              if(result.responses.length > 0) {

                  $('#table-survey-responses > tbody').empty();

                  $.each(result.responses, (index, element) => {
                    console.log(element.name)
                    $('#table-survey-responses > tbody').append('<tr><td><span class="text-danger">' + element.name + '</span></td><td>' + element.responseOne + '</td><td>' + element.responseTwo + '</td><td>' + element.responseThree + '</td><td>' + element.responseFour + '</td><td>' + element.responseFive + '</td><td>' + element.createdAt + '</td></tr>');

                  });

              } else {

              }

            })
            .catch((error) => {

            });

       } else {

       }

     })
     .catch((error) => {

     });
}
// window.onload = function(){

//   let surveyId = getUrlVars()["sid"]
//   if(surveyId !==  undefined) {

//     console.log(surveyId)

//       api.getSurveyQuestions(surveyId)
//         .then((result) => {
//           console.log(result)

//           if(result.questions.length > 0) {

//               $('#question-one').text(result.questions[0].questionOne);
//               $('#question-two').text(result.questions[0].questionTwo);
//               $('#question-three').text(result.questions[0].questionThree);
//               $('#question-four').text(result.questions[0].questionFour);
//               $('#question-five').text(result.questions[0].questionFive);

//           } else {

//           }

//         })
//         .catch((error) => {

//         });
//   }
//   else {
//     console.log('No Id')
//   }

// }
const getUrlVars = () => {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
  }
  return vars;
}
const saveResponse = (event) => {
  event.preventDefault();

  let data = {
    "response": {
      "name": $('#txt-name').val(),
      "responseOne": $('#response-one').val(),
      "responseTwo": $('#response-two').val(),
      "responseThree": $('#response-three').val(),
      "responseFour": $('#response-four').val(),
      "responseFive": $('#response-five').val(),
      "survey_id": getUrlVars()["sid"]
    }
  }



  api.createResponses(data)
    .then((result) => {

    })
    .catch((error) => {

    });


}
const addHandlers = () => {
  //modals handlers
  $('#show-modal-create-survey').on('click', showModalCreateSurvey);
  $('#create-survey-form').on('submit', createNewSurvey);
  $('#create-survey-questions').on('submit', createQuestions);
  $('#show-detail').on('click', showDetail);
  $('#survey-responses').on('submit', saveResponse);
  $('#mySurveys').on('click', showSurveys);


}

module.exports = {
  addHandlers,
  showUserSurveys
}
