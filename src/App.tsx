import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/home';
import Services from './screens/services';
import Layout from './layout';
import { Toaster } from 'react-hot-toast';
import Gallery from './screens/gallery';
import ContactUs from './screens/contact';
import ViewScreen from './screens/view';

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/gallery" component={Gallery}/>
            <Route path="/contactUs" component={ContactUs}/>
            <Route path="/view" component={ViewScreen}/>
          </Switch>
        </Layout>
      </Router>
      <Toaster position="bottom-right" reverseOrder={false} toastOptions={{
        success: {
          iconTheme: {
            primary: 'white',
            secondary: 'green',
          },
          style: {
            background: 'green',
            color: 'white',
          },

        },
        error: {
          iconTheme: {
            primary: 'white',
            secondary: 'red',
          },
          style: {
            background: 'red',
            color: 'white',
          },
        },
      }} />
    </>
  );
};

export default App;

