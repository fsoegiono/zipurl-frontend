import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { UrlShortenerForm } from '@/components/UrlShortenerForm';
import { useUrlShortener } from '@/hooks/useUrlShortener';

interface mockShortenUrlProps {
  mockShortenUrlValue?: string;
  error?: string;
}

jest.mock('@/hooks/useUrlShortener');

const mockOnShorten = jest.fn();

describe('UrlShortenerForm', () => {
  const setupMockShortenUrl = (
    {
      mockShortenUrlValue = '',
      error = ''
    } : mockShortenUrlProps
  ) => {
    const shortenUrl = jest.fn().mockResolvedValue(mockShortenUrlValue);
    (useUrlShortener as jest.Mock).mockReturnValue({
      shortenUrl,
      isLoading: false,
      error,
    });
  
    return shortenUrl;
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render form and handle submission', async () => {
    const mockShortenUrl = setupMockShortenUrl({
      mockShortenUrlValue: 'https://api.example.com/a1b2c3',
    });

    const { getByPlaceholderText, getByText } = render(<UrlShortenerForm onShorten={mockOnShorten} />);

    const input = getByPlaceholderText('Enter URL to shorten');
    const submitButton = getByText('Shorten');

    act(() => {
      fireEvent.change(input, { target: { value: 'https://example.com' } });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(mockShortenUrl).toHaveBeenCalledWith('https://example.com');
      expect(mockOnShorten).toHaveBeenCalledWith('https://api.example.com/a1b2c3');
    });
  });

  it('should display error message when shortening fails', async () => {
    setupMockShortenUrl({
      error: 'An error occurred while shortening the URL',
    });

    const { getByPlaceholderText, getByText } = render(<UrlShortenerForm onShorten={mockOnShorten} />);

    const input = getByPlaceholderText('Enter URL to shorten');
    const submitButton = getByText('Shorten');

    act(() => {
      fireEvent.change(input, { target: { value: 'https://example.com' } });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(getByText('An error occurred while shortening the URL')).toBeInTheDocument();
    });
  });
});