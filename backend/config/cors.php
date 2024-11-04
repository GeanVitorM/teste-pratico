<?php

use Illuminate\Support\Str;

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:4200'],
    'allowed_headers' => ['*'],
    'supports_credentials' => true,
];



