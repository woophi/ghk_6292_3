import { useEffect, useState } from 'react';
import gazpImg from '../assets/gazp.png';
import goldImg from '../assets/gold.png';
import lukolImg from '../assets/lukol.png';
import mechelImg from '../assets/mechel.png';
import neftImg from '../assets/neft.png';
import nikelImg from '../assets/nikel.png';
import novatekImg from '../assets/novatek.png';
import rosneftImg from '../assets/rosneft.png';
import sberImg from '../assets/sber.png';
import tbankImg from '../assets/tbank.png';
import vtbImg from '../assets/vtb.png';
import x5Img from '../assets/x5.png';
import yandexImg from '../assets/yandex.png';
import { BotItem, StockItem } from '../types';

export const TICKER_TO_IMAGE: Record<string, string> = {
  SBER: sberImg,
  T: tbankImg,
  PLZL: goldImg,
  YDEX: yandexImg,
  TRNFP: neftImg,
  LKOH: lukolImg,
  GAZP: gazpImg,
  GMKN: nikelImg,
  MTLR: mechelImg,
  NVTK: novatekImg,
  ROSN: rosneftImg,
  VTBR: vtbImg,
  X5: x5Img,
};

export const useStocksData = () => {
  const [stocks, setStocks] = useState<StockItem[]>([]);
  const [bots, setBots] = useState<BotItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gist.githubusercontent.com/nsdooris/f4c73c95ef1a929c542e25bacb44c47a/raw/');
      const data = (await response.json()) as { stocks: StockItem[]; bots: BotItem[] };
      setStocks(data.stocks.map(item => ({ ...item, img: TICKER_TO_IMAGE[item.ticker] })));
      setBots(data.bots);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { stocks, bots, loading };
};
