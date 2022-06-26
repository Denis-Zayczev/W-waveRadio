const screenWidth = window.screen.width;
if (screenWidth < 575){
  numberAc = 4;
} else numberAc = 0;


new Accordion('.accordion', {
  duration: 400,
  openOnInit: [numberAc],
});


