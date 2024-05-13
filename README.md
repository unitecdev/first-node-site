# node-first-site

以下の手順でサイトをセットアップしてください。

1. コマンドプロンプトを開きます。
2. WSL を起動します。
    ```
    wsl
    ```
3. `/home` ディレクトリに移動します。
    ```
    cd /home
    ```
4. Git をインストールします。
5. GitHub CLI をインストールします。
6. `unitecdev/first-node-site` リポジトリをクローンします。
    ```
    gh repo clone unitecdev/first-node-site
    ```
7. `first-node-site` ディレクトリを VSCode で開きます。
    ```
    code first-node-site
    ```
8. VSCode の拡張機能をいくつかインストールし、Reopen in Container を選択します。
9. VSCode 内でターミナルを開きます。
10. `backend` ディレクトリに移動します。
     ```
     cd backend
     ```
11. 必要なパッケージをインストールします。
     ```
     npm ci
     ```
12. `backend.js` を実行します。
     ```
     node backend.js
     ```
13. もう一つのターミナルを VSCode 内で開きます。
14. `frontend` ディレクトリに移動します。
     ```
     cd frontend
     ```
15. `frontend.js` を実行します。
     ```
     node frontend.js
     ```
16. http://localhost:8080/index.html にアクセスします。