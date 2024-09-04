import { render, fireEvent, waitFor, act } from '@testing-library/react';
import Home from '@/app/page';
import { useUrlShortener } from '@/hooks/useUrlShortener';

jest.mock('@/hooks/useUrlShortener');

describe('Home Component - Root Page', () => {
  it('should render URL shortener form and display shortened URL', async () => {
    const mockShortenUrl = jest.fn().mockResolvedValue('https://api.example.com/a1b2c3');
    (useUrlShortener as jest.Mock).mockReturnValue({
      shortenUrl: mockShortenUrl,
      isLoading: false,
      error: '',
    });

    const { getByPlaceholderText, getByText } = render(<Home />);

    const input = getByPlaceholderText('Enter URL to shorten');
    const submitButton = getByText('Shorten');

    act(() => {
      fireEvent.change(input, { target: { value: 'https://example.com' } });
      fireEvent.click(submitButton);
    });
    
    await waitFor(() => {
      expect(getByText('https://api.example.com/a1b2c3')).toBeInTheDocument()
    })
  })
})