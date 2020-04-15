$(document).ready(function () {
  var now = new Date();
  var pointTime = new Date( now.getFullYear(), now.getMonth(), now.getDate(), 19, 30, 00 );

  var rDay = new Date().getDay(); // 3 января 2014 года

//rDay = 5;
  if (rDay >= 1 ) {
    $('.records-nav li:nth-child(1)').addClass('open');
  } 
  
  if (rDay >= 2 && rDay < 3 && now >= pointTime || rDay == 3 && now < pointTime) {
    $('.records-nav li:nth-child(1)').addClass('open');
    $('.records-nav li:nth-child(2)').addClass('open');
  }
  
  if (rDay == 3 && now >= pointTime || rDay > 3) {
    $('.records-nav li').addClass('open');
  }





if(rDay >0) {
   var today = new Date(),
        saturday = new Date( today.getFullYear(), today.getMonth(), today.getDate() + 6 - today.getDay(), 23, 55, 00 );
  $('.records-nav .open:first-child').addClass('active');
   $('.video iframe').attr('src', $('.records-nav .open:first-child').data('video'));
}else{
  $('.records-nav li').removeClass('open');
  $('.video iframe').attr('src', 'https://www.youtube.com/embed/Vi5jl9Wi5Rc1');
}

  
  
  $('.records-nav .open').click(function(){
    $('.records-nav .open').removeClass('active');
    $(this).addClass('active');
    $('#video').attr('src', $(this).data('video'));
  })
  var note = $('#note'),
//    ts = new Date($('#countdown').data('date').replace(/ /g, "T")), //new Date(year, month, date, hours, minutes, seconds, ms)
    ts = saturday;


  $('#countdown').countdown({
    timestamp: ts,
    callback: function (days, hours, minutes, seconds) {

    }
  });
  $('.countDays').append('<span class="title">дней</span>');
  $('.countHours').append('<span class="title">часов</span>');
  $('.countMinutes').append('<span class="title">минут</span>');
  $('.countSeconds').append('<span class="title">секунд</span>');


  /*
    
    function getWeekDay(date) {
    var days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
  }
  switch (getWeekDay(date)) {
    case 'ПН':
      $('.records-nav li:nth-child(1)').addClass('open');
      break;
    case 'ВТ':
      
       $('.records-nav li:nth-child(1)').addClass('open');
       $('.records-nav li:nth-child(2)').addClass('open');
      break;
    case 'СР':
      
      $('.records-nav li').addClass('open');
      break;
    default:
      alert( "Нет таких значений" );
  }
  */







});
