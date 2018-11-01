from bottle import request, Bottle, template, static_file, abort
import json
import time
from argparse import ArgumentParser
from log import log_info

app = Bottle()

@app.route('/')
def index_html():
    return template("index")

@app.route('/test')
def test():
    return {"test": "test"}

@app.route("/items")
def get_item_list():
    res = {
        "list": [
            {
                "id": 1,
                "title": "HAPPY GLASS",
                "description": "Description",
                "bodyURL": "https://html5.gamedistribution.com/7a89fa5298ae4c248da2c0c006eca1fa/",
                "imgURL": "https://s3-ap-northeast-1.amazonaws.com/ml-html5game/game_thumbnail/unnamed.png"
            },
            {
                "id": 2,
                "title": "グラディウス",
                "description": "Description",
                "bodyURL": "http://appsweets.net/gradius/index.html",
                "imgURL": "https://s3-ap-northeast-1.amazonaws.com/ml-html5game/game_thumbnail/Gradius.png"
            }
        ]
    }
    res["total"] = len(res["list"])
    return res


@app.route("/statics/<filepath:path>")
def statics(filepath):
    return static_file(filepath, root="./statics")


if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('--port', dest="port", type=int, default=80)
    parser.add_argument('--debug', dest="debug", action="store_true")
    args = parser.parse_args()
    port = args.port
    app.run(host="0.0.0.0", port=port, debug=True, reloader=True)
