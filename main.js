images= document.querySelectorAll(".portfolio-image");
for (var i = 0; i < images.length; i++) {
  let span = document.createElement('span');
  span.className = "navigation-btn";
  span.setAttribute("btnNumber", (i+1));
  $(".navigation").append(span);
}


function selectSize(number, event) {
  $(".navigation-btn").removeClass('active');
  $(".navigation-btn:eq("+(number-1)+")").addClass('active');
  elementList = document.querySelectorAll(".portfolio-image");
  for (var i = 0; i < elementList.length; i++) {
    elementList[i].style = "width: 0; margin: 0;";
    $("[number="+i+"]").addClass("none");
  }

  $("[number="+number+"]").removeClass("none");
  event.width(''+ 100 +'%');
}

function next(objectNumber) {
  if (objectNumber == 6) {
    objectNumber = 1;
  } else {
    objectNumber++;
  }
  console.log(objectNumber);
  selectSize(objectNumber, $("[number="+objectNumber+"]"));
  return objectNumber;
}

$(".portfolio-image").click( function() {
  if ($(".navigation").attr("class") == "active") {
    $(".next-btn").removeClass("active");
    $(".navigation").removeClass("active");
  }
  $(".next-btn").addClass("active");
  $(".navigation").addClass("active");

  num = $(this).attr('number');
  console.log(num);
  selectSize(num, $(this));
});

$(".next-btn").click( function() {
  num = next(num);
});

$(".navigation-btn").click( function() {
  btnNum = $(this).attr('btnNumber');
  selectSize(btnNum, $("[number="+btnNum+"]"));
});

$(".contact-btn").click( function() {
  $(this).toggleClass('active');
  $(".overflow-info").toggleClass('active');
  $(".call-information").toggleClass('active');
  $("body").toggleClass('hidden');
  $(".dark-screen").toggleClass('active');
});

$(".contact-btn-mobile").click( function() {
  $(this).addClass('active');
  $("body").addClass('hidden');
  $(".dark-screen").addClass('active');
  $(".call-information-mobile").addClass('active');
  $(".contact-info-mobile").addClass('active');
  $(".to-top").addClass('active');
});

$(".dark-screen").click( function() {
  $(this).removeClass('active');
  $(".contact-btn-mobile").removeClass('active');
  $("body").removeClass('hidden');
  $(".call-information-mobile").removeClass('active');
  $(".contact-info-mobile").removeClass('active');
  $(".to-top").removeClass('active');
});

$(".to-top").click( function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});

$(".to-top-footer").click( function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});

function selectSizeMobile(number, event) {
  elementList = document.querySelectorAll(".portfolio-image-mobile");
  for (var i = 0; i < elementList.length; i++) {
    elementList[i].style = "width: 0; height: 0;";
  }
  $(".clicked");
}

function selectDefaultSizeMobile(){
  elementList = document.querySelectorAll(".portfolio-image-mobile");
  for (var i = 0; i < elementList.length; i++) {
    elementList[i].style = "width: 50%; height: 65vw;";
  }
}

window.addEventListener('scroll', function() {
  if ((document.body.clientHeight - pageYOffset - window.innerHeight) < 390) {
    console.log(document.body.clientHeight - pageYOffset - window.innerHeight);
    $(".contact-btn-mobile").addClass('hidden');
  } else {
    $(".contact-btn-mobile").removeClass('hidden');
  }
});


$(".portfolio-image-mobile").click( function() {
  if (!$(this).hasClass('clicked')) { // если класса нет
    $(this).addClass('clicked'); // добавляем класс
    $(".next-btn-mobile").addClass("active");
    num = $(this).attr('number');
    console.log(num);
    selectSizeMobile(num, $(this));
  } else { // если есть
    $(this).removeClass('clicked'); // убираем класс
    selectDefaultSizeMobile();
  }
});
