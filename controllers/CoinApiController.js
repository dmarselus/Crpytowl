const axios = require('axios');
import Constants from 'expo-constants';

const coinApiInstance = axios.create({
	baseURL: 'https://rest.coinapi.io/v1/',
	// timeout: 2000,
	headers: {
		'X-CoinAPI-Key': Constants.manifest.extra.coinApiKey,
		Accept: 'application/json'
	}
});
function getTypeIsCrypto({type_is_crypto}) {
	return type_is_crypto
}

function sortByVolume_1_Mth_Usd(a,b) {
	return b?.volume_1mth_usd-a?.volume_1mth_usd
}
export function getTopCoins() {
	// https://docs.coinapi.io/#list-all-assets-get

	return coinApiInstance
		.get(`assets/`,)
		.then((resp) => {
			// console.log(resp);
			if(resp?.status === 200) {
                return resp?.data.filter(getTypeIsCrypto).sort(sortByVolume_1_Mth_Usd)

            }
		})
		.catch((e) => console.error(e));
}

export function getTopCoinsImage() {
	// https://docs.coinapi.io/#list-all-assets-get

	return coinApiInstance
		.get(`assets/icons/75`,)
		.then((resp) => {
			// console.log(resp);
			if(resp?.status === 200) {
                return resp?.data

            }
		})
		.catch((e) => console.error(e));
}





// export function get
