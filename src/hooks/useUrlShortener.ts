import { useState } from 'react';
import { shortenUrl } from '@/utils/api';
import { USE_URL_SHORTENER_HOOKS_CONSTANT } from '@/constants';

export const useUrlShortener = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shortenUrlHandler = async (url: string): Promise<string | null> => {
    setIsLoading(true);
    setError('');

    try {
      const shortUrl = await shortenUrl(url);
      return shortUrl;
    } catch (err) {
      setError(USE_URL_SHORTENER_HOOKS_CONSTANT.errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { shortenUrl: shortenUrlHandler, isLoading, error };
};