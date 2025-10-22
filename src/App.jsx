import React from 'react'

export default function App(){
  return (
    <div className="app">
      <header className="site-header">
        <div className="container">
          <h1>pch</h1>
        </div>
      </header>

      <main className="container">
        <section className="downloads">
          <h2>Links / ダウンロード</h2>
          <p>
            YouTube チャンネル: <a id="youtubeChannel" href="#" title="YouTube チャンネル（URL は後で追加）">チャンネルを見る (URL を設定してください)</a>
          </p>

          <h3>MyRPG デモ版</h3>
          <ul>
            <li>ROM 版: <a href="files/gb-myrpg-release-MyRPGDemo202507.zip">gb-myrpg-release-MyRPGDemo202507.zip</a></li>
            <li>Windows 実行ファイル: <a href="files/MyRPGDemo202507_Windows.zip">MyRPGDemo202507_Windows.zip</a></li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} pch</div>
      </footer>
    </div>
  )
}
