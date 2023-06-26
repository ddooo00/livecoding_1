import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const reviews = useSelector((state) => state.reviews);

  const todo = todos.filter((todo) => todo.id === id)[0];
  const review = reviews.filter((review) => review.id === id)[0];

  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      {todo.id}
      {reviews.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
      <br />
      이름 : <input />
      댓글 : <input />
      {reviews.filter((review) => {
        review.id === todo.id;
      })}
      <button
        onClick={() => {
          dispatch({
            type: "COMMENT_ADD",
            payload: reviews.id,
          });
        }}
        style={{ marginLeft: "10px" }}
      >
        댓글 등록
      </button>
    </div>
  );
};

export default Detail;
