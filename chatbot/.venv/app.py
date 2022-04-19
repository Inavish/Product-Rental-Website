# .venv\scripts\activate
# python -m flask run

from flask import Flask, render_template, request, redirect, url_for, session
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, support_credentials=True)
@app.route("/")
def home():
    return "Hello, Flask!"

# Chat bot code
# with open('file.txt', 'r') as file:
#     conversation = file.read()

bot1 = ChatBot('mysqlbot', storage_adapter="chatterbot.storage.SQLStorageAdapter",
               database_uri="mysql+pymysql://root:inavish15@localhost/fynd", )
# bot1 = ChatBot("Fynd ChatBot")
trainer2 = ListTrainer(bot1)
trainer2.train(["Hey",
                "Hi there!",
                "Hi",
                "Hi!",
                "How are you doing?",
                "I'm doing great.",
                "That is good to hear",
                "Thank you.",
                "You're welcome.",
                "What is your name?", "My name is Fynd ChatBot",
                "Who created you?", "Shivani",
                "Tell me about yourself",
                "My name is Fynd Chatbot. I am created to help customers for there general queries",
                "Contact",
                "Email : Fynd@gmail.com, Mobile number : +91 1234567890 Location : Mumbai, Maharashtra",
                "Available items", "T-shirt, Dress, Jeans, Jeans, saree etc",
                "Delivery", "Delivery of product will be done in 3-2 days",
                "Current Offers", "Diwali sale, 50% discount on fist order",
                "Projects", ""])

# trainer2.train(conversation)
# Functions for chatbot-----------------------------------------------------------------------------------------

@cross_origin(supports_credentials=True)
@app.route("/get", methods=['POST'])
def get_bot_response():
    userText = request.form.get('msg')
    print(userText)
    print(str(bot1.get_response(userText)))
    return str(bot1.get_response(userText))

if __name__ == "__main__":
    app.run(debug=True)
