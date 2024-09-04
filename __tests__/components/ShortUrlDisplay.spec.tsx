import { render } from '@testing-library/react';
import { ShortUrlDisplay } from '@/components/ShortUrlDisplay';

describe('ShortUrlDisplay Component', () => {
  it('should render short URL', () => {
    const shortUrl = 'https://api.example.com/a1b2c3';
    const { getByText } = render(<ShortUrlDisplay shortUrl={shortUrl} />);

    expect(getByText('Shortened URL:')).toBeInTheDocument();
    expect(getByText(shortUrl)).toBeInTheDocument();
    expect(getByText(shortUrl).getAttribute('href')).toEqual('https://api.example.com/a1b2c3');
  });
});