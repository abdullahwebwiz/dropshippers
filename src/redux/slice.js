const { createSlice } = require("@reduxjs/toolkit");
let userid =
  typeof window !== "undefined" ? window.localStorage.getItem("userid") : false;

let initialState = {
  user_data: {
    user_name: "",
    user_phone: "",
    user_city: "",
    user_address: "",
    password: "",
  },
  product_data: {
    p_id: "",
    allow: false,
    eventType: "add",
    name: "",
    price: "",
    discount: "",
    description: "",
    video: "",
    company: "",
    model: "",
    type: "",
  },
  userid: userid ? userid : false,
  
  adminAuth: false,
  usersList: [],
};

const slice = createSlice({
  name: "firstslice",
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      state.user_data.user_name = action.payload;
    },
    updateUserPhone: (state, action) => {
      state.user_data.user_phone = action.payload;
    },
    updateUserCity: (state, action) => {
      state.user_data.user_city = action.payload;
    },
    updateUserAddress: (state, action) => {
      state.user_data.user_address = action.payload;
    },
    updatePassword: (state, action) => {
      state.user_data.password = action.payload;
    },
    updateuserid: (state, action) => {
      state.userid = action.payload;
    },
    updateAdminAuth: (state, action) => {
      state.adminAuth = true;
    },
    // _______________________________________________________
    updateProductName: (state, action) => {
      state.product_data.name = action.payload;
    },
    updateProductPrice: (state, action) => {
      state.product_data.price = action.payload;
    },
    updateProductDiscount: (state, action) => {
      state.product_data.discount = action.payload;
    },
    updateProductDescription: (state, action) => {
      state.product_data.description = action.payload;
    },
    updateProductVideo: (state, action) => {
      state.product_data.video = action.payload;
    },
    updateProductCompany: (state, action) => {
      state.product_data.company = action.payload;
    },
    updateProductModel: (state, action) => {
      state.product_data.model = action.payload;
    },
    updateProductType: (state, action) => {
      state.product_data.type = action.payload;
    },
    updateProductallow: (state, action) => {
      state.product_data.allow = !state.product_data.allow;
    },
    updateProductEventType: (state, action) => {
      state.product_data.eventType = action.payload;
    },
    updateProductId: (state, action) => {
      state.product_data.p_id = action.payload;
    },
    // __________________________________________________________
  },
});

export const {
  updateProductId,
  updateUserName,
  updatePassword,
  updateUserPhone,
  updateUserAddress,
  updateUserCity,
  updateuserid,
  updateAdminAuth,
  updateProductName,
  updateProductPrice,
  updateProductDiscount,
  updateProductVideo,
  updateProductDescription,
  updateProductCompany,
  updateProductModel,
  updateProductType,
  updateProductallow,
  updateProductEventType,
} = slice.actions;
export default slice.reducer;
