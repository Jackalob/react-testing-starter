'use client'

import React, { createContext, useContext, useState } from "react"

type GalleryContextProps = {
  dialogStatus: boolean;
  setDialogStatus: (dialogStatus: boolean) => void
  embedUrl: string;
  setEmbedUrl: (embedUrl: string) => void
}

const GalleryContext = createContext({} as GalleryContextProps)

export const useGalleryContext = () => {
  return useContext(GalleryContext)
}

function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [dialogStatus, setDialogStatus] = useState(false)
  const [embedUrl, setEmbedUrl] = useState('')

  return <GalleryContext.Provider value={{ dialogStatus, setDialogStatus, embedUrl, setEmbedUrl }}>{children}</GalleryContext.Provider>
}

export default GalleryProvider