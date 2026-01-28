class ITrainer{
    ConductTraning(){
        throw new error('method "ConductTraning" must be implemented');
    }

    ConductHandOnSession() {
        throw new error('method "ConductHandOnSession" must be implemented');
    }
}

Module.exports = ITrainer;