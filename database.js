/**
 * Módulo de conexão com o banco de dados
 * Uso do framework mongoose
 */

const mongoose = require('mongoose');

// String de conexão com o MongoDB Atlas
const url = 'mongodb+srv://tadashiestaaqui:123senac@definitivo.znnlmem.mongodb.net/dbassisti?retryWrites=true&w=majority&appName=definitivo';

let conectado = false;

// Função principal de conexão
const conectar = async () => {
  if (!conectado) {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      conectado = true;
      console.log('✅ MongoDB conectado com sucesso');
      return true;
    } catch (error) {
      console.error('❌ Erro ao conectar ao MongoDB:', error.message);
      return false;
    }
  }
};

// Função para desconectar
const desconectar = async () => {
  if (conectado) {
    try {
      await mongoose.disconnect();
      conectado = false;
      console.log('🔌 MongoDB desconectado com sucesso');
      return true;
    } catch (error) {
      console.error('❌ Erro ao desconectar do MongoDB:', error.message);
      return false;
    }
  }
};

module.exports = { conectar, desconectar };