import * as Notifications from "expo-notifications";

const launchWorkoutNotification = async time => {
	const notificationBody = [
		{
			content: {
				title: "🥋 Boa!",
				body:
					"Você finalizou um treino hoje com o Faixa Preta hoje! Não perca o foco para poder ver sua evolução no futuro.",
			},
			trigger: {
				seconds: 600,
			},
		},
		{
			content: {
				title: "🏅 Isso aí",
				body:
					"Você finalizou um treino com mais de meia hora hoje! Continue assim!",
			},
			trigger: {
				seconds: 600,
			},
		},
		{
			content: {
				title: "🏆 Show!",
				body:
					"Você finalizou um treino com mais de 1 hora de duração. Continue assim!",
			},
			trigger: {
				seconds: 600,
			},
		},
		{
			content: {
				title: "🔥 Eita!",
				body:
					"Você finalizou um treino com mais de 1 hora e meia de duração. Não pare agora!",
			},
			trigger: {
				seconds: 600,
			},
		},
	];

	await Notifications.cancelAllScheduledNotificationsAsync();

	if (time >= "5400000") {
		await Notifications.scheduleNotificationAsync(notificationBody[3]);
	} else if (time >= "3600000") {
		await Notifications.scheduleNotificationAsync(notificationBody[2]);
	} else if (time >= "1800000") {
		await Notifications.scheduleNotificationAsync(notificationBody[1]);
	} else {
		await Notifications.scheduleNotificationAsync(notificationBody[0]);
	}
};

const launchActivityNotification = async () => {
	await Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldShowAlert: true,
			shouldPlaySound: false,
			shouldSetBadge: false,
		}),
	});

	await Notifications.scheduleNotificationAsync({
		content: {
			title: "Executando",
			body: "Toque para voltar para a atividade em execução.",
			autoDismiss: false,
			sticky: true,
			color: "#0071bc",
		},
		trigger: null,
	});
};

const dismissActivityNotification = async () => {
	await Notifications.dismissAllNotificationsAsync();
};

export {
	launchWorkoutNotification,
	launchActivityNotification,
	dismissActivityNotification,
};
