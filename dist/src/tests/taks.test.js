"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const chai_http_1 = __importDefault(require("chai-http"));
const chai = __importStar(require("chai"));
const sinon = __importStar(require("sinon"));
const index_1 = require("../index");
const tasks_1 = require("./mocks/tasks");
const tasks_2 = __importDefault(require("../models/tasks"));
chai.use(chai_http_1.default);
const { expect } = chai;
const modelTask = new tasks_2.default();
describe('Testes matchs', () => {
    let chaiHttpResponse;
    describe('verifica rota /matches GET', () => {
        before(() => {
            sinon
                .stub(modelTask, 'getAll')
                .resolves(tasks_1.mockTasks);
        });
        after(() => {
            modelTask.getAll.restore();
        });
        it('verifica getAll matches', () => __awaiter(void 0, void 0, void 0, function* () {
            chaiHttpResponse = yield chai.request(index_1.app).get('/tasks');
            expect(chaiHttpResponse.body).to.deep.be.equal(tasks_1.mockTasks);
            expect(chaiHttpResponse.status).to.be.equal(200);
        }));
    });
    /* describe('verifica rota Post Match', () => {
      before(async () => {
        sinon
          .stub(User, 'findOne')
          .resolves(mockUser as User);
  
        sinon
          .stub(Match, 'create')
          .resolves(newMatch as unknown as Match);
        });
  
        after(()=> {
          (User.findOne as sinon.SinonStub).restore();
          (Match.create as sinon.SinonStub).restore();
        });
  
        it('verifica se é possivel criar match só com token valido', async () => {
          chaiHttpResponse = await chai
          .request(app)
          .post('/login')
          .send(validUser);
          const { token } = chaiHttpResponse.body;
  
          chaiHttpResponse = await chai
            .request(app)
            .post('/matches')
            .set('authorization', token)
            .send(newMatch);
  
          expect(chaiHttpResponse.body).to.deep.be.equal(newMatch);
          expect(chaiHttpResponse.status).to.have.equal(201);
      });
    }) */
});
//# sourceMappingURL=taks.test.js.map