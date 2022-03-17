import { govPoolABI } from '../abi';

export const moonbeamStakePools = [
  {
    id: 'bifi-moonbeam',
    name: 'BIFI',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0x595c8481c48894771CE8FaDE54ac6Bf59093F9E8',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'GLMR',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xAcc15dC74880C9944775448304B263D191c6077F',
    earnContractAddress: '0x1198f78efd67DFc917510aaA07d49545f4B24f11',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'GLMR',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        logoNight: 'stake/beefy/beefyfinance_night.png',
        background: 'stake/beefy/background.png',
        text: "Beefy Finance is The Multi-Chain Yield Optimizer across many sidechains, enabling users to earn autocompounded yield on their crypto. Did you know also that you can own a piece of Beefy itself? Beefy runs on its governance token, BIFI. The token has a set supply of 80,000 across all chains; no more may be minted, ever! As a holder of BIFI you may create and vote on important DAO proposals, and you become dividend-eligible to earn a share of every compounding harvest on Beefy vaults, hour by hour. Here on Moonbeam, you just need to stake BIFI in this reward pool, or in the autocompounding BIFI Maxi vault on the main page. For this pool, GLMR dividends are gathered and sent proportionally to each staker. Stake here, return later to claim the GLMR you've earned.",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },

  {
    id: 'moo_stellaswap-stella-wglmr-stellaswap',
    name: 'StellaSwap',
    assets: ['STELLA', 'GLMR'],
    token: 'mooStellaswapSTELLA-GLMR',
    tokenDecimals: 18,
    tokenAddress: '0x515989A9Add6Bb3Ab78b59a2AE30E398E740886F',
    tokenOracle: 'tokens',
    tokenOracleId: 'stellaswap-stella-wglmr',
    earnedToken: 'STELLA',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x0E358838ce72d5e61E0018a2ffaC4bEC5F4c88d2',
    earnContractAddress: '0x74EB99854c10BCD138AEd017516f9835e8325B87',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'STELLA',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1650289050,
    partners: [
      {
        logo: 'stake/stellaswap/logo.png',
        background: 'stake/stellaswap/bg.png',
        text: "StellaSwap is the first and leading Moonbeam DEX that offers an integrated gateway to the DeFi world. Users can swap, earn, yield farm, bridge assets, explore new projects and engage in NFT trading all from a single unified platform. StellaSwap's products are structured in such a way that facilitates decentralized governance of STELLA holders, while continuing to innovate on the collective foundations by design.",
        website: 'https://stellaswap.com/',
        social: {
          telegram: '',
          twitter: '',
        },
      },
    ],
  },
];
