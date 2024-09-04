import styles from '@/styles/url_shortener_form.module.scss';
import { Props } from '@/interfaces/UrlShortenerForm.interface';
import { useUrlShortener } from '@/hooks/useUrlShortener';
import { URL_SHORTENER_FORM_COMPONENT_CONSTANT } from '@/constants';

export const UrlShortenerForm: React.FC<Props> = ({ onShorten }) => {
  const { shortenUrl, isLoading, error } = useUrlShortener();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const url = formData.get('url')?.toString() || '';

    const result = await shortenUrl(url);
    if (result) {
      onShorten(result);
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="url"
        placeholder={URL_SHORTENER_FORM_COMPONENT_CONSTANT.placeholder}
        required
        className={styles.input}
        name='url'
      />
      <button type="submit" disabled={isLoading} className={styles.button}>
        {isLoading
          ? URL_SHORTENER_FORM_COMPONENT_CONSTANT.loadingLabel
          : URL_SHORTENER_FORM_COMPONENT_CONSTANT.buttonLabel
        }
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};