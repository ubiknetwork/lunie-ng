export default {
  id: 'ubiknetwork-1', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Ubiknetwork testnet',
  description: 'Ubiknetwork description.',
  logo: `logo.svg`,
  website: 'https://ubik.capital',
  apiURL: 'http://PUBLIC_IP:8010/proxy', // use `npx lcp --proxyUrl http://PUBLIC_IP:1317`
  rpcURL: 'ws://PUBLIC_IP:26657',
  stakingDenom: 'UBIK',
  coinLookup: [
    {
      viewDenom: 'UBIK',
      chainDenom: 'uubik',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'ubik',
  validatorAddressPrefix: 'ubikvaloper',
  validatorConsensusaddressPrefix: 'ubikvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 500000,
      feeOptions: [
        {
          denom: 'UBIK',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
