module.exports = {
    env: {
        broser: false,
        node: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    rules: {
        // Adicione regras personalizadas aqui, se necessario
        'no-console': 'off', //Permitir console.log
        'no-usuned-vars': ['warn', { argsIgnorePattern: '^_'}], //Avisar sobre as variaveis não usadas
    },
};