module.exports = (app) => {
	return {
		prod: {
			token: 'MTAzODk2MDMyOTcxNzE5ODk2OA.G2fbAX.EJaI3MNbFe7hQzTXDG_1BDthSl1Lt2yB_yHe6A',
		},

		prefix: '!',

		embeds: {
			info: {
				color: 'BLUE',
			},
			error: {
				color: 'RED',
			},
			footer: 'Tracker v1',
		},

		products_category: '', // create a category in your server and put its id inside here

		shop_channel_name: (shop_url) =>
			`├${shop_url.split('.')[0]}`,
	};
};
