var searchCommands = {
  submit: function() {
    this.waitForElementVisible('@submit', 3000)
      .click('@submit')
      .api.pause(1000);
    return this; // Return page object for chaining
  },	
  search: function(searchquery){
  	this.setValue('@searchBox', searchquery).submit()
  	.api.pause(3000);
  	return this;
  }
};
var addAnItemtoBasketCommands = {
	add : function(){
		this.waitForElementVisible('body', 3000)
		.click('@searchresult')
		.waitForElementVisible('@additem', 5000)
		.click('@additem')
		return this;
	}
};

module.exports = {
	url:'http://www.asos.com',
	elements:{
		logo:'a#logo',
		searchBox:'input.search-box[type=text]',
		submit:'a.go',
		searchresult:'li.product-container:nth-child(3) a:first-child',
		additem:'a.add-button'
	},
	commands:[searchCommands, addAnItemtoBasketCommands]
};
