import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Collapse } from '@alfalab/core-components/collapse';
import { Gap } from '@alfalab/core-components/gap';
import { List } from '@alfalab/core-components/list';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Radio } from '@alfalab/core-components/radio';
import { Status } from '@alfalab/core-components/status';
import { Steps } from '@alfalab/core-components/steps';
import { Typography } from '@alfalab/core-components/typography';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronLeftMIcon } from '@alfalab/icons-glyph/ChevronLeftMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { UsersMIcon } from '@alfalab/icons-glyph/UsersMIcon';
import { useEffect, useState } from 'react';
import benefitsImg from './assets/benefits.png';
import heroImg from './assets/hero.png';
import { BuyScreen } from './buy-screen/BuyScreen';
import { faqs, useStocksData } from './hooks/useStocksData';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [view, setView] = useState<'step1' | 'step2' | 'step3'>('step1');
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);
  const [selectedStockTicker, setSelectedStockTicker] = useState<string | null>(
    LS.getItem(LSKeys.ShowThx, false) ? LS.getItem(LSKeys.SelectedStockTicker, null) : null,
  );
  const { stocks } = useStocksData();

  const selectedStock = stocks.find(s => s.ticker === selectedStockTicker);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  if (thxShow) {
    return <ThxLayout link={selectedStock?.link || ''} />;
  }

  if (selectedStockTicker && selectedStock && view === 'step3') {
    return <BuyScreen stockItem={selectedStock} setThx={setThx} />;
  }

  if (view === 'step2') {
    return (
      <>
        <div className={appSt.container}>
          <div>
            <Typography.TitleResponsive style={{ marginTop: '6px' }} tag="h1" view="medium" font="system" weight="semibold">
              Выберите актив
            </Typography.TitleResponsive>
          </div>
          {stocks.map(stock => (
            <PureCell className={appSt.stockRow} key={stock.ticker} onClick={() => setSelectedStockTicker(stock.ticker)}>
              <PureCell.Graphics verticalAlign="center">
                <img src={stock.img} width={48} height={48} alt={stock.name} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                    {stock.name}
                  </Typography.Text>

                  <Typography.Text view="primary-small" color="secondary">
                    {stock.ticker}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Addon verticalAlign="center">
                <Radio
                  checked={selectedStockTicker === stock.ticker}
                  onChange={() => setSelectedStockTicker(stock.ticker)}
                />
              </PureCell.Addon>
            </PureCell>
          ))}
        </div>
        <Gap size={96} />

        <div className={appSt.bottomBtn}>
          <ButtonMobile
            view="secondary"
            size={56}
            style={{ minWidth: 56, maxWidth: 56 }}
            onClick={() => {
              setSelectedStockTicker(null);
              setView('step1');
            }}
          >
            <ChevronLeftMIcon width={24} height={24} />
          </ButtonMobile>
          <ButtonMobile
            block
            view="primary"
            size={56}
            onClick={() => {
              if (selectedStockTicker) {
                window.gtag('event', '6292_next_active', { var: 'var3' });
                setView('step3');
              }
            }}
          >
            Продолжить
          </ButtonMobile>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={appSt.container}>
        <img src={heroImg} alt="hero" width="100%" height={280} style={{ margin: '0 auto', objectFit: 'contain' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Status view="contrast" color="green" size={20}>
            <Typography.Text view="secondary-small" weight="bold">
              НИЗКИЙ РИСК
            </Typography.Text>
          </Status>
          <Status view="muted" color="grey" size={20} uppercase={false}>
            <Typography.Text view="secondary-small" weight="bold" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <UsersMIcon width={10} height={10} />
              <span style={{ marginTop: '1px' }}>1235 подключили</span>
            </Typography.Text>
          </Status>
        </div>
        <Typography.TitleMobile tag="h1" view="xlarge" font="system" weight="bold">
          Умная ИИ заявка
        </Typography.TitleMobile>
        <Typography.Text view="primary-medium">
          Алгоритм с применением искуственного интеллекта анализирует рыночные тренды и автоматически совершает сделки для
          максимизации прибыли
        </Typography.Text>

        <div className={appSt.box2}>
          <img src={benefitsImg} width={48} height={48} alt="Benefits" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium" weight="bold">
              Пример
            </Typography.Text>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary">
              Если цена растёт 3 дня подряд — покупает; падает на 5% — продаёт
            </Typography.Text>
          </div>
        </div>

        <div>
          <Typography.TitleMobile tag="h2" view="small" color="primary" weight="semibold" font="system">
            Как это работает
          </Typography.TitleMobile>
          <Gap size={12} />
          <Steps isVerticalAlign={true} interactive={false} className={appSt.stepStyle}>
            <Typography.Text view="component-primary">Выбираете актив</Typography.Text>
            <Typography.Text view="component-primary">Подключаете его — а дальше он всё делает сам</Typography.Text>
            <Typography.Text view="component-primary">
              В любой момент можно отключить. Все сделки видны, деньги остаются у вас
            </Typography.Text>
          </Steps>
        </div>

        <div>
          <Typography.TitleMobile tag="h2" view="small" color="primary" weight="semibold" font="system">
            Частые вопросы
          </Typography.TitleMobile>
          <Gap size={12} />
          <div className={appSt.box}>
            {faqs.map((faq, index) => (
              <div key={index}>
                <div
                  onClick={() => {
                    window.gtag('event', '6292_card_faq', {
                      var: 'var3',
                      faq: String(index + 1),
                    });
                    setCollapsedItem(items =>
                      items.includes(String(index + 1))
                        ? items.filter(item => item !== String(index + 1))
                        : [...items, String(index + 1)],
                    );
                  }}
                  className={appSt.rowSb}
                >
                  <Typography.Text view="primary-medium" weight="medium">
                    {faq.question}
                  </Typography.Text>
                  {collapsedItems.includes(String(index + 1)) ? (
                    <div style={{ flexShrink: 0 }}>
                      <ChevronUpMIcon />
                    </div>
                  ) : (
                    <div style={{ flexShrink: 0 }}>
                      <ChevronDownMIcon />
                    </div>
                  )}
                </div>
                <Collapse expanded={collapsedItems.includes(String(index + 1))}>
                  {faq.answers.length > 1 ? (
                    <List tag="ul" marker="•">
                      {faq.answers.map((answer, ansIndex) => (
                        <List.Item key={ansIndex}>
                          <Typography.Text view="primary-medium">{answer}</Typography.Text>
                        </List.Item>
                      ))}
                    </List>
                  ) : (
                    <Typography.Text view="primary-medium">{faq.answers[0]}</Typography.Text>
                  )}
                </Collapse>
              </div>
            ))}
          </div>
        </div>
        <Gap size={96} />
      </div>
      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          size={56}
          onClick={() => {
            window.gtag('event', '6292_choose_active', { var: 'var3' });
            setView('step2');
          }}
        >
          Выбрать активы
        </ButtonMobile>
      </div>
    </>
  );
};
