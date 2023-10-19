'use client'

import { Container, Typography, Grid } from '@mui/material'
import InfoCard from '@/app/components/InfoCard/InfoCard'
import SharedLinkDialog from '@/app/components/SharedLinkDialog/SharedLinkDialog'
import { useGalleryContext } from './GalleryProvider'
import type { ShareableImg } from '@/types/ShareableImg'

type IProps = {
  images: ShareableImg[]
}

function Gallery({ images }: IProps) {
  const { dialogStatus, setDialogStatus, embedUrl, setEmbedUrl } = useGalleryContext()

  const handleClickShareBtn = (id: string) => {
    const url = `https://example.com/images/${id}`;
    setDialogStatus(true)
    setEmbedUrl(url)
  }

  const handleCloseDialog = () => {
    setDialogStatus(false)
  }

  return (
    <>
      <main>
        <div className="pt-16 pb-12">
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
            >
              Shareable content
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              You can click share button to get a shared link.
            </Typography>
          </Container>

          <Container sx={{ paddingTop: 8, paddingBottom: 8 }} maxWidth="lg">
            <Typography
              variant="h4"
              color="textPrimary"
              sx={{ paddingTop: 4, paddingBottom: 4 }}
            >
              Shareable image content
            </Typography>
            <Grid container spacing={4}>
              {images?.map((image) => (
                <Grid item key={image.id} xs={12} sm={6} md={4}>
                  <InfoCard {...image} onClick={handleClickShareBtn} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <SharedLinkDialog open={dialogStatus} onClose={handleCloseDialog} embedUrl={embedUrl} />
    </>
  )
}

export default Gallery