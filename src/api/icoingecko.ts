interface IGetCoinListProps {
  currency: string
  page?: number
  perPage?: number
}

interface IGetCoinInfoProps {
  id: string
}

interface IGetCoinMarketChartProps {
  id: string
  currency: string
  days?: number
}

interface IGetTopCoinsByPriceChangeProps {
  currency: string
}

interface IGetCoinListResponse {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  roi: null | any
  last_updated: string
}

interface IGetCoinInfoResponse {
  id: string
  symbol: string
  name: string
  web_slug: string
  asset_platform_id: null | string
  platforms: Record<string, string>
  detail_platforms: Record<string, {
    decimal_place: null | number
    contract_address: string
  }>
  block_time_in_minutes: number
  hashing_algorithm: string
  categories: string[]
  preview_listing: boolean
  public_notice: null | any
  additional_notices: any[]
  localization: {
    en: string
  }
  description: {
    en: string
  }
  market_cap_rank: number
  market_data: {
    current_price: { [key: string]: number }
    market_cap: { [key: string]: number }
  }
  image: {
    large: string
  }
}

interface IGetCoinMarketChartResponse {
  prices: [number, number][]
  market_caps: [number, number][]
  total_volumes: [number, number][]
}

interface IGetTopCoinsByPriceChangeResponse {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
}

export type {
  IGetCoinListProps,
  IGetCoinInfoProps,
  IGetCoinMarketChartProps,
  IGetTopCoinsByPriceChangeProps,
  IGetCoinListResponse,
  IGetCoinInfoResponse,
  IGetCoinMarketChartResponse,
  IGetTopCoinsByPriceChangeResponse,
}
