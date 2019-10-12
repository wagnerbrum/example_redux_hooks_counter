import React from "react";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import Counter from "./modules/Counter";
import Name from "./modules/Name";

export default function App() {
    return (
        <Provider store={store}>
            <Counter />
            <Name />
        </Provider>
    );
}
