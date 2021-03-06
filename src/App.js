import React from "react";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import Counter from "./modules/Counter";
import Name from "./modules/Name";
import ToDo from "./modules/ToDo";

export default function App() {
    return (
        <Provider store={store}>
            <Counter />
            <Name />
            <ToDo />
        </Provider>
    );
}
