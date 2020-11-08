import React from 'react'
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function schedulePushNotification() {

    await Notifications.scheduleNotificationAsync();
}

const notificationData = [
    {
        content: {
            title: "🥋 Bora treinar!",
            body: 'Que tal finalizar a semana com um treino com o Faixa Preta?',
        },
        trigger: { 
            hour: 18,
            minute: 4,
            repeats: true
        }
    },
    {
        content: {
            title: "🥋 Bora treinar!",
            body: 'Que tal iniciar a semana com um treino com o Faixa Preta?',
        },
        trigger: { 
            hour: 18,
            minute: 4,
            repeats: true
        }
    }
]

const Wrapper = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}

export default Wrapper;