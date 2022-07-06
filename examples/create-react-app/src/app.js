import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RainbowApplication from 'react-rainbow-components/components/Application';
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import Badge from './pages/Badge';
import Button from './pages/Button';
import ButtonGroup from './pages/ButtonGroup';
import ButtonIcon from './pages/ButtonIcon';
import ButtonMenu from './pages/ButtonMenu';
import Card from './pages/Card';
import Input from './pages/Input';
import ProgressBar from './pages/ProgressBar';
import Spinner from './pages/Spinner';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import ReduxForm from './pages/ReduxForm';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <RainbowApplication>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/avatar" element={<Avatar />} />
                        <Route path="/badge" element={<Badge />} />
                        <Route path="/button" element={<Button />} />
                        <Route path="/button-group" element={<ButtonGroup />} />
                        <Route path="/button-icon" element={<ButtonIcon />} />
                        <Route path="/button-menu" element={<ButtonMenu />} />
                        <Route path="/card" element={<Card />} />
                        <Route path="/input" element={<Input />} />
                        <Route path="/progress-bar" element={<ProgressBar />} />
                        <Route path="/spinner" element={<Spinner />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/redux-form" element={<ReduxForm />} />
                    </Routes>
                </RainbowApplication>
            </Router>
        </Provider>
    );
}
