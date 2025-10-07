import { useEffect, useState } from 'react';
import gazpImg from '../assets/gazp.png';
import goldImg from '../assets/gold.png';
import headImg from '../assets/hh.png';
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
import { StockItem } from '../types';

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
  HEAD: headImg,
};

export const useStocksData = () => {
  const [stocks, setStocks] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gist.githubusercontent.com/nsdooris/989e046dbf92ef3a2468649abf0604b2/raw/');
      const data = (await response.json()) as { stocks: StockItem[] };
      setStocks(data.stocks.map(item => ({ ...item, img: TICKER_TO_IMAGE[item.ticker] })));

      setLoading(false);
    };

    fetchData();
  }, []);

  return { stocks, loading };
};

export const faqs = [
  {
    question: 'Что такое умная заявка?',
    answers: [
      'Умная заявка — это инструмент инвестора, который самостоятельно отслеживает ситуацию на рынке и на основе ранее заданных параметров принимает решение о покупке или продаже акций и других активов.',
    ],
  },
  {
    question: 'Зачем нужна умная заявка?',
    answers: [
      'Умная заявка в инвестициях нужна для автоматизации процессов торговли на бирже. Она самостоятельно отслеживают ситуацию на рынке и на основе заранее заданных параметров либо принимает решение о покупке или продаже акций и других активов.',
    ],
  },
  {
    question: 'Кому подойдет?',
    answers: [
      'Инвесторам с опытом, которые хотят диверсифицировать свой портфель или настроить автоматическое управление активами',
      'Инвесторам без опыта роботы помогают в изучении рынка, тестировании стратегий',
    ],
  },
  {
    question: 'Какие преимущества?',
    answers: [
      'Отсутствие эмоций. Торгуя самостоятельно, можно поддаться соблазну или панике, провести сделку на невыгодных условиях и потерять деньги. Алгоритм, заложенный в заявке, не принимает необдуманных решений',
      'Экономия времени. Подключение этого типа заявки позволяет существенно сократить время на изучение и анализ подходящего момента для сделки',
    ],
  },
];
