import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ja: {
    translation: {
      title: 'pch',
      links: 'Links / ダウンロード',
      youtube: 'YouTube チャンネル',
  myrpg: 'MyRPG デモ版',
  myrpg_title: 'MyRPG',
  myrpg_desc: '制作中のゲームボーイ用ロールプレイングゲームです',
  demo: 'デモ版ダウンロード',
      rom: 'ROM 版',
      windows: 'Windows 実行ファイル',
      channel_placeholder: 'チャンネルを見る (URL を設定してください)'
    }
  },
  en: {
    translation: {
      title: 'pch',
      links: 'Links / Downloads',
      youtube: 'YouTube Channel',
  myrpg: 'MyRPG Demo',
  myrpg_title: 'MyRPG',
  myrpg_desc: 'A role-playing game for Game Boy in development',
  demo: 'Download Demo',
      rom: 'ROM',
      windows: 'Windows executable',
      channel_placeholder: 'View channel (set URL)'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
