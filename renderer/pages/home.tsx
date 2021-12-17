import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import Link from '../components/Link'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
    display: {
      display: 'block',
    },
    margin: {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(10),
    },
    textField: {
      width: '25ch',
    },
  }),
)

interface State {
  email: string
  password: string
}

function Home() {
  const classes = useStyles({})
  const [open, setOpen] = React.useState(false)
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
  })

  //console.log(values)
  const handleClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className={classes.root}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className={classes.root}>로그인</DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.display}>
              {/* <form
                className={clsx(classes.margin, classes.textField)}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="E-mail"
                  onChange={handleChange('email')}
                />
                <TextField
                  id="standard-basic"
                  label="Password"
                  onChange={handleChange('password')}
                />
              </form> */}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
              확인
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          with Nextron
        </Typography>
        <img src="/images/logo.png" />
        <Typography gutterBottom>
          <Link href="/next">Go to the next page</Link>
        </Typography>
        <Typography gutterBottom>
          <Link href="/signin">회원가입</Link>
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          로그인하고 시작하기
        </Button>
      </div>
    </React.Fragment>
  )
}

export default Home
