document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('reg-form');
  const confirmMsg = document.getElementById('reg-confirm');
  if (!form || !confirmMsg) return;

  form.addEventListener('submit', function () {
    form.hidden = true;
    confirmMsg.hidden = false;
  });
});
