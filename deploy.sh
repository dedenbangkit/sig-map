php artisan cache:clear
npm run prod
ssh deden-ohio "sudo chown ec2-user:ec2-user -R /var/www/html/site/sig-map"
rsync -vzaP --exclude 'node_modules' --exclude '.git' --exclude '.env' --exclude 'vendor' --exclude 'test' --exclude 'bootstrap' --rsh="ssh -i ~/Documents/Pem/deden-aws-us-ohio.pem" "." ec2-user@13.59.213.248:"/var/www/html/site/sig-map"
ssh deden-ohio "cd /var/www/html/site/sig-map/ && php artisan cache:clear && sudo chown apache:apache -R /var/www/html/site/sig-map"
