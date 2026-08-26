const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {tab.classList.remove('is-active')});
    tab.classList.add('is-active');

    const dataTab = tab.dataset.tab;
    //console.log(dataTab)

    tabsContent.forEach(tabContent => {
      const dataTabContent = tabContent.dataset.tabContent;
      tabContent.classList.toggle('is-active', dataTab === dataTabContent);
    })
  })
})
