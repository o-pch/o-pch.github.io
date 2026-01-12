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
      myrpg_desc: '制作中のゲームボーイ用ロールプレイングゲームです\n制作過程をYouTubeで公開しています',
      demo: 'デモ版',
        download_button: 'ダウンロード',
        source_repo: 'ソース (GitHub)',
      myrpg_playlist: '制作過程プレイリスト',
      rom: 'ROM 版',
      windows: 'Windows 実行ファイル',
      channel_placeholder: 'チャンネルを見る (URL を設定してください)',
      tools_title: '開発環境',
      used_tools_title: '使用ツール',
      custom_tools_title: 'カスタム開発ツール',
      tool_tilemap_studio_desc: 'Tilemap Studio のカスタムバージョン。Bank番号指定や細かい利便性を向上させています。',
      tool_gimp_tilemap_desc: 'GIMP の Game Boy タイルマッププラグインのカスタムバージョン。png2gbtiles.exe実行時にBank指定を可能にしています。',
      keyboard: {
        legend: 'キー操作',
        dpad: '十字キー',
        a_button: 'Aボタン',
        b_button: 'Bボタン',
        start: 'スタート',
        select: 'セレクト'
      },
      social: {
        title: '連絡・ソーシャル',
        x: 'X (旧 Twitter)',
        discord: 'Discord',
        metamask: 'MetaMask アドレス',
        placeholder: '(未設定)'
      }
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
      myrpg_desc: 'A role-playing game for Game Boy in development\nThe development process is being shared on YouTube',
      demo: 'Demo Build',
        download_button: 'Download',
        source_repo: 'Source (GitHub)',
    myrpg_playlist: 'Development playlist',
      rom: 'ROM',
      windows: 'Windows executable',
      channel_placeholder: 'View channel (set URL)'
      ,
      tools_title: 'Development Tools',
      used_tools_title: 'Used Tools',
      custom_tools_title: 'Custom Tools',
      tool_tilemap_studio_desc: 'Custom version of Tilemap Studio, optimized for Game Boy development.',
      tool_gimp_tilemap_desc: 'Custom version of GIMP plugin for Game Boy tilemaps.',
      keyboard: {
        legend: 'Key Controls',
        dpad: 'D-Pad',
        a_button: 'A Button',
        b_button: 'B Button',
        start: 'Start',
        select: 'Select'
      },
      social: {
        title: 'Contact / Social',
        x: 'X (was Twitter)',
        discord: 'Discord',
        metamask: 'MetaMask address',
        placeholder: '(not set)'
      }
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
