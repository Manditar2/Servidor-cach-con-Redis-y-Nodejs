import requests 
import time
import random

consulta = ['animal', 'career', 'celebrity', 'dev', 'explicit', 'fashion', 'food', 'history', 'money', 'movie', 'music', 'political', 'religion', 'science', 'sport', 'travel']


def call_api(endpoint):
    response = requests.get(endpoint)
    if response.status_code == 200:
        return response.json()
    else:
        return None
print(call_api('https://api.chucknorris.io/jokes/random'))

""" f = open('./datos_api.txt','a')
for i in range(500):
    consulta_escogida = random.choice(consulta)
    inicio = time.time()
    call_api('https://api.chucknorris.io/jokes/{consulta_escogida}')
    fin  = time.time()
    tiempo = fin - inicio
    f.write('\n' + f"{tiempo}")
f.close() """   



