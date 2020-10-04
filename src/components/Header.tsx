import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const Header: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <a href="/" className={classes.navLink}>
                <Typography variant="h6" className={classes.title}>
                  Тоdo App
                </Typography>
              </a>
              <nav>
                <ul className={classes.navList}>
                  <li className={classes.navItem}>
                    <a href="/" className={classes.navLink}>
                      Все
                    </a>
                  </li>
                  <li className={classes.navItem}>
                    <a href="/" className={classes.navLink}>
                      Завершенные
                    </a>
                  </li>
                  <li className={classes.navItem}>
                    <a href="/" className={classes.navLink}>
                      Выполненные
                    </a>
                  </li>
                </ul>
              </nav>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(4),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navList: {
      display: 'flex',
      alignItems: 'center',
      listStyleType: 'none',
    },
    navItem: {
      '&:not(:last-child)': {
        marginRight: theme.spacing(2),
      },
    },
    navLink: {
      fontSize: theme.spacing(2),
      textDecoration: 'none',
      color: '#fff',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: 'rgba(255, 255, 255, .7)',
      },
    },
  }),
)

export default Header
