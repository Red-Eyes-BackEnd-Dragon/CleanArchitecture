'use strict';

const { Response } = require('../../frameworks/common/Response');

module.exports = dependencies => {

    const { 
        useCases: {
            user: {
                addUserUseCase,
            }
        }
    } = dependencies;

    return addUser = async (req, res, next) => {
        try {
            const {
                body = {}
            } = req;

            const {
                id, 
                name, 
                lastName, 
                gender, 
                meta,
            } = body;

            const addUser = addUserUseCase(dependencies);
            const response = await addUser.execute({
                id, 
                name, 
                lastName, 
                gender, 
                meta,
            });

            res.json(new Response({
                status: true, 
                content: response,
            }));
            
            next();

        } catch(err) {
            next(err);
        }
    }
}