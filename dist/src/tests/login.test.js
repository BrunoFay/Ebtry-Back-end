"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const sinon_1 = __importDefault(require("sinon"));
const mocha_1 = require("mocha");
const index_1 = require("../index");
// @ts-ignore
const users_1 = __importDefault(require("../models/users"));
const user_1 = require("./mocks/user");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
const loginModel = new users_1.default();
describe('/login ', () => {
    let chaiHttpResponse;
    (0, mocha_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        sinon_1.default
            .stub(loginModel, 'getUserByEmail')
            .resolves(user_1.mockUser);
    }));
    (0, mocha_1.afterEach)(() => {
        loginModel.getUserByEmail.restore();
    });
    it('checks to send a correct login, returns an object and status 200', () => __awaiter(void 0, void 0, void 0, function* () {
        chaiHttpResponse = yield chai_1.default
            .request(index_1.app)
            .post('/login')
            .send(user_1.validUser);
        expect(chaiHttpResponse.body).to.be.an('object');
        expect(chaiHttpResponse.body).to.have.all.keys('token');
        expect(chaiHttpResponse).to.have.status(200);
    }));
    it('checks to send a passwordless login, returns an error message and status 400', () => __awaiter(void 0, void 0, void 0, function* () {
        chaiHttpResponse = yield chai_1.default
            .request(index_1.app)
            .post('/login')
            .send({
            email: 'shanks@admin.com',
        });
        expect(chaiHttpResponse.body).to.be.an('object');
        expect(chaiHttpResponse.body).to.not.have.all.keys('token');
        expect(chaiHttpResponse.body).to.have.keys('message');
        expect(chaiHttpResponse.body.message).to.equal('"password" is required');
        expect(chaiHttpResponse).to.have.status(400);
    }));
    it('checks to send a login without email, returns an error message and status 400', () => __awaiter(void 0, void 0, void 0, function* () {
        chaiHttpResponse = yield chai_1.default
            .request(index_1.app)
            .post('/login')
            .send({
            password: 'user',
        });
        expect(chaiHttpResponse.body).to.be.an('object');
        expect(chaiHttpResponse.body).to.not.have.all.keys('token');
        expect(chaiHttpResponse.body).to.have.keys('message');
        expect(chaiHttpResponse.body.message).to.equal('"email" is required');
        expect(chaiHttpResponse).to.have.status(400);
    }));
    it('checks to send a wrong login, returns an error message and 400 status', () => __awaiter(void 0, void 0, void 0, function* () {
        chaiHttpResponse = yield chai_1.default
            .request(index_1.app)
            .post('/login')
            .send(user_1.invalidUser);
        expect(chaiHttpResponse.body).to.be.an('object');
        expect(chaiHttpResponse.body).to.not.have.all.keys('token');
        expect(chaiHttpResponse.body).to.have.keys('message');
        expect(chaiHttpResponse.body.message).to.equal('Incorrect email or password');
        expect(chaiHttpResponse).to.have.status(400);
    }));
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
//# sourceMappingURL=login.test.js.map