chrome.action.onClicked.addListener(async () => {
    let url = 'https://app.ziteboard.com'
    let tab = await chrome.tabs.create({ url });

});