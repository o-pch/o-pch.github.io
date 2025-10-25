import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import config from './config'
import ScreenshotGallery from './components/ScreenshotGallery'
import DownloadLink from './components/DownloadLink'

export default function App(){
  const { t, i18n } = useTranslation()

  function changeLang(lng){
    i18n.changeLanguage(lng)
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="downloads">
          <h2>{t('about.title')}</h2>
          <p>
            {t('about.desc')}
          </p>
          <p>
            <a
              id="youtubeChannel"
              className={config.youtubeUrl ? 'yt-btn' : 'yt-btn disabled'}
              href={config.youtubeUrl || '#'}
              title={t('about.youtube')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('about.youtube')}
            >
              <span className="yt-icon material-icons">play_circle_filled</span>
              <span className="yt-text">{config.youtubeUrl ? t('about.youtube') : t('channel_placeholder')}</span>
            </a>
          </p>
        </section>

        <section id="myrpg" className="container myrpg">
          <h2>{t('myrpg_title')}</h2>
          <p>{t('myrpg_desc')}</p>

          <p>
            <a
              className={config.myrpgPlaylist ? 'yt-btn' : 'yt-btn disabled'}
              href={config.myrpgPlaylist || '#'}
              title={t('myrpg_playlist')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="yt-icon material-icons">playlist_play</span>
              <span className="yt-text">{t('myrpg_playlist')}</span>
            </a>
          </p>

          <ScreenshotGallery visibleCount={4} />

          <h3>{t('demo')}</h3>
          <div className="download-grid">
            <div className="download-card card">
              <h4>{t('rom')}</h4>
              <p className="filename">{config.downloads.rom.split('/').pop()}</p>
              <DownloadLink href={config.downloads.rom}>{t('download_button')}</DownloadLink>
            </div>

            <div className="download-card card">
              <h4>{t('windows')}</h4>
              <p className="filename">{config.downloads.windows.split('/').pop()}</p>
              <DownloadLink href={config.downloads.windows}>{t('download_button')}</DownloadLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} pch</div>
      </footer>
    </div>
  )
}
