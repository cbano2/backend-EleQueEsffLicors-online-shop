import dotenv from 'dotenv';
import {throws } from 'assert';

const environment = dotenv.config(
 {
    path: './src/.env'
    }
);
if(process.env.NODE_ENV != 'production'){
    if(environment.error){
        throw environment.error;
    }
}

export default environment;
