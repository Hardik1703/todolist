"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHendler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Avialable!!</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-3xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 rounded text-white py-2 px-4 font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-gray-500 text-6xl text-white text-center p-5">
        TodoList
      </h1>
      <form onSubmit={submitHendler}>
        <input
          type="text"
          placeholder="Enter Title"
          className="border border-3 border-black m-5 p-3 rounded"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="Enter Details"
          className="border border-3 border-black m-5 p-3 rounded"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          required
        />
        <button className="bg-black text-white py-3 px-4 rounded">
          Submit
        </button>
      </form>
      <div className="p-8 mt-10 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
