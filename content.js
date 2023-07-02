(function() {
  'use strict';

  function removeYoodle() {
    var yoodle = document.querySelector('.ytd-statement-banner-renderer');
    if (yoodle) {
      yoodle.style.display = 'none';
    }
  }

  removeYoodle();

  // Observe the page for changes and remove the yoodle if it appears dynamically
  var observer = new MutationObserver(removeYoodle);
  observer.observe(document.body, { childList: true, subtree: true });
})();
