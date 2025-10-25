import React, { useEffect, useState, useRef } from 'react'

// ScreenshotGallery
// - Tries to auto-import images placed under src/assets/images/myrpg/screenshots
//   using Vite's import.meta.glob (fast, works at build-time).
// - If none are found, it attempts to fetch /images/myrpg/screenshots/index.json
//   which should contain an array of filenames (e.g. ["shot1.png","shot2.png"]).
//   This fallback works if images are placed in public/images/myrpg/screenshots/.

export default function ScreenshotGallery({ className, visibleCount }){
  const [images, setImages] = useState([])
  const containerRef = useRef(null)
  const pointer = useRef({ down: false, startX: 0, scrollLeft: 0 })
  const [visible, setVisible] = useState(visibleCount || 2)

  useEffect(()=>{

    // 2) try to fetch index.json from public folder
    const idxUrl = '/images/myrpg/screenshots/index.json'
    fetch(idxUrl).then(r=>{
      if(!r.ok) throw new Error('no index')
      return r.json()
    }).then(list=>{
      if(Array.isArray(list) && list.length>0){
        const urls = list.map(n => `/images/myrpg/screenshots/${n}`)
        setImages(urls)
      }
    }).catch(()=>{
      // nothing found - keep empty
    })
  },[])

  // persist only when no `visibleCount` prop is provided
  useEffect(()=>{
    if(typeof visibleCount !== 'number'){
      try{ localStorage.setItem('galleryVisibleCount', String(visible)) }catch(e){}
    }
  },[visible, visibleCount])

  // If a numeric prop is provided, always follow it (reflect prop changes)
  useEffect(()=>{
    if(typeof visibleCount === 'number' && visibleCount > 0){
      setVisible(visibleCount)
    }
  },[visibleCount])

  if(images.length===0) return null

  const scrollByOffset = (offset) => {
    const el = containerRef.current
    if(!el) return
    // try to measure one slide (including gap) and scroll by that amount
    const first = el.querySelector('.screenshot-item')
    // try reading gap from CSS variable if present
  const cs = window.getComputedStyle(el)
    const gapValue = cs.getPropertyValue('--gallery-gap') || cs.getPropertyValue('gap') || '14px'
    const gap = parseInt(gapValue,10) || 14
    let amount = Math.round(el.clientWidth * 0.8) * offset
    if(first){
      amount = (first.offsetWidth + gap) * offset
    }
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  // Pointer drag handlers for touch / mouse
  function onPointerDown(e){
    const el = containerRef.current
    if(!el) return
    pointer.current.down = true
    pointer.current.startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    pointer.current.scrollLeft = el.scrollLeft
    el.setPointerCapture && el.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e){
    const el = containerRef.current
    if(!el || !pointer.current.down) return
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const dx = x - pointer.current.startX
    el.scrollLeft = pointer.current.scrollLeft - dx
  }

  function onPointerUp(e){
    pointer.current.down = false
  }

  return (
    <div className={"screenshot-gallery " + (className||'')}>
      <button aria-hidden className="gallery-btn prev" onClick={()=>scrollByOffset(-1)}>&lsaquo;</button>
      <div
  className="screenshot-track"
  ref={containerRef}
  style={{ '--gallery-visible-count': String((typeof visibleCount === 'number' && visibleCount > 0) ? visibleCount : visible), '--gallery-gap': '14px' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={(e)=>{
          // allow vertical wheel to scroll horizontally when over the gallery
          if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
            e.currentTarget.scrollLeft += e.deltaY
            e.preventDefault()
          }
        }}
      >
        {images.map((src,i)=> (
          <figure className="screenshot-item" key={i}>
            <img src={src} alt={`screenshot-${i+1}`} loading="lazy" />
          </figure>
        ))}
      </div>
      <button aria-hidden className="gallery-btn next" onClick={()=>scrollByOffset(1)}>&rsaquo;</button>
    </div>
  )
}
