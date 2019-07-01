
TweenMax.from(".wrapper .cardShadow .circle1", 1.5, {
   scale:0.5,
   transformOrigin:'top left',
    opacity: 0,
    ease: Expo.easeInOut
 });

 TweenMax.from(".wrapper .cardShadow .circle2", 1.5, {
   scale:0.5,
   transformOrigin:'bottom right',
    opacity: 0,
    ease: Expo.easeInOut
 });

 TweenMax.staggerFrom(".block1 form > *",1, {
   y:-50,
   scale:0.5,
    opacity: 0,
    ease: Expo.easeInOut
 },0.2);



function rotateit(){
   
      TweenMax.to(".wrapper .cardShadow .block1", 1, {
         rotation:360,
         transformOrigin:'bottom right',
         opacity: 0,
         ease: Expo.easeInOut
      });
      TweenMax.to(".wrapper .cardShadow .block2", 1, {
         rotation:360,
         opacity: 1,
         ease: Expo.easeInOut
      });
      TweenMax.staggerFrom(".block2 form > *",1, {
         y:-50,
         delay:0.5,
         scale:0.5,
         opacity: 0,
         ease: Expo.easeInOut
       },0.2);
       TweenMax.from(".wrapper .cardShadow .circle1", 1.5, {
         scale:0.5,
         transformOrigin:'top left',
          opacity: 0,
          ease: Expo.easeInOut
       },'-=1');
      
       TweenMax.from(".wrapper .cardShadow .circle2", 1.5, {
         scale:0.5,
         transformOrigin:'bottom right',
          opacity: 0,
          ease: Expo.easeInOut
       },'-=1');
  

}

function rotateit1(){
   
      TweenMax.to(".wrapper .cardShadow .block2", 1, {
         rotation:180,
         opacity:0,
         ease: Expo.easeInOut
      });
      TweenMax.to(".wrapper .cardShadow .block1", 1, {
         rotation:0,
         opacity:1,
         ease: Expo.easeInOut
      });
      TweenMax.staggerFrom(".block1 form > *",1, {
         y:-50,
         delay:0.5,
         scale:0.5,
          opacity: 0,
          ease: Expo.easeInOut
       },0.2);
       TweenMax.from(".wrapper .cardShadow .circle1", 1.5, {
         scale:0.5,
         transformOrigin:'top left',
          opacity: 0,
          ease: Expo.easeInOut
       },'-=1');
      
       TweenMax.from(".wrapper .cardShadow .circle2", 1.5, {
         scale:0.5,
         transformOrigin:'bottom right',
          opacity: 0,
          ease: Expo.easeInOut
       },'-=1');
}

