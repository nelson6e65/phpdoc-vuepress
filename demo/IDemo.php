<?php

namespace NelsonMartell\VuePress\Demo;

/**
 * Example interface.
 *
 * @since 1.0.0
 * @author Nelson Martell <nelson6e65@gmail.com>
 */
interface IDemo
{
    /**
     * Example class constant.
     *
     * @var boolean
     */
    const EXAMPLE = true;

    /**
     * Is the example ready?
     *
     * @return bool
     */
    public function isReady();
}
