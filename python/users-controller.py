from flask import Flask
from flask_cors import CORS
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

uc = userController()

@app.route('/bank/user')
def selectUser():
    query = ""
    if request.args.get('accountNumber') is not None:
        query = request.args.get('accountNumber')
    else:
        query = "パラメーターがないよ"
    
    sql = 'select * from users where number = {}'.format(query)
    
    uc.cursor.execute(sql)
    userInfo = uc.cursor.fetchone()
    if userInfo:
        (number, icon, balance, name) = userInfo
        data = {"icon" : icon, "balance" : balance, "name" : name}
    j = json.dumps(data, ensure_ascii=False)
    return j
    return app.json(j)

# @app.route('/bank/users')
# def selectAllUser():
    
#     sql = 'select * from users'
    
#     uc.cursor.execute(sql)
#     userInfo = uc.cursor.fetchall()
#     print(userInfo)
#     if userInfo:
#         (number, icon, balance, name) = userInfo
#         data = {"icon" : icon, "balance" : balance, "name" : name}
#     j = json.dumps(data, ensure_ascii=False)
#     return j
#     return app.json(j)




if __name__ == "__main__":
    CORS(app)
    app.run(debug=True)
    