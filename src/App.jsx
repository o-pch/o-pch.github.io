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
      <div style={{position:'absolute', right:20, top:12}}>
        <button onClick={()=>changeLang('ja')}>日本語</button>
        <button onClick={()=>changeLang('en')} style={{marginLeft:8}}>EN</button>
      </div>

      <main className="container">
        <section className="downloads">
          <h2>{t('about.title')}</h2>
          <p>
            {t('about.desc')}
          </p>
          <p>
            {t('about.youtube')}: <a id="youtubeChannel" href={config.youtubeUrl || '#'} title={t('about.youtube')} target="_blank" rel="noopener noreferrer">{t('channel_placeholder')}</a>
          </p>
        </section>

        <section id="myrpg" className="container myrpg">
          <h2>{t('myrpg_title')}</h2>
          <p>{t('myrpg_desc')}</p>

          <ScreenshotGallery />

          <h3>{t('demo')}</h3>
          <ul>
            <li>{t('rom')}: <DownloadLink href={config.downloads.rom}>{config.downloads.rom.split('/').pop()}</DownloadLink></li>
            <li>{t('windows')}: <DownloadLink href={config.downloads.windows}>{config.downloads.windows.split('/').pop()}</DownloadLink></li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} pch</div>
      </footer>
    </div>
  )
}
