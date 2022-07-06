import chai from 'chai';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import sinon from 'sinon';
import { afterEach, beforeEach } from 'mocha';
import { app } from '../index';

// @ts-ignore
import LoginModel from '../models/users';
import { invalidUser, mockUser, validUser } from './mocks/user';

chai.use(chaiHttp);

const { expect } = chai;
const loginModel = new LoginModel();

describe('/login ', () => {
  let chaiHttpResponse: Response;
  beforeEach(async () => {
    sinon
      .stub(loginModel, 'getUserByEmail')
      .resolves(
        mockUser as any,
      );
  });

  afterEach(() => {
    (loginModel.getUserByEmail as sinon.SinonStub).restore();
  });

  it('checks to send a correct login, returns an object and status 200', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(validUser);
    expect(chaiHttpResponse.body).to.be.an('object');
    expect(chaiHttpResponse.body).to.have.all.keys('token');
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('checks to send a passwordless login, returns an error message and status 400', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'shanks@admin.com',
      });

    expect(chaiHttpResponse.body).to.be.an('object');
    expect(chaiHttpResponse.body).to.not.have.all.keys('token');
    expect(chaiHttpResponse.body).to.have.keys('message');
    expect(chaiHttpResponse.body.message).to.equal('"password" is required');
    expect(chaiHttpResponse).to.have.status(400);
  });

  it('checks to send a login without email, returns an error message and status 400', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        password: 'user',
      });
    expect(chaiHttpResponse.body).to.be.an('object');
    expect(chaiHttpResponse.body).to.not.have.all.keys('token');
    expect(chaiHttpResponse.body).to.have.keys('message');
    expect(chaiHttpResponse.body.message).to.equal('"email" is required');
    expect(chaiHttpResponse).to.have.status(400);
  });
  it('checks to send a wrong login, returns an error message and 400 status', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(invalidUser);
    expect(chaiHttpResponse.body).to.be.an('object');
    expect(chaiHttpResponse.body).to.not.have.all.keys('token');
    expect(chaiHttpResponse.body).to.have.keys('message');
    expect(chaiHttpResponse.body.message).to.equal('Incorrect email or password');
    expect(chaiHttpResponse).to.have.status(400);
  });
});

/* describe('/register ', () => {
  before(async () => {
    sinon.stub(prisma.user, "create")
      .resolves(mocknewUser as any);
  });

  after(() => {
    (prisma.user.create as sinon.SinonStub).restore();
  });
  let chaiHttpResponse: Response;

  it('verifica ao enviar um email,senha e role certo, retorna um objeto e o status 200', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post("/register")
      .send(newUser)

    expect(chaiHttpResponse.body).to.be.an('object');
    expect(chaiHttpResponse.body).to.equals(mocknewUser);
    expect(chaiHttpResponse).to.have.status(201);
  });

})  */
