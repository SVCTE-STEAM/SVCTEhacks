document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.reg-form').forEach(function (form) {
    const confirmMsg = form.nextElementSibling;
    if (confirmMsg && confirmMsg.classList.contains('reg-confirm')) {
      form.addEventListener('submit', function () {
        form.hidden = true;
        confirmMsg.hidden = false;
      });
    }
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
