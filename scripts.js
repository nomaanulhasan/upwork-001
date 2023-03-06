const tabsWrapper = document.querySelector('.tabs-wrapper');
const tabsContainer = document.querySelector('.tabs-container');
const tabsContent = document.querySelector('.tabs-content');

const tabs = tabsContainer?.querySelectorAll('.tab');
const tabContent = tabsContent?.querySelectorAll('.content');

function updateTab(newTab) {
  if (newTab && newTab !== tabsWrapper.dataset.activeTab) {
    tabsWrapper.dataset.activeTab = newTab;

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
      tabContent[i].classList.remove('active');
      if (tabs[i].dataset.tabName === newTab) {
        tabs[i].classList.add('active');
      }
      if (tabContent[i].dataset.tabContent === newTab) {
        tabContent[i].classList.add('active');
      }
    }
  }
  return tabsWrapper?.dataset?.activeTab;
}

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    updateTab(e.target.dataset.tabName);
  });
});
