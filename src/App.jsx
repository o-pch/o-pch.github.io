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

  function getYouTubeEmbedUrl(url){
    if(!url) return ''
    // match common YouTube URL forms (youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID)
    const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/)
    if(m && m[1]) return `https://www.youtube.com/embed/${m[1]}?rel=0`
    // fallback: return original URL (may not embed correctly)
    return url
  }

  function getYouTubeId(url){
    if(!url) return null
    const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/)
    return m && m[1] ? m[1] : null
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
          <p>
            {t('myrpg_desc').split('\n').map((line, idx, arr) => (
              <React.Fragment key={idx}>
                {line}
                {idx < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>

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

          {config.playDemoMovie ? (
            <VideoEmbed url={config.playDemoMovie} title={t('demo')} />
          ) : null}

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
              <a className="repo-link" href="https://github.com/o-pch/SameBoy" target="_blank" rel="noopener noreferrer" aria-label={t('source_repo')}>
                <svg className="repo-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.01-1.96-3.2.7-3.88-1.55-3.88-1.55-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .95-.3 3.11 1.18A10.8 10.8 0 0112 6.8c.96.01 1.93.13 2.83.38 2.16-1.48 3.11-1.18 3.11-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.41-5.29 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
                </svg>
                <span className="repo-text">{t('source_repo')}</span>
              </a>
            </div>
          </div>

          <h2>{t('tools_title')}</h2>
          <h3>{t('used_tools_title')}</h3>
          <ul className="used-tools-list">
            <li><a href="https://github.com/gbdk-2020/gbdk-2020">GBDK-2020</a></li>
            <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
            <li><a href="https://www.getpaint.net/">Paint.net</a></li>
            <li><a href="https://musescore.org/en">MuseScore Studio 4</a></li>
            <li><a href="https://emulicious.net/">Emulicious</a></li>
            <li><a href="https://github.com/gbdk-2020/GBTD_GBMB">GBTD_GBMB</a></li>
            <li><a href="https://takabosoft.com/edge">EDGE</a></li>
          </ul>

          <h3>{t('custom_tools_title')}</h3>
          <div className="tools-grid">
            <div className="tool-card card">
              <h4>Tilemap Studio Custom</h4>
              <p>{t('tool_tilemap_studio_desc')}</p>
              <a className="repo-link" href="https://github.com/o-pch/tilemap-studio-custom" target="_blank" rel="noopener noreferrer" aria-label="Tilemap Studio Custom repository">
                <svg className="repo-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.01-1.96-3.2.7-3.88-1.55-3.88-1.55-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .95-.3 3.11 1.18A10.8 10.8 0 0112 6.8c.96.01 1.93.13 2.83.38 2.16-1.48 3.11-1.18 3.11-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.41-5.29 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
                </svg>
                <span className="repo-text">GitHub</span>
              </a>
            </div>

            <div className="tool-card card">
              <h4>GIMP Tilemap GB Custom</h4>
              <p>{t('tool_gimp_tilemap_desc')}</p>
              <a className="repo-link" href="https://github.com/o-pch/gimp-tilemap-gb-custom" target="_blank" rel="noopener noreferrer" aria-label="GIMP Tilemap GB Custom repository">
                <svg className="repo-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.01-1.96-3.2.7-3.88-1.55-3.88-1.55-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .95-.3 3.11 1.18A10.8 10.8 0 0112 6.8c.96.01 1.93.13 2.83.38 2.16-1.48 3.11-1.18 3.11-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.41-5.29 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
                </svg>
                <span className="repo-text">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">© {new Date().getFullYear()} pch</div>
          <div className="footer-social">
            <strong>{t('social.title')}:</strong>
            <div className="footer-links">
              {config.xUrl ? (
                <a className="footer-link" href={config.xUrl} target="_blank" rel="noopener noreferrer">
                  <img className="social-icon x" src="/icons/x-logo-white.png" alt="X" />
                  <span>{t('social.x')}</span>
                </a>
              ) : (
                <span className="footer-placeholder">
                  <img className="social-icon x" src="/icons/x-logo-white.png" alt="X" />
                  <span>{t('social.x')} {t('social.placeholder')}</span>
                </span>
              )}

              {config.discordUrl ? (
                <a className="footer-link" href={config.discordUrl} target="_blank" rel="noopener noreferrer">
                  <img className="social-icon discord" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d80db9971f10a9757c99_Symbol.svg" alt="Discord" />
                  <span>{t('social.discord')}</span>
                </a>
              ) : (
                <span className="footer-placeholder">
                  <img className="social-icon discord" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d80db9971f10a9757c99_Symbol.svg" alt="Discord" />
                  <span>{t('social.discord')} {t('social.placeholder')}</span>
                </span>
              )}

              {config.metamaskAddress ? (
                <span className="footer-link">
                  <img className="social-icon metamask" src="https://images.ctfassets.net/clixtyxoaeas/1ezuBGezqfIeifWdVtwU4c/d970d4cdf13b163efddddd5709164d2e/MetaMask-icon-Fox.svg" alt="MetaMask" />
                  <span>{t('social.metamask')}: {config.metamaskAddress}</span>
                </span>
              ) : (
                <span className="footer-placeholder">
                  <img className="social-icon metamask" src="https://images.ctfassets.net/clixtyxoaeas/1ezuBGezqfIeifWdVtwU4c/d970d4cdf13b163efddddd5709164d2e/MetaMask-icon-Fox.svg" alt="MetaMask" />
                  <span>{t('social.metamask')} {t('social.placeholder')}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


function VideoEmbed({url, title}){
  const [loaded, setLoaded] = React.useState(false)

  const extractId = (u) => {
    if(!u) return null
    // if the config provides just the 11-char ID, accept it
    const idOnly = u.match(/^([A-Za-z0-9_-]{11})$/)
    if(idOnly) return idOnly[1]
    const m = u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/)
    return m && m[1] ? m[1] : null
  }

  const id = extractId(url)
  const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null
  const embed = id ? `https://www.youtube.com/embed/${id}?rel=0` : (url || '')

  if(!url) return null

  return (
    <div className="video-embed card">
      {!loaded ? (
        <div
          className="video-poster"
          role="button"
          tabIndex={0}
          onClick={()=>setLoaded(true)}
          onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLoaded(true) } }}
          aria-label={title || 'Play video'}
        >
          {thumb ? <img src={thumb} alt={title || 'Video'} /> : <div className="video-poster-fallback">{title || 'Play'}</div>}
          <div className="play-overlay"><span className="material-icons">play_circle_filled</span></div>
        </div>
      ) : (
        <iframe
          src={embed}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}
