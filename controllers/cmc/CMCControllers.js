const axios = require('axios');
import Constants from 'expo-constants';

const cmcInstance = axios.create({
	baseURL: 'https://pro-api.coinmarketcap.com/v1/',
	timeout: 2000,
	headers: {
		'X-CMC_PRO_API_KEY': Constants.manifest.extra.cmcApiKey
	}
});

export function getTopCoins() {
	return cmcInstance
		.get(`cryptocurrency/map`, {params:{sort: "cmc_rank"}})
		.then((resp) => {
            // console.log(resp?.status, resp?.data)
			if(resp?.status === 200) return resp?.data
		})
		.catch((e) => console.error(e));
}
// export function get
