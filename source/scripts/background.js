import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(() => {
  // eslint-disable-next-line no-console
  console.log('onInstalled');
});

browser.runtime.onMessage.addListener((_request, _sender, _sendResponse) => {
  // Do something with the message!
  // And respond back to the sender.
  return Promise.resolve('all good here');
});
