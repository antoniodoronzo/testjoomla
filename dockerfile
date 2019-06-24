FROM joomla:latest

WORKDIR /var/www/html

COPY ./php.ini /usr/local/etc/php/php.ini

CMD /etc/init.d/apache2 restart