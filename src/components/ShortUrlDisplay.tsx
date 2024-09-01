import styles from '@/styles/short_url_display.module.scss';
import { Props } from '@/interfaces/ShortUrlDisplay.interface';

export const ShortUrlDisplay: React.FC<Props> = ({ shortUrl }) => {
  return (
    <div className={styles.container}>
      <p>Shortened URL:</p>
      <a href={shortUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {shortUrl}
      </a>
    </div>
  );
};