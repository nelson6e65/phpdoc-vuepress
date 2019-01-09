<?php

namespace NelsonMartell\VuePress\Demo;

/**
 * An example function.
 *
 * @param int         $index Index.
 * @param string|null $title  Name.
 *
 * @return string
 *
 * @author Nelson Martell <nelson6e65@gmail.com>
 * @since 1.0.0
 */
function example($index, $title = null)
{
    $r = 'Example '.$index;

    if ($title) {
        $r .= ' '.$title;
    }

    return $r.': ';
}
