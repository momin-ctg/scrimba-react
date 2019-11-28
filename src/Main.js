import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";

function Main() {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <div>
                    <Card cardColor="red"/>
                    <Card cardColor="blue"/>
                    <Card cardColor="green"/>
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Scrimba Bootcamp
                </a>
            </header>
            <Footer/>
        </div>
    );
}

export default Main;
