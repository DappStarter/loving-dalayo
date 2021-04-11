require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey knife olympic system index rate mad method just kangaroo army gas'; 
let testAccounts = [
"0xbf4e507029566d3e6913d5b6e023d866b9004700aeac3878606bb18c97a6a92e",
"0x7416267a6dc398883dca4a69448319f79f0141921c7aba07183cf7cbe1ba3b25",
"0x9a902718c465d110212cbb3f3dedb81814dc64e2cc5df43b06c9fbe6ece11cc1",
"0xa2bc6c0acf37720c9c56ee4f7d33e9f42be09e146767ad2691ebf1c95d3b27cc",
"0xe9395551cd0b17d4d561a98e9c145d13e1559e98f25cc97ca651b5768415519c",
"0x292ab584b26a4a2751eab31f9c80b4a4f2e689e9437314c23574f8119f1c04dd",
"0x7a764eb6efeea6e89d98ab74680db7a2a389195fcadcdbb9edfe44ac326f7fea",
"0xef1f485a89b70d4dd085595fd225f9bf6b9c6a2c2cc86cd8a94df1d42abe9294",
"0x9a9f127296ba60dd3d46462ccd93555665f1ca199889ba581dfe2d76de5466b4",
"0xb3c81e7ff696b060a278883f15d14bcb274d23c407f1eaf0046c3d328b8a08f6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


