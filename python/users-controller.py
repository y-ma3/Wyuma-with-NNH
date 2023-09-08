from flask import Flask
from flask import request, make_response, jsonify
from flask_cors import CORS

import mysql.connector
import json

class userController:
    
    def __init__(self):

        app = Flask(__name__, static_folder="./build/static", template_folder="./build")
        CORS(app)

        app.debug = True
        app.run(host='127.0.0.1', port=5000)

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

        except Exception as e:
            print(f"Error Occurred: {e}")

    @app.route('bank/user')
    def selectUser(self, number):
        sql = 'select * from user where number = {}'.format(number)
        self.cursor.execute(sql)
        for (number,icon,balance,name) in cursor:
            data = '{"icon" : {}, "balance" : {}, "name" : {}}'.format(icon,balance,name)
        j = json.loads(data)
        return app.json(j)


