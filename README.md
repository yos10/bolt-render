ソケットモードを利用している場合、render では Background Worker でないと無理みたい。

https://slack.dev/bolt-js/ja-jp/deployments/heroku#prepare-the-app-for-heroku

https://community.render.com/t/web-app-discord-bot-deploy-keeps-failing/5361/2

ボットをデプロイするなら railway.app が良さそう。

無料の Starter プランでも 15 分間アクセスないとダウンはしないのでずっと動く。

render と railway の違い

|                         | render                                                                                                             | railway                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Dockerfile でのデプロイ | マルチステージビルドに対応していない([ドキュメント](https://render.com/docs/docker)には書いてあるけどできなかった) | マルチステージビルドに対応(ステージの指定はできない)                    |
| インアクティブでダウン  | 15 分後(リクエストあればリスタート)                                                                                | なし                                                                    |
| PostgreSQL の期限       | [90 日後に停止](https://render.com/docs/free#free-postgresql-databases)                                            | [ドキュメント](https://docs.railway.app/develop/services)見るとなさそう |
| PostgreSQL のバージョン | [選択可](https://render.com/docs/databases#database-versions--upgrades)                                            | [選択不可](https://docs.railway.app/databases/postgresql#image)         |
