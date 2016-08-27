# react-native-kill-packager

Kill -9 React Native Packager running on port 8081.

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

You can also add it as an npm script:

```
"scripts": {
  "packager:kill": "react-native-kill-packager",
};
```

and run `npm run packager:kill`.

[![dependency status](https://david-dm.org/livioso/react-native-kill-packager.svg)](https://david-dm.org/livioso/react-native-kill-packager)

## Installation

```
npm install --save-dev react-native-kill-packager
```

## Usage

## Credits
[Livio Bieri](https://github.com/livioso/)
