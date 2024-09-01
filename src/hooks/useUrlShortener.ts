import { useState } from 'react';
import { shortenUrl } from '@/utils/api';

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
      setError('An error occurred while shortening the URL');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { shortenUrl: shortenUrlHandler, isLoading, error };
};