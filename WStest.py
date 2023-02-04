#!/usr/bin/env python

# WS server example
# https://websockets.readthedocs.io/en/stable/intro.html

"""
`pip install websockets` then run as a script
"""

import asyncio
import json
import time
import websockets

async def hello(websocket, path):
    count = 0
    while True:
        count += 1
        time.sleep(3)
        await websocket.send(json.dumps({
            'data': 'here\'s some data!',
            'count': count,
        }))
        print(f'> {count}')

start_server = websockets.serve(hello, 'localhost', 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()