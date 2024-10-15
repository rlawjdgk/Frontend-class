let initialState = { contactList: [], keyword: "" };

const reducer = (state = initialState, action) => {
  // console.log(state);
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    // return {
    //   ...state,
    //   contactList: [
    //     ...state.contactList,
    //     { name: payload.name, phoneNumber: payload.phoneNumber },
    //   ],
    // };
    case "SEARCH":
      state.keyword = payload.keyword;
      break;
    // return {
    //   ...state,
    //   keyword: payload.keyword,
    // };
    default:
      return { ...state };
  }
};

export default reducer;

// const userList = [
//   {
//     name: "",
//     number: "123456789",
//   },
//   {
//     name: "A",
//     number: "123456789",
//   },
//   {
//     name: "A",
//     number: "123456789",
//   },
// ];
