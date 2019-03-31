<?php

require_once 'response.php';

class ResponseSuccess extends Response
{
    public $todo;

    function __construct($todo, $message = null){
        parent::__construct(true, $message); 
        $this->todo  = $todo;
    }

}
