# 💣 react-native-kill-packager

*Kill the React Native Packager running on port 8081.*

Simply run `react-native-kill-packager` when you encounter this:

```
  ERROR  Packager can't listen on port 8081

  Most likely another process is already using this port
  Run the following command to find out which process:

     lsof -n -i4TCP:8081

  You can either shut down the other process:

     kill -9 <PID>

  or run packager on different port.

```

You can add it as an npm script and run `npm run packager:kill` or `npm run packager:restart`:

```
"scripts": {
  "packager:kill": "react-native-kill-packager",
  "packager:restart": "react-native-kill-packager; npm start",
};
```

## Installation

```
npm install --save-dev react-native-kill-packager
```

## Credits
[Livio Bieri](https://github.com/livioso/) 🚀
