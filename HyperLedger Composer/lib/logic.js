'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Registro de transaction
 * @param {com.icotech.blockchain.RegistroDoacaoTransaction} registrodoacaotransaction
 * @transaction
 */

function RegistroDoacaoTransaction (registrodoacaotransaction) {
    // Transaction processor functions can return promises; Composer will wait
    // for the promise to be resolved before committing the transaction.
    // Do something that returns a promise.
    return Promise.resolve();
}

/**
 * Registro de transaction
 * @param {com.icotech.blockchain.RegistroPacienteTransaction} registropacientetransaction
 * @transaction
 */

function RegistroPacienteTransaction (registropacientetransaction) {
    return Promise.resolve();
}