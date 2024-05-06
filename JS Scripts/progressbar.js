// Function to update the progress bar width based on loading progress
function updateProgressBar() {
    const progressBar = document.getElementById('myBar');
    if (!progressBar) return;
  
    const loadingProgress = calculateLoadingProgress();
    progressBar.style.width = loadingProgress + '%';
  }
  
  // Function to calculate loading progress
  function calculateLoadingProgress() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    const domContentLoadedTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    const totalLoadTime = performance.timing.loadEventEnd - performance.timing.domLoading;
    const loadingProgress = (domContentLoadedTime / loadTime) * 100;
  
    return loadingProgress;
  }
  
  // Event listeners to update the progress bar on DOMContentLoaded and load events
  document.addEventListener('DOMContentLoaded', updateProgressBar);
  window.addEventListener('load', updateProgressBar);