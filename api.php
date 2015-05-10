<?php
header("Content-Type: application/json; charset=utf-8");


function msg($text) {
  $info = "<span class='f'>&gt; </span>";
  $text = explode("\n", $text);
  $output = '';
  foreach($text as $value) {
    $output .= $info . "" . $value . "\n";
  }
  return $output;
}


$msg = (!empty($_POST['postMessage'])) ? $_POST['postMessage'] : '';
if(empty($msg)) {
  echo json_encode( array( 'error' => msg('ERROR! post message is empty.') ) );
  die();
}
switch ($msg) {
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
  
  
    default:
       $array['error'] = msg('ERROR! command not foud.');
}

echo json_encode($array);