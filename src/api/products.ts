export interface CoinbaseProductStat {
  stats_30day: {
    volume: number;
  };
  stats_24hour: {
    open: number;
    high: number;
    low: number;
    volume: number;
    last: number;
    volume_30day: number;
  };
}

type ProductStatsResponse = Record<string, CoinbaseProductStat>;
export type CoinbaseSparkline = number[][] | undefined;
export type ProductSparklinesResponse = Record<string, CoinbaseSparkline>;

export const getProductStats = async (): Promise<ProductStatsResponse> => {
  try {
    const results = await fetch('https://api.pro.coinbase.com/products/stats');
    const json: ProductStatsResponse = await results.json();
    return json;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const getSparklines = async (): Promise<ProductSparklinesResponse> => {
  try {
    const results = await fetch(
      'https://api.pro.coinbase.com/products/spark-lines',
    );
    const json: ProductSparklinesResponse = await results.json();
    return json;
  } catch (err) {
    console.error(err);
    return {};
  }
};
