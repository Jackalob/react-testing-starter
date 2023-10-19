import { getImgs } from '@/app/lib/data'
import { notFound } from 'next/navigation'
import Gallery from '@/app/components/Gallery/Gallery'
import type { ShareableImg } from '@/types/ShareableImg'

async function Home() {
  const images = await getImgs() as ShareableImg[]
  if (!images) {
    notFound()
  }
  return (
    <Gallery images={images} />
  )
}

export default Home