(function () {
      var button = document.getElementById('copy-email');
      var status = document.getElementById('copy-status');
      var email = 'farairudokapopo@gmail.com';
      button.addEventListener('click', function () {
        if (!navigator.clipboard) {
          status.textContent = email;
          return;
        }
        navigator.clipboard.writeText(email).then(function () {
          status.textContent = 'Email copied to clipboard.';
          window.setTimeout(function () { status.textContent = ''; }, 2600);
        }, function () {
          status.textContent = email;
        });
      });
    }());
