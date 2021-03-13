import axiosApi from '../api/axiosApi';

export async function convertToShort(url) {
    const { data } = await axiosApi.post('/short', { url });
    return data.shortUrl;
}
