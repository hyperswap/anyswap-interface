import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import {thousandBit} from '../../../utils/tools/tools'
import BulbIcon from '../../../assets/images/icon/bulb.svg'

const SubCurrencySelectBox = styled.div`
  width: 100%;
  object-fit: contain;
  border-radius: 0.5625rem;
  border: solid 0.5px ${({ theme }) => theme.tipBorder};
  background-color: ${({ theme }) => theme.tipBg};
  padding: 1rem 1.25rem;
  margin-top: 0.625rem;

  .tip {
    ${({ theme }) => theme.flexSC};
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.tipColor};
    padding: 2px 20px 18px;
    border-bottom: 1px solid #f1f6fa;
    word-break:break-all;
    img {
      display:inlne-block;
    }
    p {
      ${({ theme }) => theme.flexSC};
      flex-wrap:wrap;
      display:inline-block;
      margin: 0;
      line-height: 1rem;
      .span {
        text-decoration: underline;
        margin: 0 5px;
      }
      a {
        display:inline-block;
        overflow:hidden;
        height: 1rem;
      }
    }
  }
  .list {
    margin:0;
    padding: 0 0px 0;
    font-size: 12px;
    color: ${({ theme }) => theme.tipColor};
    dt {
      ${({ theme }) => theme.flexSC};
      font-weight: bold;
      line-height: 1.5;
      img {
        margin-right: 8px;
      }
    }
    dd {
      font-weight: 500;
      line-height: 1.83;
      i{
        display:inline-block;
        width:4px;
        height: 4px;
        border-radius:100%;
        background:${({ theme }) => theme.tipColor};
        margin-right: 10px;
      }
    }
  }
`

interface ReminderType {
  bridgeConfig: any,
  bridgeType: string | undefined,
  currency: any
}

function CrossBridge (bridgeConfig:any, currency:any) {
  const { t } = useTranslation()
  if (!bridgeConfig || !currency) {
    return (
      <></>
    )
  }
  return (
    <SubCurrencySelectBox>
      <dl className='list'>
        <dt>
          <img src={BulbIcon} alt='' />
          {t('Reminder')}:
        </dt>
        <dd><i></i>{t('mintTip1', {
          dMinFee: bridgeConfig.MinimumSwapFee,
          coin: currency.symbol,
          dMaxFee: bridgeConfig.MaximumSwapFee,
          dFee: Number(bridgeConfig.SwapFeeRatePerMillion)
        })}</dd>
        <dd><i></i>{t('mintTip2')} {thousandBit(bridgeConfig.MinimumSwap, 'no')} {currency.symbol}</dd>
        <dd><i></i>{t('mintTip3')} {thousandBit(bridgeConfig.MaximumSwap, 'no')} {currency.symbol}</dd>
        <dd><i></i>{t('mintTip4')}</dd>
        <dd><i></i>{t('mintTip5', {
          depositBigValMoreTime: thousandBit(bridgeConfig.BigValueThreshold, 'no'),
          coin: currency.symbol,
        }) + (currency.symbol ? '' : '')}</dd>
      </dl>
    </SubCurrencySelectBox>
  )
}

export default function Reminder ({
  bridgeConfig,
  bridgeType,
  currency
}: ReminderType) {
  if (bridgeType) {
    return CrossBridge(bridgeConfig, currency)
  }
  return (
    <></>
  )
}