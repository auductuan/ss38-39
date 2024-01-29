document.addEventListener('DOMContentLoaded', function () {
    const bgImage = document.getElementById('img');
    const loadingText = document.getElementById('text');
    let loadProgress = 0;

    const a = 20; 
    const b = 2000; 
    const c = b / a;
    const d= 10;
    
    let iterationCount = 0;

    const intervalId = setInterval(function () {
      iterationCount++;
      loadProgress = iterationCount / c * 100;
      loadingText.innerText = `${Math.round(loadProgress)}%`;
      
      bgImage.style.filter = `blur(${d* (1 - iterationCount / c)}px)`;

      if (iterationCount >= c) {
        clearInterval(intervalId);
        loadingText.style.opacity = '0';
        setTimeout(() => loadingText.remove(), 2000);
      }
    }, a);
});
