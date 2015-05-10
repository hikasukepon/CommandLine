# CommandLine
with jQuery&amp;PHP&amp;Ajax.

------

Javascript & PHP Terminal.

Please edit api.php line 22~45.

```php
case 'help':
  $array['output'] = msg('HELP MESSAGE:
commandname --command description.
commandname2 --command description.
commandname3 --command description.
commandname4 --command description.');
  break;


case 'commandname':
  $array['output'] = msg('return text');
  break;

case 'commandname2':
  $array['output'] = msg('return text2');
  break;

case 'commandname3':
  $array['output'] = msg('return text3');
  break;

case 'commandname4':
  $array['output'] = msg('return text4');
  break;
```

example:
```php
case 'help':
  $array['output'] = msg('HELP MESSAGE:
help --command help.
output hogehoge --echo "hogehoge".
for 100 --100 echo "hogehoge". ');
  break;


case 'output hogehoge':
  $array['output'] = msg('hogehoge');
  break;
  
case 'for 100':
  $output = '';
  for($i = 0; $i <= 100; $i++) {
    $output .= 'hogehoge\n';
  }
  $array['output'] = msg($hogehoge);
  break;
```

next, access 'index.html'.
good luck!
