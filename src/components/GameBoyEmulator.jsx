import React, { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function GameBoyEmulator({ romPath = 'files/myrpg_demo_release.gb' }) {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Wait for the DOM element to be ready before loading the script
    const gameContainer = document.getElementById('gameboy-container')
    if (!gameContainer) {
      console.error('Game container not found in DOM')
      return
    }

    // Convert relative ROM path to absolute URL
    const absoluteRomUrl = new URL(romPath, window.location.origin).href

    // Set global EmulatorJS variables
    window.EJS_player = '#gameboy-container'
    window.EJS_core = 'gb'
    window.EJS_gameUrl = romPath
    window.EJS_biosUrl = ''
    window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/'
    // Use Japanese language (ja-JA.json is available in CDN)
    window.EJS_language = 'ja-JA'
    window.EJS_startOnLoaded = true

    // Create a unique ID for the loader script to avoid duplicates
    const loaderId = 'emulatorjs-loader'
    
    // Check if loader is already loaded
    if (!document.getElementById(loaderId)) {
      const script = document.createElement('script')
      script.id = loaderId
      script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js'
      script.async = false
      script.onload = () => {
        setLoading(false)
      }
      script.onerror = () => {
        setError('Failed to load EmulatorJS')
        setLoading(false)
      }
      document.head.appendChild(script)
    }

    return () => {
      // Don't remove the script on cleanup to prevent reload
    }
  }, [romPath])

  if (error) {
    return <div className="emulator-error">{error}</div>
  }

  return (
    <div className="gameboy-emulator" ref={containerRef}>
      <div
        id="gameboy-container"
        style={{
          width: '640px',
          height: '480px',
          maxWidth: '100%',
          margin: '0 auto',
          backgroundColor: '#000'
        }}
      >
        {loading && <div className="emulator-loading">Loading emulator...</div>}
      </div>
    </div>
  )
}
