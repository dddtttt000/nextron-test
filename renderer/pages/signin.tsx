import React from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '../components/Link'
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
    margin: {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(10),
    },
    display: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: '25ch',
    },
  }),
)

interface State {
  email: string
  password: string
  passwordCheck: string
  showPassword: boolean
}

function signin() {
  const classes = useStyles({})
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    passwordCheck: '',
    showPassword: false,
  })

  console.log('values ===>', values)

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  return (
    <React.Fragment>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          회원가입
        </Typography>
      </div>
      <div className={classes.display}>
        <form
          className={clsx(classes.margin, classes.textField)}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="E-mail"
            onChange={handleChange('email')}
          />
        </form>

        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password Check
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'passwordCheck'}
            value={values.password}
            onChange={handleChange('passwordCheck')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className={classes.root}>
        <Button variant="contained" color="primary">
          가입
        </Button>
        {/* <Typography variant="subtitle1" gutterBottom>
          with Nextron
        </Typography> */}
        <Typography gutterBottom className={classes.root}>
          <Link href="/home">Go to the home page</Link>
        </Typography>
      </div>
    </React.Fragment>
  )
}

export default signin
