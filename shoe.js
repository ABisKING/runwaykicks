var img = document.getElementsByTagName('IMG');
 
var slideShow = function() {
  if (!img[0].classList.contains('hide')) {
    img[0].classList.add('hide');
  } else if (!img[1].classList.contains('hide')) {
    img[1].classList.add('hide');
  } else if (!img[2].classList.contains('hide')) {
    img[2].classList.add('hide');
  }else if (!img[3].classList.contains('hide')) {
    img[3].classList.add('hide');}
    else if (!img[4].classList.contains('hide')) {
        img[4].classList.add('hide');}
        else if (!img[5].classList.contains('hide')) {
            img[5].classList.add('hide');} 
  else {
    img[0].classList.remove('hide');
    img[1].classList.remove('hide');
    img[2].classList.remove('hide');
    img[3].classList.remove('hide');
    img[4].classList.remove('hide');
   
  }
};
 
var reverse = function() {
    if (img[5].classList.contains('hide')) {
        img[5].classList.remove('hide');}
       else if (img[4].classList.contains('hide')) {
            img[4].classList.remove('hide');}
           else if (img[3].classList.contains('hide')) {
                img[3].classList.remove('hide');}
  else if (img[2].classList.contains('hide')) {
    img[2].classList.remove('hide');
  } else if (img[1].classList.contains('hide')) {
    img[1].classList.remove('hide');
  } else if (img[0].classList.contains('hide')) {
    img[0].classList.remove('hide');
  } else {
    img[5].classList.add('hide');
    img[4].classList.add('hide');
    img[3].classList.add('hide');
    img[2].classList.add('hide');
    img[1].classList.add('hide');
    img[0].classList.add('hide');

  }
}
 
var start = setInterval(slideShow, 3000);
 
 
