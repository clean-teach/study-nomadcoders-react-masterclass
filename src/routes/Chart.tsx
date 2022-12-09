import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';

interface IChartProps {
  coinId: string;
}

function Chart({ coinId }: IChartProps) {
  const { isLoading, data } = useQuery(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId),
  );
  console.log(data);
  return <h1>Chart</h1>;
}

export default Chart;
