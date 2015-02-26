<?php

const DIR = '../projects/service/api';

if (!stream_resolve_include_path(DIR)) {
    exit('dir not exists!');
}

chdir(DIR);

foreach (glob('*.rst') as $key => $fileName) {
    $fileBaseName = substr($fileName, 0, -4);
    if ($fileBaseName != 'index') {
        echo $fileBaseName , PHP_EOL;
    }
}
