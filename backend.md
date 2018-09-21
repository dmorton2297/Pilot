## In Pilot/server, run the following commands.

* `composer install`
* `chmod -R 777 ./server`
* `chmod -R 775 ./server/storage`
* `php artisan key:generate`
* `mv .env.example to .env`
* `php artisan serve`