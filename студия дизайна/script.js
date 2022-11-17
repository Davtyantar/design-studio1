function prehover() {
    const prev = document.getElementById('prev');
    // prev.setAttribute('src', 'https://img.icons8.com/dotty/80/000000/circled-chevron-left.png');
  }
  
 function prenothover() {
    const prev = document.getElementById('prev');
    prev.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/000000/circled-chevron-left.png');
  }
  
  function nexthover() {
    const next = document.getElementById('next');
    // next.setAttribute('src', 'https://img.icons8.com/dotty/80/000000/circled-chevron-right.png');
  }
  
  function nextnothover() {
    const next = document.getElementById('next');
    next.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/000000/circled-chevron-right.png');
  }
  
  let startFrame = 0;
  showFrames(startFrame);

  function nextFrame() {
      showFrames(startFrame += 1);
  }
  
  function prevFrame() {
      showFrames(startFrame -= 1);  
  }
  
  function showFrames(changeTo) {
      let slides = document.getElementsByClassName("slide");
      
      if (changeTo > slides.length) {
        startFrame = 1
      }
      if (changeTo < 1) {
          startFrame = slides.length
      }
    
      for (let slide of slides) {
          slide.style.display = "none";
      }   
      slides[startFrame - 1].style.display = "block"; 
  }