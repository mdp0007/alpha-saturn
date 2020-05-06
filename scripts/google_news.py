from googlenewspy import Search
from datetime import datetime

search = Search(host_language="en-US", geolocation="US")
text = "intitle:\"to acquire\""
results = search.news(text)

sortedResults = sorted(
    results,
    key=lambda x: x['date'], reverse=True
)

for result in sortedResults:
    print(result["date"])
    print(result["title"])
    print("URL: " + result["url"])
    print("-------")
