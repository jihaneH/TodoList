<?php

require_once 'response.php';

class ResponseFail extends Response
{

    function __construct($message){        
       parent::__construct(false, $message); 
    }

}


