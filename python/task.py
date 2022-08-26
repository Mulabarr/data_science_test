import numpy as np
import matplotlib.pyplot as plt
import requests

url = 'https://connectors.windsor.ai/google_ads?api_key=1c45ad2a046f7660c7a9f6c6c35c8f547880&date_preset=last_7d&fields=account_name,campaign,clicks,source,spend&_renderer=json'
r = requests.get(url=url).json().get("data")

companies = [data.get("campaign") for data in r]
clicks = [data.get("clicks") for data in r]
spend = [data.get("spend") for data in r]

x = np.arange(len(r))
ax1 = plt.subplot(1, 1, 1)
w = 0.3

plt.xticks(x, companies, rotation=90)
pop = ax1.bar(x, clicks, width=w, color='#0fa83d', align='center')

ax2 = ax1.twinx()
gdp = ax2.bar(x + w, spend, width=w, color='#1341bf', align='center')

plt.legend([pop, gdp], ['Clicks', 'Spend $'])

plt.show()
