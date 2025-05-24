import ExternalHttp from '@/services/http';

const useHttpApi = (baseUrl = process.env.NEXT_PUBLIC_COIN_GECKO_BASE_URL) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!baseUrl || !apiKey) {
    throw new Error('baseUrl and apiKey are required');
  }

  return new ExternalHttp({
    baseUrl,
    apiKey,
  });
};

export default useHttpApi;
