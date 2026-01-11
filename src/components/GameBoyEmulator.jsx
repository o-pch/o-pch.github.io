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
    window.EJS_gameName = romPath.split('/').pop()
    window.EJS_gameUrl = absoluteRomUrl
    window.EJS_biosUrl = ''
    window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/'
    // Use Japanese language (ja-JA.json is available in CDN)
    window.EJS_language = 'ja-JA'
    window.EJS_startOnLoaded = true
    window.EJS_AdTimer = -1

    window.EJS_Buttons = {
      playPause: false,
      restart: false,
      mute: false,
      settings: false,
      fullscreen: true,
      saveState: false,
      loadState: false,
      screenRecord: false,
      gamepad: false,
      cheat: false,
      volume: true,
      saveSavFiles: true,
      loadSavFiles: true,
      quickSave: false,
      quickLoad: false,
      screenshot: false,
      cacheManager: false,
      exitEmulation: false
    }

    window.EJS_VirtualGamepadSettings = [
    {
        type: "button",
        text: "A",
        id: "a",
        location: "right",
        left: 81,
        top: 120,
        bold: true,
        input_value: 8
    },
    {
        type: "button",
        text: "B",
        id: "b",
        location: "right",
        left: 20,
        top: 120,
        bold: true,
        input_value: 0
    },
    //Note- the dpad and the zone will overlap in this example, this is just to show what it should look like.
    {
        type: "dpad",
        location: "left",
        left: "50%",
        right: "50%",
        joystickInput: false,
        inputValues: [4, 5, 6, 7]
    },
    {
        type: "button",
        text: "Start",
        id: "start",
        location: "right",
        left: 80,
        fontSize: 15,
        block: true,
        input_value: 3
    },
    {
        type: "button",
        text: "Select",
        id: "select",
        location: "right",
        left: 20,
        fontSize: 15,
        block: true,
        input_value: 2
    }
]

    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    // Only set VirtualGamepadSettings for mobile devices
    if (isMobile) {
      window.EJS_VirtualGamepadSettings = [
        {
            type: "button",
            text: "A",
            id: "a",
            location: "right",
            left: 81,
            top: 120,
            bold: true,
            input_value: 8
        },
        {
            type: "button",
            text: "B",
            id: "b",
            location: "right",
            left: 20,
            top: 120,
            bold: true,
            input_value: 0
        },
        {
            type: "dpad",
            location: "left",
            left: "50%",
            right: "50%",
            joystickInput: false,
            inputValues: [4, 5, 6, 7]
        },
        {
            type: "button",
            text: "Start",
            id: "start",
            location: "right",
            left: 80,
            fontSize: 15,
            block: true,
            input_value: 3
        },
        {
            type: "button",
            text: "Select",
            id: "select",
            location: "right",
            left: 20,
            fontSize: 15,
            block: true,
            input_value: 2
        }
      ]
    }

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
