<?php

namespace NelsonMartell\VuePress\Demo;

/**
 * Example class.
 *
 * @since 1.0.0
 * @author Nelson Martell <nelson6e65@gmail.com>
 */
class ExampleClass implements IDemo
{
    /**
     *
     * @var string
     */
    protected $example = null;

    public function __construct($example = 'demo')
    {
        $this->example = $example;
    }

    public function isReady()
    {
        return $this->example !== null;
    }

    final protected function isDemo()
    {
        return $this->example === 'demo';
    }
}
