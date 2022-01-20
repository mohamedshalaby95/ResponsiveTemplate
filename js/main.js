let callActionOfSet=$(".call-action").offset().top;
 
$(window).scroll(function(){

  let scrollValue=$(window).scrollTop();
  


// start top button 

if(scrollValue>callActionOfSet){
  $(".goto-top").fadeIn(1000);
 
  $('.countfect').each(function(){var $this=$(this),countTo=$this.attr('data-num');delayTo=$this.attr('delay');if(!delayTo){delayTo=8000}$({countNum:$this.text()}).animate({countNum:countTo},{duration:delayTo,easing:'linear',step:function(){$this.text(Math.floor(this.countNum));},complete:function(){$this.text(this.countNum);}});});
}
else{
  $(".goto-top").fadeOut(1000);
}


// end top button 



})
// start top button  click

$(".goto-top").click(function(){
  

    
  $("html").animate({scrollTop : 0},"slow");

})

// start top button  click

// make nav bar in section v 

var  list=document.getElementsByClassName('section-7-nav');
var listImages=document.getElementsByClassName('shufel-item')


function makeActive(e){

 for(let i=0;i<list.length;i++) {
  list[i].classList.remove('active');
 }

e.classList.add('active')

for(let i=0;i<listImages.length;i++){
 
  listImages[i].style.display='block';

}


switch(e.id){

 
case 'commercial-list':
  for(let i=0;i<listImages.length;i++){
    if(i!=2 ){
     listImages[i].style.display='none';
     
    }
  
 
  }
  break;
  case 'education-list':
    for(let i=0;i<listImages.length;i++){
    
      if(i!=4 &&i!=3){
       listImages[i].style.display='none';
       
      }
      else{
        listImages[i].style.display='block';
      }
    
   
    }
    break;
    case 'goverment-list':
      for(let i=0;i<listImages.length;i++){
       
        if(i!=4 ){
         listImages[i].style.display='none';
         
        }
        else{
          listImages[i].style.display='block';
        }
      
     
      }
      break;
      case 'infstructure-list':
        
        for(let i=0;i<listImages.length;i++){
        
          if(i!=2 &&i!=3&&i!=4 ){
           listImages[i].style.display='none';
           
          }
          else{
            listImages[i].style.display='block';
          }
        
       
        }
        break;
        case 'healthcare-list':
          for(let i=0;i<listImages.length;i++){
           
            if(i!=0 &&i!=1 ){
             listImages[i].style.display='none';
             
            }
            else{
              listImages[i].style.display='block';
            }
          
         
          }
          break;

          case 'restidential-list':
            for(let i=0;i<listImages.length;i++){
           
              if(i!=5 ){
               listImages[i].style.display='none';
               
              }
              else{
                listImages[i].style.display='block';
              }
            
           
            }
            break;

}

}


