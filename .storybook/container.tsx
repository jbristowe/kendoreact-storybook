import React, { Component } from 'react';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import { LocaleContextProvider } from '../src/contexts/LocaleContext';
import './container.scss';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import deNumbers from 'cldr-numbers-full/main/de/numbers.json';
import deCurrencies from 'cldr-numbers-full/main/de/currencies.json';
import deCaGregorian from 'cldr-dates-full/main/de/ca-gregorian.json';
import deDateFields from 'cldr-dates-full/main/de/dateFields.json';
import deTimeZoneNames from 'cldr-dates-full/main/de/timeZoneNames.json';

import enNumbers from 'cldr-numbers-full/main/en/numbers.json';
import enCurrencies from 'cldr-numbers-full/main/en/currencies.json';
import enCaGregorian from 'cldr-dates-full/main/en/ca-gregorian.json';
import enDateFields from 'cldr-dates-full/main/en/dateFields.json';
import enTimeZoneNames from 'cldr-dates-full/main/en/timeZoneNames.json';

import esNumbers from 'cldr-numbers-full/main/es/numbers.json';
import esCurrencies from 'cldr-numbers-full/main/es/currencies.json';
import esCaGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import esDateFields from 'cldr-dates-full/main/es/dateFields.json';
import esTimeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

import zhNumbers from 'cldr-numbers-full/main/zh/numbers.json';
import zhCurrencies from 'cldr-numbers-full/main/zh/currencies.json';
import zhCaGregorian from 'cldr-dates-full/main/zh/ca-gregorian.json';
import zhDateFields from 'cldr-dates-full/main/zh/dateFields.json';
import zhTimeZoneNames from 'cldr-dates-full/main/zh/timeZoneNames.json';

load(
  likelySubtags,
  currencyData,
  weekData,
  deNumbers,
  deCurrencies,
  deCaGregorian,
  deDateFields,
  deTimeZoneNames,
  enNumbers,
  enCurrencies,
  enCaGregorian,
  enDateFields,
  enTimeZoneNames,
  esNumbers,
  esCurrencies,
  esCaGregorian,
  esDateFields,
  esTimeZoneNames,
  zhNumbers,
  zhCurrencies,
  zhCaGregorian,
  zhDateFields,
  zhTimeZoneNames
);

import deMessages from '../src/config/kendo-react-messages/messages/de-DE/de-DE.json';
loadMessages(deMessages, 'de-DE');

import enMessages from '../src/config/kendo-react-messages/messages/en-US/en-US.json';
loadMessages(enMessages, 'en-US');

import esMessages from '../src/config/kendo-react-messages/messages/es-ES/es-ES.json';
loadMessages(esMessages, 'es-ES');

import zhMessages from '../src/config/kendo-react-messages/messages/zh-CN/zh-CN.json';
loadMessages(zhMessages, 'zh-CN');

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <React.StrictMode>
        <LocaleContextProvider>
          {story()}
        </LocaleContextProvider>
      </React.StrictMode>
    );
  }
}