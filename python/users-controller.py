from flask import Flask
app = Flask(__name__)

import mysql.connector
import json
from flask import request

class userController:
    
    def __init__(self):

        try:
            self.cnx = mysql.connector.connect(
                user='root',  # ユーザー名
                password='root',  # パスワード
                host='localhost',  # ホスト名(IPアドレス）
                database='bank_db'  # データベース名
            )
            # コネクションの設定
            self.cnx.autocommit = False
 
            # カーソル情報をクラス変数に格納
            self.cnx.is_connected()
            self.cursor = self.cnx.cursor()

            print("成功")

        except Exception as e:
            print(f"Error Occurred: {e}")

    @app.route('/bank/user')
    def selectUser():
        query = ""
        if request.args.get('accountNumber') is not None:
            query = request.args.get('accountNumber')
        else:
            query = "パラメーターがないよ"
        sql = 'select * from user where number = {}'.format(query)
        self.cursor.execute(sql)
        for (number,icon,balance,name) in cursor:
            data = '{"icon" : {}, "balance" : {}, "name" : {}}'.format(icon,balance,name)
        j = json.loads(data)
        return j
        return app.json(j)


if __name__ == "__main__":

    app.run(debug=True)