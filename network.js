export default {
  id: 'microtick-1',
  name: 'Microtick',
  description:
    "Microtick's core technology creates a market microstructure in which cooperative (assert / insure) quotes combine to replace traditional competitive (bid / ask) market orders, resulting in a more stable price discovery process",
  logo: `logo.svg`,
  website: 'https://www.microtick.com',
  apiURL: 'http://45.79.207.112:1317',
  rpcURL: 'https://rpc-explorer.microtick.zone/',
  explorerURL: 'https://explorer.microtick.zone/',
  bitcannaExplorerURL: 'https://explorer.microtick.zone/',
  //exchangeApiUrl: 'https://swap.bitcanna.io',
  //osmosAppUrl: 'https://app.osmosis.zone',
  // minBlockHeight: 5200792, // actually 5200791, but it has the wrong block time.
  stakingDenom: 'TICK',
  coinLookup: [
    {
      viewDenom: 'TICK',
      chainDenom: 'utick',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/bcna.jpg`,
    },
  ],
  addressPrefix: 'micro',
  validatorAddressPrefix: 'microvaloper',
  validatorConsensusaddressPrefix: 'microvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 800000,
      feeOptions: [
        {
          denom: 'TICK',
          amount: 0.01,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,
  swapEnabled: false,
  localSigning: false, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
}
