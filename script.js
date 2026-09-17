document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('reg-form');
  const confirmMsg = document.getElementById('reg-confirm');
  if (form && confirmMsg) {
    form.addEventListener('submit', function () {
      form.hidden = true;
      confirmMsg.hidden = false;
    });
  }

  document.querySelectorAll('[role="tablist"]').forEach(function (tabList) {
    const tabs = [...tabList.querySelectorAll('.tab-btn')];
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
