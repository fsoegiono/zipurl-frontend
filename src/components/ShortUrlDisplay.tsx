import styles from '@/styles/short_url_display.module.scss';
import { Props } from '@/interfaces/ShortUrlDisplay.interface';
import { SHORT_URL_DISPLAY_COMPONENT_CONSTANT } from '@/constants';

export const ShortUrlDisplay: React.FC<Props> = ({ shortUrl }) => {
  return (
    <div className={styles.container}>
      <p>{SHORT_URL_DISPLAY_COMPONENT_CONSTANT.label}</p>
      <a href={shortUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {shortUrl}
      </a>
    </div>
  );
};