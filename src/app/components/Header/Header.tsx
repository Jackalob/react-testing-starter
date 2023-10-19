import { AppBar, Toolbar, Typography } from "@mui/material"
import Link from "next/link"

function Header() {
  return (
    <AppBar position="relative" sx={{background: '#5766D0'}}>
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" color="inherit" noWrap sx={{ cursor: 'pointer' }}>Next Gallery</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header