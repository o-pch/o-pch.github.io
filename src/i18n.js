import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ja: {
    translation: {
      title: 'pch',
      about: {
        title: 'このページについて',
        desc: 'このサイトは、pch（ピーシーエイチ）によって運営されています。主にゲームボーイ用の自作ソフトウェアの開発情報を提供しています。',
        youtube: 'YouTube チャンネル',
      },
      myrpg: 'MyRPG デモ版',
      myrpg_title: 'MyRPG',
      myrpg_desc: '制作中のゲームボーイ用ロールプレイングゲームです',
      demo: 'デモ版ダウンロード',
  download_button: 'ダウンロード',
    myrpg_playlist: '制作過程プレイリスト',
      rom: 'ROM 版',
      windows: 'Windows 実行ファイル',
      channel_placeholder: 'チャンネルを見る (URL を設定してください)'
    }
  },
  en: {
    translation: {
      title: 'pch',
      about: {
        title: 'About this site',
        desc: 'This site is operated by pch and provides information on the development of homebrew software for the Game Boy.',
        youtube: 'YouTube Channel',
      },
      myrpg: 'MyRPG Demo',
      myrpg_title: 'MyRPG',
      myrpg_desc: 'A role-playing game for Game Boy in development',
      demo: 'Download Demo',
  download_button: 'Download',
    myrpg_playlist: 'Development playlist',
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
