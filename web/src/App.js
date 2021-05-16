import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';
import Routes from './routes/index';

const App = () => {
    return (
        <Router>
            <AppProvider>
                <Routes />
            </AppProvider>
        </Router>
    );
}

export default App;