import { FocusEvent } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, Input } from '@mui/material'

type IProps = {
  open: boolean,
  onClose: () => void,
  embedUrl: string,
}

const SharedLinkModal = ({ open, onClose, embedUrl }: IProps) => {
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      data-testid="dialog"
      fullWidth={true}
      maxWidth={"sm"}
      sx={{ paddingTop: 2, paddingRight: 4, paddingBottom: 3 }}
    >
      <DialogTitle>Share</DialogTitle>
      <DialogContent>
        <DialogContentText>Embed url</DialogContentText>
        <Input
          readOnly
          value={embedUrl}
          onFocus={handleFocus}
          fullWidth
          inputProps={{
            "data-testid": "embed-url",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SharedLinkModal;