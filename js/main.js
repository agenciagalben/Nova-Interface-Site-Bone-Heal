/*--- SCROLL REVEAL ANIMATION ---*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home-title',{}); 
sr.reveal('.home-paragraph',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home-img',{delay: 400}); 
sr.reveal('.home-social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/ 
sr.reveal('.about-cards',{delay: 400}); 
sr.reveal('.about-container',{delay: 400}); 

/*SCROLL ACTION*/
sr.reveal('.action',{}); 
sr.reveal('.action-motive',{delay: 200}); 
sr.reveal('.motive-list',{interval: 400});

/*SCROLL ASSESSMENTS*/
sr.reveal('.assessments',{interval: 200}); 
sr.reveal('.assessments-button',{interval: 400}); 

/*SCROLL PRODUCTS*/
sr.reveal('.products',{interval: 200});  

/*SCROLL EXPERTS*/
sr.reveal('.group-experts',{interval: 400}); 

/*SCROLL AWARDS*/
sr.reveal('.awards',{interval: 200}); 