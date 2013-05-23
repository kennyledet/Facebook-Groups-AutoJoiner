facebook-Groups-AutoJoiner
==========================

casperjs script for automating the sending of Join Group requests to facebook groups. Originally written for use in one of my larger projects.

setup instructions
==================

Follow the easy casperjs setup guide here: http://casperjs.org/installation.html

The casperjs executable is Python so make sure you also have it installed.

run instructions
================
In the directory in which you have the go.js file saved, run
```shell
casperjs go.js --email=EMAIL --pass=PASSWORD --groups=118922578264460,535754936441035,etc...
```

Of course, replace EMAIL and PASSWORD with your Facebook email and password.

the --groups argument can take any number of Facebook Group IDs separated by commas (no spaces!)

How you build this string is up to you. The possibilities are endless ;). Personally, I'm building the string based on user input on the server in a meteor.js web application
(it's a Facebook Groups marketing tool) and calling go.js with node.js's 'child_process' module.