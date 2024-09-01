'use client'

import { useState } from 'react';
import { UrlShortenerForm } from '@/components/UrlShortenerForm';
import { ShortUrlDisplay } from '@/components/ShortUrlDisplay';
import styles from '@/styles/home.module.scss';

export default function Home() {
  const [shortUrl, setShortUrl] = useState<string>('');

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>URL Shortener</h1>
        
        <div className={styles.card}>
          <UrlShortenerForm onShorten={setShortUrl} />
          {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
        </div>
      </main>
    </div>
  );
}