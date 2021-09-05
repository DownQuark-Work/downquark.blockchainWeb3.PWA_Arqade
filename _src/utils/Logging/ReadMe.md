# Go Access
> Apache Webserver Log analyzer
## Install
`$ brew install goaccess`
## CONFIG:
`$ vi /usr/local/Cellar/goaccess/1.5.1/etc/goaccess/goaccess.conf`
## Run it (basic)
- `$ ssh -i ~/.ssh/levelshare.pem -nt ec2-user@ec2-3-14-106-167.us-east-2.compute.amazonaws.com 'sudo tail -f /var/log/yum.log' | goaccess -`
- `$ ssh -i ~/.ssh/levelshare.pem -nt ec2-user@ec2-3-14-106-167.us-east-2.compute.amazonaws.com 'sudo tail -f /var/log/httpd/access_log' | goaccess -`
- `$ ssh -i ~/.ssh/levelshare.pem -nt ec2-user@ec2-3-14-106-167.us-east-2.compute.amazonaws.com 'sudo tail -f /var/log/httpd/access_log /var/log/httpd/ssl_access_log' | goaccess -`
### as HTML
`$ https://goaccess.io/man#examples`
_PING_
- `$ ssh -i ~/.ssh/levelshare.pem -nt ec2-user@ec2-3-14-106-167.us-east-2.compute.amazonaws.com 'sudo cat /var/log/httpd/access_log /var/log/httpd/ssl_access_log' | goaccess -o html > ~/Desktop/cadme/xz.html` Then launch the server in that directory: `$ cd ~/Desktop/cadme && cad` Navigate to _0.0.0.0:1313/xz.html_
_TAIL_
- `$ ssh -i ~/.ssh/levelshare.pem -nt ec2-user@ec2-3-14-106-167.us-east-2.compute.amazonaws.com 'sudo cat /var/log/httpd/access_log /var/log/httpd/ssl_access_log' | goaccess -o ~/Desktop/cadme/report.html --real-time-html -`
### as JSON
- `$ ssh -i ~/.ssh/levelshare.pem -nt ec2-user@ec2-3-14-106-167.us-east-2.compute.amazonaws.com 'sudo cat /var/log/httpd/access_log /var/log/httpd/ssl_access_log' | goaccess -o json > ~/Desktop/cadme/xz.json`
### Docs:
- /Users/jmelnick/_mlnck/Documents/_dev/_levelshare/core/utilities/GoAccess/GO_ACCESS_TUTORIAL.html
  - https://github.com/allinurl/goaccess <<--
  - https://faun.pub/analyze-custom-http-access-log-with-goaccess-678df58ab432
  - https://goaccess.io/man#custom-log
  - https://goaccess.io/man#options
- https://www.npmjs.com/package/source-map-explorer
