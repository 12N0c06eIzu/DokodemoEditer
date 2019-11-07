<!doctype html>
<html lang="ja">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/style.css">

  <title>よくわかるPHPの教科書</title>
</head>
<body>
  <main>
      <?php
      try {
        $db = new PDO('mysql:dbname=mydb;
        host=localhost;
        charset=utf8','root','');
      } catch (PDOException $e) {
        echo 'DB接続エラー :' . $e -> getMessage();
      }
      ?>
  </main>
</body>
</html>
