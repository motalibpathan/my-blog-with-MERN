import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async (e) => {
    e.preventDefault();
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };
  return (
    <form onSubmit={addComment} className="shadow rounded px-8 py-6 my-4">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Add a comment</h3>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
        Name:{" "}
      </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
        Comment:{" "}
      </label>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        cols="4"
        rows="5"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow">
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
