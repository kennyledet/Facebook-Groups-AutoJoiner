var casper = require('casper').create();
var email  = casper.cli.options.email, pass = casper.cli.options.pass;
var groups = casper.cli.options.groups.toString().search(',') ? casper.cli.options.groups.toString().split(',') : [casper.cli.options.groups];

casper.start('https://facebook.com', function() {
    this.fill('form[action="https://www.facebook.com/login.php?login_attempt=1"]', 
              { email: email, pass: pass }, true);
});

var links = [];
for (var i = 0; i < groups.length; i++)
	links.push('https://www.facebook.com/groups/'+groups[i]);

casper.each(links, function(self, link) {
	var groupId   = link.split('/').pop();
	var clickThis = 'a[ajaxify="/ajax/groups/membership/r2j.php?ref=group_jump_header&group_id='+groupId+'"]';
    self.thenOpen(link, function() {
        this.click(clickThis);
    });
});

casper.run();