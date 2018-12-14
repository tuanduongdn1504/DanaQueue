const OneSignal = window.OneSignal || [];
const PUSHNOTIFICATION_COMMAND = {
  'notification.displayed': 'show',
  'notification.clicked': 'clicked'
};

const init = () => {
  OneSignal.init({
    appId: process.env.REACT_APP_ONESIGNAL_APP_ID,
    autoRegister: false,
    allowLocalhostAsSecureOrigin: true,
    notifyButton: {
      enable: true
    },
    promptOptions: {
      actionMessage:
        "We'd like to show you notifications for the latest news and updates.",
      acceptButtonText: 'ALLOW',
      cancelButtonText: 'NO THANKS'
    }
  });
  if (Notification.permission === 'granted') {
    OneSignal.registerForPushNotifications();
  }
};

const getUserToken = messageHandler => {
  OneSignal.isPushNotificationsEnabled().then(isEnabled => {
    if (isEnabled) {
      OneSignal.getUserId().then(oneSignalUserId => {
        messageHandler({ oneSignalUserId, actionType: 'getUserId' });
        // OneSignal.push(['setSubscription', true]);
      });
    } else {
      OneSignal.registerForPushNotifications();
    }
  });
};

const onShowNotification = messageHandler => {
  navigator.serviceWorker.addEventListener('message', event => {
    messageHandler({
      ...event.data,
      actionType: PUSHNOTIFICATION_COMMAND[event.data.command]
    });
  });
};

export const initOneSignal = messageHandler => {
  OneSignal.push(() => {
    init();
    OneSignal.on('notificationPermissionChange', permissionChange => {
      const currentPermission = permissionChange.to;
      if (currentPermission === 'granted') {
        getUserToken(messageHandler);
      }
    });
    getUserToken(messageHandler);
    onShowNotification(messageHandler);
  });
};
