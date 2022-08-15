"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidUser = exports.mockUser = exports.mocknewUser = exports.newUser = exports.validUser = void 0;
exports.validUser = {
    email: 'shanks@admin.com',
    password: 'user',
};
exports.newUser = {
    email: 'test3@test.com',
    password: 'test',
    role: 'user',
};
exports.mocknewUser = {
    id: 'dhaushduasd',
    role: 'author',
    email: 'test3@test.com',
    createdAt: '2022-07-04T23:35:08.953Z',
};
exports.mockUser = {
    id: 'dhaushduasd',
    role: 'author',
    email: 'shanks@admin.com',
    password: '$2a$04$3ONIxT8jSsjlIGp4ZpLVneE0ku2z.khqmHCbr9aEYfCPHs75xr4ZG',
    createdAt: '2022-07-04T23:35:08.953Z',
};
exports.invalidUser = {
    email: 'dbausdu@asdasd.com',
    password: 'adjajdasd',
};
//# sourceMappingURL=user.js.map