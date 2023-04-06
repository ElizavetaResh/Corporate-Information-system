import React, { useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import store from './app/store/store';
import { Provider } from "react-redux";
import req from 'express/lib/request';
import res from 'express/lib/response';

//"start": "react-scripts --openssl-legacy-provider start",
const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res)=>{
  res.send('HELLO POSTGRES + NODEJS')
})
app.listen(PORT, () => console.log('server started on post ${PORT}'))
