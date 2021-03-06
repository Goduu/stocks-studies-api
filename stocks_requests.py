
import yahoo_fin.stock_info as yf
import json
from flask import jsonify
import pandas as pd
from datetime import timedelta
from datetime import datetime
from functools import wraps
import sys
from yahoo_fin.news import get_yf_rss


def except_handler(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except:
            e = sys.exc_info()
            print("ERROR ", e)
            return {'message': 'An Error Occurred'}
    return decorated


@except_handler
def get_live_price(tick):
    result = {'price': yf.get_live_price(tick)}
    return(result)


@except_handler
def get_analysts_info(tick):
    analysts_info = yf.get_analysts_info(tick)
    di = []
    for i in analysts_info:
        di.append(analysts_info[i].to_json())
    return(jsonify(di))

# Get price data


@except_handler
def get_data(tick):
    try:
        end_date = datetime.today()
        delta = timedelta(days=120)
        start_date = (end_date-delta).strftime("%d/%m/%Y")
        end_date = end_date.strftime("%d/%m/%Y")
        print("in get data", tick)
        data = yf.get_data(tick, start_date=start_date, end_date=end_date)
        return data.to_json()
    except:
        return({'message': 'Error in request!'})

# @except_handler


def get_price_data(tick, period):
    end_date = datetime.today()
    delta = timedelta(days=int(period))
    start_date = (end_date-delta)
    end_date = end_date
    print("in get data", tick)
    if(int(period) < 0):
        data = yf.get_data(tick)
    else:
        data = yf.get_data(tick, start_date=start_date, end_date=end_date)

    resp = []
    for id, value in enumerate(data.open):
        resp.append({
            'timestamp': int(datetime.timestamp(data.index[id])),
            'value': round(value, 2)
        })

    return jsonify({'data': resp})


def get_dividend_data(tick, period):
    try:
        end_date = datetime.today()
        delta = timedelta(days=int(period))
        start_date = (end_date-delta)
        end_date = end_date
        if(int(period) < 0):
            data = yf.get_dividends(tick)
        else:
            data = yf.get_dividends(
                tick, start_date=start_date, end_date=end_date)
        resp = []
        for idx, value in enumerate(data.dividend):
            resp.append(
                {
                    'timestamp': int(datetime.timestamp(data.index[idx])),
                    'value': value
                }
            )
        return jsonify({'data': resp})
    except:
        return jsonify({"msg": "No Dividend Data for " + tick})


@except_handler
def get_dividends(tick):
    print("in get dividends", tick)
    data = yf.get_dividends(tick).iloc[-10:]
    return data.to_json()


@except_handler
def get_news(tick):
    news = get_yf_rss(tick)

    return(jsonify({'msg': 'ok'}))


@except_handler
def get_quote_data(ticker):
    resp = yf.get_quote_data(ticker)
    data = {
        'ticker': ticker,
        'name': resp.get('shortName'),
        'currency': resp.get('currency'),
        'price': resp.get('regularMarketPrice'),
        'marketStatus': resp.get('marketState'),
    }
    return data

# @except_handler


def get_quote_indicators(ticker):
    print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ticker)
    resp = yf.get_quote_data(ticker)
    data = {
        'Historic':
            [
                {'name': 'fiftyDayAverage',
                    'value': resp.get('fiftyDayAverage')},
                {'name': 'fiftyDayAverageChange',
                    'value': resp.get('fiftyDayAverageChange')},
                {'name': 'fiftyDayAverageChangePercent',
                    'value': resp.get('fiftyDayAverageChangePercent')},
                {'name': 'fiftyTwoWeekHigh',
                    'value': resp.get('fiftyTwoWeekHigh')},
                {'name': 'fiftyTwoWeekHighChange',
                    'value': resp.get('fiftyTwoWeekHighChange')},
                {'name': 'fiftyTwoWeekHighChangePercent',
                    'value': resp.get('fiftyTwoWeekHighChangePercent')},
                {'name': 'fiftyTwoWeekLow',
                    'value': resp.get('fiftyTwoWeekLow')},
                {'name': 'fiftyTwoWeekLowChange',
                    'value': resp.get('fiftyTwoWeekLowChange')},
                {'name': 'fiftyTwoWeekLowChangePercent',
                    'value': resp.get('fiftyTwoWeekLowChangePercent')},
                {'name': 'fiftyTwoWeekRange',
                    'value': resp.get('fiftyTwoWeekRange')},
                {'name': 'averageDailyVolume10Day',
                    'value': resp.get('averageDailyVolume10Day')},
                {'name': 'averageDailyVolume3Month',
                    'value': resp.get('averageDailyVolume3Month')},
            ],
        'Intraday': [
                {'name': 'regularMarketChange',
                    'value': resp.get('regularMarketChange')},
                {'name': 'regularMarketChangePercent',
                    'value': resp.get('regularMarketChangePercent')},
                {'name': 'regularMarketDayHigh',
                    'value': resp.get('regularMarketDayHigh')},
                {'name': 'regularMarketDayLow',
                    'value': resp.get('regularMarketDayLow')},
                {'name': 'regularMarketDayRange',
                    'value': resp.get('regularMarketDayRange')},
                {'name': 'regularMarketOpen',
                    'value': resp.get('regularMarketOpen')},
                {'name': 'regularMarketPreviousClose',
                    'value': resp.get('regularMarketPreviousClose')},
                {'name': 'regularMarketPrice',
                    'value': resp.get('regularMarketPrice')},
                {'name': 'twoHundredDayAverage',
                    'value': resp.get('twoHundredDayAverage')},
                {'name': 'twoHundredDayAverageChange',
                    'value': resp.get('twoHundredDayAverageChange')},
                {'name': 'twoHundredDayAverageChangePercent',
                    'value': resp.get('twoHundredDayAverageChangePercent')},
                ],
        'Financial': [
                {'name': 'epsCurrentYear',
                 'value': resp.get('epsCurrentYear')},
                {'name': 'epsForward',
                    'value': resp.get('epsForward')},
                {'name': 'epsTrailingTwelveMonths',
                    'value': resp.get('epsTrailingTwelveMonths')},
                {'name': 'epsForward',
                    'value': resp.get('epsForward')},
                {'name': 'epsForward',
                    'value': resp.get('epsForward')},
                {'name': 'priceEpsCurrentYear',
                    'value': resp.get('priceEpsCurrentYear')},
                {'name': 'bookValue',
                    'value': resp.get('bookValue')},
                {'name': 'epsForward',
                    'value': resp.get('epsForward')},
                {'name': 'priceToBook',
                    'value': resp.get('priceToBook')},
                {'name': 'trailingPE',
                    'value': resp.get('trailingPE')},
            ]
    }

    return jsonify(data)


def get_earnings_history_(tick):
    ern_hist = yf.get_earnings_history(tick)
    epsactual = [eh['epsactual']
                 for eh in ern_hist][::-1]
    epsestimate = [eh['epsestimate']
                   for eh in ern_hist][::-1]
    date = [eh['startdatetime'][0:10]
            for eh in ern_hist][::-1]

    return {'epsactual': epsactual, 'epsestimate': epsestimate, 'date': date}

# get_analysts_info
# get_balance_sheet
# get_cash_flow
# get_currencies
# get_data
# get_day_gainers
# get_day_losers
# get_day_most_active
# get_dividends
# get_earnings
# get_earnings_for_date
# get_earnings_in_date_range
# get_earnings_history
# get_financials
# get_futures
# get_holders
# get_income_statement
# get_live_price
# get_market_status
# get_next_earnings_date
# get_premarket_price
# get_postmarket_price
# get_quote_data
# get_quote_table
# get_top_crypto
# get_splits
# get_stats
# get_stats_valuation
# get_undervalued_large_caps
# tickers_dow
# tickers_ftse100
# tickers_ftse250
# tickers_ibovespa
# tickers_nasdaq
# tickers_nifty50
# tickers_niftybank
# tickers_other
# tickers_sp500
