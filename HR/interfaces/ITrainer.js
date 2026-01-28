class ITrainer{
    ConductTraning(){
        throw new error('method "ConductTraning" must be implemented');
    }

    ConductHandOnSession() {
        throw new error('method "ConductHandOnSession" must be implemented');
    }
}

module.exports = ITrainer;