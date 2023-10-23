module.exports = (dependencies) => {
    const welcomeController = async (req, res, next) => {
        
        try {
            res.status(200);
            res.json({ message: 'Servidor AUTH..' })
            res.end();

        } catch (error) {
            console.log('Welcome_controller_error',error);
            next(error);
        }

    }
    
    return welcomeController;
}