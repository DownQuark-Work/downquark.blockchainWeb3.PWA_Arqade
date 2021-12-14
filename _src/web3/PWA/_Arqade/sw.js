const sendNewTaskNotification = (o, n) => {
  (JSON.parse(o).length < JSON.parse(n).length) && sendNotification({
    cb: () => { console.log('TODO: integrate true push notifications:https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications'); },
    id: `NOTIFICATION[NEW_TASK]_${new Date().getTime()}`,
    opts: { type: 'basic', iconUrl: './assets/images/levelshare-updated-icon.png', title: 'A New Task Awaits! ⏱', message: 'Rewards are Waiting for those who Complete the Challenge' },
  });
  chrome.action.setBadgeText({ text: '' + (JSON.parse(n).length || '') }, () => { console.log('set with', n); });
};
const sendIndexNotification = (o, n) => {
  // only search on what's relevant
  if (o['tasks.notifications'] !== n['tasks.notifications']) { // send successful reminder addition notification
    console.log('o,nFROM SEND', o, n);
    sendNotification({
      cb: () => { console.log('TODO: integrate true alarms to have this work'); },
      id: `NOTIFICATION[NEW_REMINDER]_${new Date().getTime()}`,
      opts: { type: 'basic', iconUrl: './assets/images/levelshare-updated-icon.png', title: '⏱ Your Reminder Has Been Set', message: 'You will now be notified when it is time to take action!' },
    });
  }
};

const notificationMap = {
  local: {
    'tasks.unstarted': (o, n) => sendNewTaskNotification(o, n),
    'INDEXED_DB': (o, n) => sendIndexNotification(o, n),
  },
  sync: {}
};

const sendNotification = (msg) => {
  chrome.notifications.create(msg.id, msg.opts, msg.cb);
};

const handleTaskExtensionInteraction = (o, n) => {
  console.log('o.n HANDLETASSKEXT', o.n);
  if (n.replace(/[\W\d]*/g, '') === 'INIT') {
    console.log('iniitZX');
    console.log('window', window, window.postMessage);
    // sendNotification({
    //   cb: () => { },
    //   id: `TASK_EXTENSION[INIT]_${new Date().getTime()}`,
    //   opts: { type: 'basic', iconUrl: './assets/images/levelshare-updated-icon.png', title: '⏱ Your Reminder Has Been Set', message: 'You will now be notified when it is time to take action!' },
    // })
  }
};

const interactionMap = {
  local: {
    'TASK_EXTENSION': (o, n) => handleTaskExtensionInteraction(o, n),
  },
  sync: {}
};



/*
// 'TASK_EXTENSION': (o, n) => sendTaskExtensionNotification(o, n),
// const sendTaskExtensionNotification = (o, n) =>
// {
//   if (n.replace(/[\W\d]* deleteTHeseSpaces /g, '') === 'INIT')
//   {
//     // sendNotification({
//     //   cb: () => { },
//     //   id: `TASK_EXTENSION[INIT]_${new Date().getTime()}`,
//     //   opts: { type: 'basic', iconUrl: './assets/images/levelshare-updated-icon.png', title: '⏱ Your Reminder Has Been Set', message: 'You will now be notified when it is time to take action!' },
//     // })
//   }
// }

/*
if (hasRun) { return }
  hasRun = true;
  const qs = document.querySelectorAll('h4.question-title-container')
  qs.forEach(itm => {
    const rangeVal = Math.ceil(Math.random() * 60) + 15; itm.innerHTML += `
      <br/><br/>
      <input type="range" min="1" max="100" value="${rangeVal}" class="slider" id="myRange"> <u>${rangeVal}</u> points
      <br/>* Can prepoulated these based on Machine Learning: What they set similar questions to last time, what other team members set similar questions to, etc..
      `
  })
  document.querySelector(('form[name="surveyForm"] button[data-submit-page-button]')).onclick = function (e) {
    e.preventDefault(); e.stopPropagation();
    confirm(`..:: LEVELSHARE::.. says
    Behind the scenes we would be taking this data - without the user knowing it and seamlessly forward their input once we had what we needed`)
  }
*/

const debugChages = (type, changes, namespace) => {
  for (var key in changes) {
    console.log('key in changes', key in changes);
    var storageChange = changes[key];
    console.log('[DEBUG] Storage key "%s" in namespace "%s" changed. ', key, namespace);
    console.log('Old value was:', storageChange.oldValue);
    console.log('new value is:', storageChange.newValue);
  }
};

const Debug = 1,
  Notification = (changes, namespace) => {
    debugChages('Notification', changes, namespace);
    for (var key in changes) {
      const { oldValue, newValue } = changes[key];
      notificationMap[namespace] && notificationMap[namespace][key]
        && notificationMap[namespace][key](oldValue, newValue);
    }
  },
  Interaction = (changes, namespace) => {
    debugChages('Interaction', changes, namespace);
    for (var key in changes) {
      const { oldValue, newValue } = changes[key];
      interactionMap[namespace] && interactionMap[namespace][key]
        && interactionMap[namespace][key](oldValue, newValue);
    }
  };

const Controller = {
  Debug,
  Notification,
  Interaction
};

// ~/Documents/_dev/_levelshare/frontend/template/ExtensionChrome/_notes/.ignored/ChromeExtensionSamples/api/idle
// IDLE / Wakeup

