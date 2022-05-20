import  React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {login,register} from "../../services/Auth";

const myImagesLogin=[
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1636658151/images/s2_whxiqg.webp",
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1636658179/images/sahb_tabaa_nel3es.jpg",
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1636658146/images/1_hpqtnf.jpg",
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1636658139/images/a_hlfwmq.jpg",
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1642966840/images/klvglwaxfbdzuo8isend.jpg",
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1643656934/images/latrach-med-jamil-atQwWrlDHmU-unsplash_1_ckechx.jpg",
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1643656948/images/cole-keister-o9yAaWS-xtU-unsplash_uwazif.jpg",
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1643656978/images/latrach-med-jamil-atQwWrlDHmU-unsplash_qxfftk.jpg",
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1643656958/images/nour-tayeh-_E5XyiIIpxg-unsplash_vpkjmi.jpg",
    "https://res.cloudinary.com/nadi-palestine/image/upload/v1643656916/images/patrick-perkins-77DXytIsf38-unsplash_mxbjno.jpg"
];

/*const getRandImg=()=>{
    return  myImagesLogin[Math.floor(Math.random() * myImagesLogin.length)];
}*/

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright ©Palestine-Forum '}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide(/*{setRemember}*/) {
    const [img,setImg]=useState("");
    const [error,setError]=useState("");
    useEffect(()=>{
        setImg(myImagesLogin[Math.floor(Math.random() * myImagesLogin.length)])
    },[]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let isAdmin = await login(data.get('email'),data.get('password'),setError);
    //setRemember(data.get('remember')==="remember")
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography style={{textAlign:"center",color:"red"}} component="h1" variant="h5">
                {error}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" name="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>*/}
              <Copyright sx={{ mt: 5 }} /> 
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}