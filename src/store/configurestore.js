import { configureStore } from "@reduxjs/toolkit";
import Slice from "./ItemSlice";

const store= configureStore({
    reducer:{
        foods: Slice,
    }
});
export default store