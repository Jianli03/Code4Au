# Code4Au

There’s tow charts of Australia Exports data 
Hosted at [http://pro-energy.com.au/trading/index.html]) (TBA: It takes a while when a browser firstly load it)
 
# Objective

Make Australia's international merchandise trade statistics record goods data easier to access and understand, by giving users the information most relevant to them and their issues, and presenting it with graphics to clarify the significance of the changes and trends.


# Key Users

### People most likely to make the effort to look up exports data:
Social activists

small businesses

Journalists

Employees of non-profit organizations

Regular citizens who take a personal interest in international trading.

# How it Works


Right now there are only two charts: one for 2016 exports statistics by countries in the world displayed in a globe map with colors to differentiate the level of trading; another is a bubble scatter chart which shows the changes of volume of export with 7 Australia's major trading partners between 2012-2017. 

The plan was to use the ABS.Stat's API to dynamically retrieve data from ABS website using cross-domain ajax request, but their API is not fully functional yet. So I just manually upload and save the data in my pages. However, it is easy to switch to real-time data loading when their data becomes available by API.

The data visualization API I used is the Echarts provided by Baidu. Here is the [link](http://Echarts.baidu.com/).
