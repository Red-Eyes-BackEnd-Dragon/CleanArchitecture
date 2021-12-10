'use strict';

const {
    Response, 
} = require('../../frameworks/common');

module.exports = dependencies => {

    return deleteUser = async (req, res, next) => {
        try {
            const {
                body = {},
            } = req; 
            
            const {
                id, 
                name, 
                lastName, 
                gender, 
                meta, 
            } = body; 
    
            const deleteUser = deleteUserUseCase(dependencies);
            const response = await deleteUser.execute({
                user: {
                    id, 
                    name, 
                    lastName,
                    gender, 
                    meta,
                }
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