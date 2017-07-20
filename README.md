# Buzzouce client

To serve the client on 0.0.0.0 on port 3333, run:

```
npm run start
```

You can change the hostname and the port in `brunch-config.js`.

If you changed the hostname or the ports of the 3 required servers (Slanger API, Slanger WebSocket or Buzzouce API), update the proper constants in `app/components/config.js`.


## Use it!

Players can visit the website (http://SERVER_IP:3333) to pick a name and play. Champions can append ?name=Endive to the URL to have their name preset (Endive, in this case)!

The master of ceremony can visit http://SERVER_IP:3333?name=admin to access the special page to monitor the buzzes, accept and reject reponses and reset buzzers.
