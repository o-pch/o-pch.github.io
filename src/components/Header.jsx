import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header(){
  const { t, i18n } = useTranslation()

  function changeLang(lng){
    i18n.changeLanguage(lng)
  }

  return (
    <header className="site-header header-component">
      <div className="container header-inner">
        <a className="logo-link" href="./index.html">
          <img src="./images/aho.svg" alt="logo" className="logo-img" />
        </a>
        <div className="brand-title">{t('title')}</div>
        <div className="spacer" />
        <div className="header-actions">
          <button className="md-btn" onClick={()=>changeLang('ja')}>日本語</button>
          <button className="md-btn secondary" onClick={()=>changeLang('en')} style={{marginLeft:8}}>EN</button>
        </div>
      </div>
    </header>
  )
}
