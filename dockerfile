FROM joomla:latest

WORKDIR /var/www/html

COPY ./php.ini /usr/local/etc/php/php.ini

ENTRYPOINT ["/entrypoint.sh"]
#CMD ["%%CMD%%"]
