const app = require('../../app');
const request = require('supertest')
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://anzekozole:OZoe4OyfBD4sP6xb@cluster0.43yygni.mongodb.net/?retryWrites=true`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);
const db = mongoose.connection;

beforeAll(done => {
    done()
  })
describe('Login', () =>{

    it('User successfully logged in', async()=>{
        const res = await request(app).post('/login/post').send({username: 'anze', password: '123'});

        expect(res.statusCode).toEqual(200);
    });
    it('Error loging in', async()=>{
        const res = await request(app).post('/login/post').send({username: 'heh'});

        expect(res.statusCode).toEqual(500);
    });

});

describe('User register', () =>{

    it('Is user registred', async()=>{
        const rescar = await request(app).post('/register/post').send({username: 'anze123', email: 'anze123.kozole@gmail.com', password: '123', repPassword: '123'});
        expect(rescar.statusCode).toEqual(200);
    });
    it('Is email already taken', async()=>{
        const res = await request(app).post('/register/post').send({email: 'anze.kozole@gmail.com'});
        expect(res.statusCode).toEqual(500);
    });
});