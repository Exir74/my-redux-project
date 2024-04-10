import { UNSPLASH_KEY } from './const'

const getResponseData = res => {
	if (!res.ok) {
		return Promise.reject(res)
	}

	return res.json()
}

const getRandomPhoto = () => {
	return fetch('https://api.unsplash.com/photos/random', {
		method: 'GET',
		headers: {
			Authorization: `Client-ID ${'UNSPLASH_KEY'}`,
		},
	}).then(res => getResponseData(res))
}

export { getRandomPhoto }
