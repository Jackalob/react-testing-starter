import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { ShareableImg } from '@/types/ShareableImg'

type IProps = ShareableImg & { onClick: (id: string) => void }

function InfoCard({ id, url, title, author, content, onClick }: IProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} data-testid="card">
      <CardMedia
        id="card-iframe"
        component="img"
        image={url}
        title="card-iframe"
        sx={{ height: 180 }}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => onClick(id)}
          data-testid="share-btn"
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
};


export default InfoCard