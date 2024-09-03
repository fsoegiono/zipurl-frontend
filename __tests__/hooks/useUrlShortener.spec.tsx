import { renderHook, act, waitFor } from '@testing-library/react';
import { useUrlShortener } from '@/hooks/useUrlShortener';
import { shortenUrl } from '@/utils/api';

jest.mock('@/utils/api');

describe('useUrlShortener', () => {
  const mockShortenUrl = shortenUrl as jest.MockedFunction<typeof shortenUrl>;

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should successfully shorten URL', async () => {
    mockShortenUrl.mockResolvedValue('https://api.example.com/a1b2c3');
    const { result } = renderHook(() => useUrlShortener())

    act(() => {
      result.current.shortenUrl('https://example.com');
    })

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy;
      expect(result.current.error).toEqual("");
      expect(mockShortenUrl).toHaveBeenCalledWith('https://example.com');
    });
  });

  it('should handle error when shortening URL fails', async () => {
    mockShortenUrl.mockRejectedValue(new Error('API Error'));
    const { result } = renderHook(() => useUrlShortener());

    act(() => {
      result.current.shortenUrl('https://example.com');
    })

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy;
      expect(result.current.error).toEqual('An error occurred while shortening the URL');
    });
  });
});