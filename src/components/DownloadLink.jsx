import React, { useEffect, useState } from 'react'

function formatBytes(bytes){
  if (!bytes && bytes !== 0) return ''
  const thresh = 1024
  if (Math.abs(bytes) < thresh) return bytes + ' B'
  const units = ['KB','MB','GB','TB']
  let u = -1
  do {
    bytes /= thresh
    ++u
  } while(Math.abs(bytes) >= thresh && u < units.length - 1)
  return bytes.toFixed(1) + ' ' + units[u]
}

function formatDate(d){
  try{
    const date = new Date(d)
    if (isNaN(date)) return ''
    return date.toLocaleString()
  }catch(e){ return '' }
}

export default function DownloadLink({ href, children }){
  const [meta, setMeta] = useState({size:null, mtime:null})

  useEffect(()=>{
    if(!href) return
    // Try HEAD request to get content-length and last-modified
    fetch(href, { method: 'HEAD' }).then(res=>{
      if(!res.ok) throw new Error('head failed')
      const len = res.headers.get('content-length')
      const lm = res.headers.get('last-modified')
      setMeta({ size: len ? parseInt(len,10) : null, mtime: lm || null })
    }).catch(()=>{
      // ignore errors; leave meta empty
    })
  },[href])

  return (
    <span className="download-link">
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
      {meta.size !== null && (
        <small style={{marginLeft:8,color:'var(--muted)'}}>({formatBytes(meta.size)})</small>
      )}
      {meta.mtime && (
        <small style={{marginLeft:8,color:'var(--muted)'}}>Updated: {formatDate(meta.mtime)}</small>
      )}
    </span>
  )
}
