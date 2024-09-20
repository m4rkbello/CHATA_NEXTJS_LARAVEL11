<?php 

Broadcast::channel('chat', function ($user) {
    // Authorize who can listen to the channel, or return true to allow all
    return true; // You can add more authorization logic here
});