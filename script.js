document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.reg-form').forEach(function (form) {
    const confirmMsg = form.nextElementSibling;
    const boxes = [...form.querySelectorAll('input[type="checkbox"]')];
    const error = form.querySelector('.form-error');

    boxes.forEach(function (b) {
      b.addEventListener('change', function () { if (error) error.hidden = true; });
    });

    form.addEventListener('submit', function (e) {
      if (boxes.length && !boxes.some(function (b) { return b.checked; })) {
        e.preventDefault();
        if (error) error.hidden = false;
        return;
      }
      setTimeout(function () { form.reset(); }, 0);
      if (confirmMsg && confirmMsg.classList.contains('reg-confirm')) {
        form.hidden = true;
        confirmMsg.hidden = false;
        setTimeout(function () {
          confirmMsg.hidden = true;
          form.hidden = false;
        }, 7000);
      }
    });
  });

  document.querySelectorAll('[role="tablist"]').forEach(function (tabList) {
    const tabs = [...tabList.querySelectorAll('.tb-tab')];
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          const selected = t === tab;
          t.setAttribute('aria-selected', String(selected));
          t.tabIndex = selected ? 0 : -1;
          document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
        });
      });
    });
  });
});
