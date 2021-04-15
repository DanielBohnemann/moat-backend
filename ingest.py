import requests
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json
import pymongo
from pymongo import MongoClient
import time

coinSymbol = ["MKR", "SUSHI", "UNI", "AAVE", "YFI"]
while True:
    for i in range(len(coinSymbol)):
    #api connection
        url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
        parameters = {
                'symbol': coinSymbol[i],  
                }
        headers = {
                'Accepts': 'application/json',
                'X-CMC_PRO_API_KEY': 'e14f8f11-49bd-47b1-9c14-39c303b2a68a',
                }
        session = Session()
        session.headers.update(headers)
        response = session.get(url, params=parameters)
        data = json.loads(response.text)
        name = data['data'][coinSymbol[i]]['name']
        symbol = data['data'][coinSymbol[i]]['symbol']
        price = data['data'][coinSymbol[i]]['quote']['USD']['price']


        r =requests.post("http://localhost:8080/api/bluecrypts", data={
                    'name': name,
                    'symbol':symbol,
                    'price': price,
                })
    print("sleeping for 60 seconds")
    time.sleep(60)

print(r.status_code)