import React, { useEffect, useState } from 'react'

// ScreenshotGallery
// - Tries to auto-import images placed under src/assets/images/myrpg/screenshots
//   using Vite's import.meta.glob (fast, works at build-time).
// - If none are found, it attempts to fetch /images/myrpg/screenshots/index.json
//   which should contain an array of filenames (e.g. ["shot1.png","shot2.png"]).
//   This fallback works if images are placed in public/images/myrpg/screenshots/.

export default function ScreenshotGallery({ className }){
  const [images, setImages] = useState([])

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

  if(images.length===0) return null

  return (
    <div className={"screenshot-gallery " + (className||'')}>
      {images.map((src,i)=> (
        <figure className="screenshot-item" key={i}>
          <img src={src} alt={`screenshot-${i+1}`} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}
