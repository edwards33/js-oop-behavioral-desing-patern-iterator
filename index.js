newsFeeds = [
    {
        type: 'top-headlines',
        text: 'BBC-news'
      },
    {
        type: 'music',
        text: 'MTV'
      },
    {
        type: 'everything',
        text: 'CCN'
    }
]

for (let feed of newsFeeds) {
    console.log(feed.type);
}
