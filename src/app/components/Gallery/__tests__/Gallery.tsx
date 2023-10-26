import { screen, render, waitForElementToBeRemoved, within } from '@testing-library/react'
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
      const cardTitleText = screen.getByText(data[0].title)

      expect(mainText).toBeInTheDocument()
      expect(cardTitleText).toBeInTheDocument()
    })
  })

  describe('Behavior', () => {
    it('should render dialog after clicking share button', async () => {
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

    it('should close the dialog after clicking the backdrop of the dialog', async () => {
      render(
        <GalleryProvider>
          <Gallery images={data} />
        </GalleryProvider>
      )
      const button = screen.getAllByRole('button', { name: /SHARE/i })[0]
      await userEvent.click(button)

      const dialog = screen.getByTestId('dialog');
      expect(dialog).toBeInTheDocument()

      // eslint-disable-next-line testing-library/no-node-access
      await userEvent.click(dialog.firstChild as HTMLElement)
      await waitForElementToBeRemoved(() => screen.queryByTestId("dialog"));
      expect(screen.queryByTestId('dialog')).not.toBeInTheDocument()
    })

    it('should highlight the url after clicking the embed url input', async () => {
      render(
        <GalleryProvider>
          <Gallery images={data} />
        </GalleryProvider>
      )
      const button = screen.getAllByRole('button', { name: /SHARE/i })[0]
      await userEvent.click(button)

      const dialog = screen.getByTestId('dialog');
      expect(dialog).toBeInTheDocument()

      const input = within(dialog).getByRole('textbox') as HTMLInputElement
      await userEvent.click(input);
      const selectedTextLength = input.selectionEnd! - input.selectionStart!;
      expect(input.value.length).toBe(selectedTextLength)
    })
  })
})