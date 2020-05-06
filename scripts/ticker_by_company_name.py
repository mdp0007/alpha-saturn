import requests
from bs4 import BeautifulSoup

company_names = ["Supernus", "Portola", "UnitedHealth Group Inc"]
for company_name in company_names:
    URL = "https://finance.yahoo.com/lookup?s=" + company_name
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")

    results = soup.select("tr[class^=data-row]")

    print("----------------------------------")
    print("Company Name: " + company_name)
    print("----------------------------------")
    for (i, result) in enumerate(results, start=1):
        cell = result.select("td")
        ticker = cell[0].text
        company_name = cell[1].text
        last_price = cell[2].text
        industry_category = cell[3].text
        cell_type = cell[4].text
        exchange = cell[5].text
        print("Ticker: " + ticker)
        print("Company Name: " + company_name)
        print("Last Price: " + last_price)
        print("Exchange: " + exchange)
        if i < len(results):
            print("-------")
        else:
            print("\n\n")
