<?php require('dbconnect.php'); ?>
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
  <header>
    <h1 class="font-weight-normal">トップページです。</h1>
  </header>
  <main>
    <h2>Practice</h2>
    <!-- <a href="input.html">新しいメモを作成する</a> -->
    <form action="input_do.php" method="post">
        <textarea name="memo" rows="10" cols="50" placeholder="自由にメモを残してください"></textarea><br>
          <button type="submit">登録する</button>
    </form>
    <?php
    /* ここに、PHPのプログラムを記述します */
    try{
      $db = new PDO('mysql:dbname=mydb;
      host=localhost;
      charset=utf8',//utf-8ではなくutf8
      'root',
      '');
    }catch(PDOException $e){
      echo 'DB接続エラー:'. $e -> getMessage();
    }
    // echo "\n";

    //my_itemsを取得してきている
    // $records = $db->query('SELECT * FROM my_items');
    //

    if(isset($_REQUEST['page'] )&& is_numeric($_REQUEST['page'])){
      $page = $_REQUEST['page'];
    }else {
      $page = 1;
      // code...
    }


    $start = 5 * ($page - 1);

    $memos = $db -> prepare('SELECT * FROM memos ORDER BY id LIMIT ?, 5');
    $memos->bindParam(1, $start, PDO::PARAM_INT);
    $memos->execute();
    ?>

    <article class="">
      <?php while ($memo = $memos -> fetch()): ?>
        <p>
          <a href="memo.php?id=<?php print($memo['id']); ?>">
            <?php print(mb_substr($memo['memo'], 0, 50)); ?>
            <?php print((mb_strlen($memo['memo']) > 50 ? '...' : '')); ?>
          </a>
        </p>
        <time><?php print($memo['created_at']); ?></time>
        <hr>
      <?php endwhile; ?>

      <a href="http://localhost/memo/index.php?page=1">トップに戻る</a>
      |
      <?php if($page >= 2): ?>
        <a href="index.php?page=<?php print($page - 1); ?>"><?php print($page - 1); ?>ページ目へ</a>
      <?php endif; ?>
      |
      <?php
      $counts = $db ->query('SELECT COUNT(*) as cnt FROM memos');
      $count = $counts -> fetch();
      $max_page = floor($count['cnt'] / 5) + 1;
      if($page < $max_page):
        ?>
        <a href="index.php?page=<?php print($page + 1); ?>"><?php print($page + 1); ?>ページ目へ</a>
      <?php endif; ?>
    </article>
  </main>
</body>
</html>
