import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header(){
  const { t } = useTranslation()
  return (
    <header className="site-header header-component">
      <div className="container header-inner">
        <a className="logo-link" href="./index.html">
          <img src="./images/aho.svg" alt="logo" className="logo-img" />
        </a>
        <div className="brand-title">{t('title')}</div>
        <div className="spacer" />
      </div>
    </header>
  )
}
