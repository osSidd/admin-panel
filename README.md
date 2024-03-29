# Admin panel
A web app demonstrating a simple admin panel ui for short news app - News2day

## Install and run 
For installing the dependencies
``` 
    cd admin-panel
    npm install
```
For running a local development server
```
    cd admin-panel
    npm run dev
```

## Technologies used
- ReactJS - For creating the ui, state management and api integration

- MUI - For pre made compoents, styling and icons

- React router dom - For handling client side routing

- D3 - For making graphs and charts

## Approach
The app has been developed by leveraging ReactJS apis, like useContext, createContext, useReducer and custom hooks for managing global state, and useState for local state. React's component reusability is mainly utilized for componets like graphs and feed tables, thus making code more modular.
<br/><br/>
useEffect hook is used in graph and chart components for effective rerendering the app as state changes.
<br/><br/>
React router dom library is used for the client side routing.

