from bottle import request, Bottle, template, static_file, abort
import json
import time
from argparse import ArgumentParser
from log import log_info

app = Bottle()

@app.route('/')
def index_html():
    return template("index")


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
