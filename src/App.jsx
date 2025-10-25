import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'

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
            {t('youtube')}: <a id="youtubeChannel" href="#" title={t('youtube')}>{t('channel_placeholder')}</a>
          </p>

          <h3>{t('myrpg')}</h3>
          <ul>
            <li>{t('rom')}: <a href="files/gb-myrpg-release-MyRPGDemo202507.zip">gb-myrpg-release-MyRPGDemo202507.zip</a></li>
            <li>{t('windows')}: <a href="files/MyRPGDemo202507_Windows.zip">MyRPGDemo202507_Windows.zip</a></li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} pch</div>
      </footer>
    </div>
  )
}
