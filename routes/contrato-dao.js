class ContratoDao {

    constructor(connection) {
        this._connection = connection;
    }

    list() {

        return new Promise((resolve, reject) => 
            this._connection.query('SELECT * FROM demanda.contrato', (err, results) => {
                if(err) return reject(err);

                resolve(results);
            })
        );
    }
    
}

module.exports = ContratoDao;