chrome.runtime.onStartup.addListener((a, b, c) => {
  console.log('a,b,c', a, b, c);
  console.log('STARTUP');

});

chrome.runtime.onSuspend.addListener((a, b, c) => {
  console.log('a,b,c', a, b, c);
  console.log('suzpend');

});

// https://developer.chrome.com/docs/extensions/reference/runtime/
chrome.runtime.onInstalled.addListener(() => {
  // console.log('SERVICE WORKER SELF', self); // <--service worker?
  //BELOW NOTIFICATION WORKS
  // self.chrome.notifications.create(`tester_${new Date().getTime()}`, { type: 'basic', iconUrl: './assets/images/levelshare-updated-icon.png', title: 'Install', message: 'successful' }, () => { });
  console.log('installed');
  self.chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (sender.tab) {
      var tabId = sender.tab.id;
      if (tabId in connections) {
        connections[tabId].postMessage(request);
      } else {
        console.log("Tab not found in connection list.");
      }
    } else {
      console.log("sender.tab not defined.");
    }
    console.log('MSG', { message, sender, sendResponse });
  });

  // chrome.runtime.onMessageExternal.addListener((msg, sender, resp) => {
  //   console.log('msg,sender,resp', msg, sender, resp);
  // })

});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  Controller.Notification(changes, namespace);
  Controller.Interaction(changes, namespace);
});

chrome.runtime.onConnect.addListener(() => { console.log("SERVICE WORKER CONNECTED"); });
chrome.runtime.onStartup.addListener(() => { console.log("SERVICE WORKER STARTUP"); });
// NOTE:
// `chrome.action` relates to the icon in the browser bar
// `chrome.action.show()` enables the icon so the extension can be used

////workers
// self.addEventListener("pushsubscriptionchange", event => {
//   event.waitUntil(swRegistration.pushManager.subscribe(event.oldSubscription.options)
//     .then(subscription => {
//       return fetch("register", {
//         method: "post",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//           endpoint: subscription.endpoint
//         })
//       });
//     })
//   );
// }, false);



// https://example.com/serviceworker.js
// this.onpush = event => {
//   console.log(event.data);
//   // From here we can write the data to IndexedDB, send it to any open
//   // windows, display a notification, etc.
// }

// // https://example.com/webapp.js
// // inside an async function...
// try {
//   const serviceWorkerRegistration = await navigator.serviceWorker.register(
//     "serviceworker.js"
//   );
//   const pushSubscription = await serviceWorkerRegistration.pushManager.subscribe();
//   // The push subscription details needed by the application
//   // server are now available, and can be sent to it using,
//   // for example, an XMLHttpRequest.
//   console.log(pushSubscription.endpoint);
//   console.log(pushSubscription.getKey("p256dh"));
//   console.log(pushSubscription.getKey("auth"));
// } catch (err) {
//   // In a production environment it might make sense to
//   // also report information about errors back to the
//   // application server.
//   console.log(error);
// }

// chrome.action.onClicked.addListener(function (tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.scripting.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });

// chrome.runtime.onMessage.addListener(({ type, name }) => {
//   if (type === "set-name") {
//     chrome.storage.local.set({ tst: name });
//     console.log('SET', name);
//   }
// });

// chrome.action.onClicked.addListener((tab) => {
//   chrome.storage.local.get(["tst"], ({ tst }) => {
//     chrome.tabs.sendMessage(tab.id, { tst });
//   });
// });
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: '*://*.surveymonkey.com/*' },
      })
      ],
      actions: [new chrome.declarativeContent.RequestContentScript({ js: ['./assets/js/content-scripts/interaction-handler.js'] })]
    }]);
});
// chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//   chrome.declarativeContent.onPageChanged.addRules([
//     // {conditions:[pageUrl: CHECK FOR 3RD PARTY APPS TO SCRAPE THE WEBPAGE HERE, actions: scrape and change page forms]}
//     {
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         // pageUrl: { hostEquals: 'developer.chrome.com' },
//         pageUrl: { hostEquals: '*://*/*' },
//       })
//       ],
//       actions: [new chrome.declarativeContent.ShowAction(), new chrome.declarativeContent.RequestContentScript({ js: ['assets/js/content-scripts/persist-storage.js'] })]
//     }]);
// });

// Listening to the runtime.Port.onDisconnect event will give insight to when open ports are closing.
// Manually close them with runtime.Port.disconnect.


// THE BELOW will handle most of the icon notification updates, etc
// https://developer.chrome.com/docs/extensions/reference/action/
// https://github.com/GoogleChrome/developer.chrome.com//blob/main/site/en/docs/extensions/mv3/migrating_to_service_workers/index.md
// https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#executing-arbitrary-strings

// below for badge updates
// chrome.action.setIcon({ path: 'chrome-extension://fgahijkgkpokeafimgnfgdpjcjfjdihd/assets/images/levelshare-updated-icon.png' }, () => { })
// chrome.action.setBadgeText({ text: 'lvlshr' }, () => { alert('look at the icon') })
// chrome.action.setBadgeBackgroundColor({ color: [0, 255, 0, 0] },  // Green
//   (e) => { console.log(e, '3 New') })/
console.log('chrome.runtime.onInstalled.hasListeners', chrome.runtime.onInstalled.hasListeners);
console.log('self.chrome.runtime.onMessage', self.chrome.runtime.onMessage.hasListener(d => console.log(d)));
