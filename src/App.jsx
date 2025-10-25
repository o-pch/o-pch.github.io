import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import config from './config'
import ScreenshotGallery from './components/ScreenshotGallery'

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
          <h2>{t('links')}</h2>
          <p>
            {t('youtube')}: <a id="youtubeChannel" href={config.youtubeUrl || '#'} title={t('youtube')} target="_blank" rel="noopener noreferrer">{t('channel_placeholder')}</a>
          </p>
        </section>

        <section id="myrpg" className="container myrpg">
          <h2>{t('myrpg_title')}</h2>
          <p>{t('myrpg_desc')}</p>

          <ScreenshotGallery />

          <h3>{t('demo')}</h3>
          <ul>
            <li>{t('rom')}: <a href={config.downloads.rom}>{config.downloads.rom}</a></li>
            <li>{t('windows')}: <a href={config.downloads.windows}>{config.downloads.windows}</a></li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} pch</div>
      </footer>
    </div>
  )
}
