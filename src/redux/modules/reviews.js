import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),

    reviews: "리뷰1",
  },
  {
    id: shortid.generate(),

    reviews: "리뷰2",
  },
  {
    id: shortid.generate(),

    reviews: "리뷰3",
  },
];

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "COMMENT_ADD":
      return [...state, action.payload];

    case "COMMENT_DELETE":
      return state.filter((reviews) => reviews.id !== action.payload);
    default:
      return state;
  }
};

export default reviews;
