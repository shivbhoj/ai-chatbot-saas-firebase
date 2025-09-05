import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { GoogleLogin } from 'react-google-login';
import Dashboard from './pages/Dashboard';
import BotEditor from './pages/BotEditor';

const theme = createTheme();

const App = () => {
  const handleLoginSuccess = (response: any) => {
    console.log('Login Success:', response);
    // Add your login success logic here
  };

  const handleLoginFailure = (response: any) => {
    console.log('Login Failed:', response);
    // Add your login failure logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          // Add your Google client ID here
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          cookiePolicy={'single_host_origin'}
        />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/bot-editor" component={BotEditor} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;