import chaiHttp from 'chai-http';
import * as chai from 'chai';
import * as sinon from 'sinon';

import { Response } from 'superagent';
import { afterEach } from 'mocha';
import assert from 'assert';
import { app } from '../index';
import { mockUser, validUser } from './mocks/user';
import  prisma  from '../models/db/prismaClient';
import { Task } from '../types/tasks';
import { mockTasks } from './mocks/tasks';
import TaskModel from '../models/tasks';

chai.use(chaiHttp);

const { expect } = chai;
const modelTask = new TaskModel();
describe('Testes matchs', () => {
  let chaiHttpResponse: Response;

  describe('verifica rota /matches GET', () => {
    before(() => {
      sinon
        .stub(modelTask, 'getAll')
        .resolves(mockTasks as Task[]);
    });

    after(() => {
      (modelTask.getAll as sinon.SinonStub).restore();
    });

    it('verifica getAll matches', async () => {
      chaiHttpResponse = await chai.request(app).get('/tasks');
      expect(chaiHttpResponse.body).to.deep.be.equal(mockTasks);
      expect(chaiHttpResponse.status).to.be.equal(200);
    });
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
