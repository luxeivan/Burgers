<?php
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $street = $_POST['street'];
    $home = $_POST['home'];
    $part = $_POST['part'];
    $appt = $_POST['appt'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $payment = $_POST['payment'];
    isset($_POST['callback'])?$callback = 'да':$callback = 'нет';   
    $body = '
    <html>
    <head>            
        <title>Заказ</title>
    </head>
    <body>
        <h2>Поступил новый заказ</h2>
        <ul>
            <li><b>Имя:</b> ' .$name.'</li>
            <li><b>Телефон:</b> ' .$tel.'</li>
            <li><b>Улица:</b> ' .$street.'</li>
            <li><b>Дом:</b> ' .$home.'</li>
            <li><b>Корпус:</b> ' .$part.'</li>
            <li><b>Квартира:</b> ' .$appt.'</li>
            <li><b>Этаж:</b> ' .$floor.'</li>
            <li><b>Комментарий:</b> ' .$comment.'</li>
            <li><b>Тип оплаты:</b> ' .$payment.'</li>
            <li><b>Перезванивать:</b> '.$callback.'</li>
        </ul>
    </body>
    </html>';
  $headers = 'From: luxeivan@gmail.com' . "\r\n" .
  'Reply-To: luxeivan@gmail.com' . "\r\n" .
  'X-Mailer: PHP/'. "\r\n" .
  'Content-type: text/html; charset=UTF-8'. "\r\n";
  $otvet = mail('luxeivan@gmail.com','Новый заказ',$body,$headers);
  if($otvet){
      echo 'Письмо отправлено';
  }else{
      echo 'Ошибка отправки';
  } ;
?>