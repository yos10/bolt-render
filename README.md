## アプリの再起動

フリープランでは 15 分間何もしないで放置しているとボットが反応しなくなる。

https://community.render.com/t/a-dump-question-how-to-reboot-a-server-on-render/1651

再起動は用意されていないので、以下の方法を用いるといいらしい。

- アプリの左のメニューの `Shell` からプロセスを kill (有料のプランでしか使えないから未確認)

- アプリの右上にある `Manual Deploy` をクリック

- SSH で接続してプロセスを kill (未確認)

## メモ

runtime enviroment は node, Docker どちらの方法でデプロイしても動作した。

node はビルドに 4 分ほど。

Docker はビルドに 1 分ほど。

Docker でデプロイするのが良さそう。

どちらの方法でデプロイしても Deploy failed と表示される。  
ボットは正常に動作していた。
