var request = require('superagent');

request.get('https://en.wikipedia.org/w/api.php?action=query')
  .query({titles: 'Seattle'})
  .query({format: 'json'})
  .query({prop: 'revisions'})
  .query({rvprop: 'content'})
  .end(function(err, res) {
    // var resObj = JSON.parse(res.text);
    var page = JSON.parse(res.res.text).query.pages;
    console.log(page[Object.keys(page)[0]].revisions);
    // console.log(resObj.offers[0].baseFare);
    // this.setState({
    //   firstListed: resObj.offers[0]
    // })
    // for (let index in resObj.offers) { console.log(res.text[index])};
})
