require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle foot ecology renew night purpose inside light army gaze'; 
let testAccounts = [
"0x7062e85f12e915bf84be41a889af598cad2e47f2db01b1b2981d9fe8693b0a6b",
"0x784fa4dc57ba76458f53972bce04d8a2b95eb89270dc6980e6b1e6768e5260ca",
"0x5b264f17cccf9022fb285055399b224d604fb4a80f3aa45de597d7c40c78f614",
"0x935f360da6d7b2523487b6297d122bb945d5863193bb50c4eab89d4cdb599911",
"0xa6bde004cef67fb7f5a28b56832c394fcbfc25d7f8b5595b93173e160fdf201e",
"0x3be74788c64cd75797d4160735cd9edd15ac8678a570d332469340774dd1a113",
"0x94725861b59be9b4f399d927a31ea751dec2426a289270a4597ba501c01ca114",
"0xced9d010bee5a2b0e3abfc8d97561c4504d0217ee9376314bc42330e6a4c7fef",
"0x6c7f430c572469bfcc3368c6ccc1363c1b399e9bcf1bf6085a3a820c455b67b6",
"0xd93653042feea14e5a9c0aa293d9b8eae66c5165a9741f76932ad645d8ccc7ec"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

