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
	// https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsHistorical
	return cmcInstance
		.get(`cryptocurrency/listings/historical`)
		.then((resp) => {
			console.log(resp)
			if(resp?.status === 200) return resp?.data
		})
		.catch((e) => console.error(e));
}
// export function get
