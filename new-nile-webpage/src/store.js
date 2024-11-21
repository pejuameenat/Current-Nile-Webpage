import { configureStore} from "@reduxjs/toolkit"
import formReducer from "./StoreFeatures/FormSlice/FormSlice";
import modalReducer from './StoreFeatures/Modal/ModalSlice'
import faqReducer from './StoreFeatures/FaqSlice/FaqSlice'
export const store = configureStore({
    reducer: {
        form: formReducer,
        modal: modalReducer,
        faq:faqReducer,
    }
})
