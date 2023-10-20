import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Gallery from '../Gallery'
import GalleryProvider from '../GalleryProvider'
import { data } from '@/app/lib/data'

describe('Home', () => {
  describe('Render', () => {
    it('should render gallery & card', () => {
      render(
        <GalleryProvider>
          <Gallery images={data} />
        </GalleryProvider>
      )
      const mainText = screen.getByText('Shareable content')
      const titleText = screen.getByText(data[0].title)

      expect(mainText).toBeInTheDocument()
      expect(titleText).toBeInTheDocument()
    })
  })
  describe('Behavior', () => {
    it('should render dialog after clicking the share button', async () => {
      render(
        <GalleryProvider>
          <Gallery images={data} />
        </GalleryProvider>
      )
      const button = screen.getAllByRole('button', { name: /SHARE/i })[0]
      await userEvent.click(button)
      
      const dialogElem = screen.getByTestId('dialog')
      expect(dialogElem).toBeInTheDocument()
    })
  })
})