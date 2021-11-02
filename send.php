<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1843892517:AAHXtT_wIxTJpGK31FfhCy7rL_03Ua-lNXA";

//Сюда вставляем chat_id
$chat_id = "-597391854";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $email = ($_POST['email']);
    $text = ($_POST['text']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Email:' => $email,
        'Сообщение:' => $text
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Что-то пошло не так. Попробуйте отправить форму ещё раз.');
    }
}
?>