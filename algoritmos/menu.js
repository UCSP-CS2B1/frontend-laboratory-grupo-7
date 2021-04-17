$(document).ready(main);
var contador=1;

funtion main(){
  $('.menu').click(funtion(){
      if(contador==1){
          $('nav').animate({
             left:'0'
          });
          contador=0;
      }
      else{
          contador=1;
          $('nav').animate({
             left:'-100%'
          });
      }
  });
}
