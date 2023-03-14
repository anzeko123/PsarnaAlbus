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
    jest.mock('../index');

    it('User successfully logged in', async()=>{
        const res = await request(app).post('/login/post').send({username: 'anze', password: '123'});

        expect(res.statusCode).toEqual(200);
    });
    it('Error loging in', async()=>{
        const res = await request(app).post('/login/post').send({username: ''});

        expect(res.statusCode).toEqual(500);
    });

});
/*
describe('Insert Car', () =>{
    jest.mock('../car');
    it('Missing data when submiting car form', async()=>{
        const rescar = await request(app).post('/car').send({name: ''});
        expect(rescar.statusCode).toEqual(400);
    });
    it('User successfully inserted their car', async()=>{
        const res = await request(app).post('/car').send({name: 'janez', car_name: 'BMW', year: '2005'});
        console.log(res)
        expect(res.statusCode).toEqual(200);
    });
});
describe('Insert Sevice date', () =>{
    jest.mock('../car');
    it('Missing data when submiting service date form', async()=>{
        const rescar = await request(app).post('/calendar').send({name: ''});
        expect(rescar.statusCode).toEqual(400);
    });
    it('User successfully inserted their date of service', async()=>{
        const res = await request(app).post('/calendar').send({date: '15.12.2022', name: 'janez', surname: 'novak', car: 'Audi'});
        console.log(res)
        expect(res.statusCode).toEqual(200);
    });
});
afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    db.close()
    done()
  })
  */