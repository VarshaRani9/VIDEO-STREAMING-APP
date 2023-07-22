import React from "react";

const commentsData = [
  {
    name: "Varsha Rani",
    text: "great man 🙏",
    replies: [
      {
        name: "Indrajeet",
        text: "Awesome 🫡",
        replies: [
          {
            name: "varsha",
            text: "Was waiting for this .. Thank you ",
            replies: [
              {
                name: "Prachi Singh",
                text: "great man",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "varsha",
        text: "Loved this ...  ",
        replies: [],
      },
    ],
  },
  {
    name: "Ashish Singh",
    text: "Want some more such videos ... Liked it so much :)",
    replies: [
      {
        name: "varsha",
        text: "Yeah!! Me too ",
        replies: [
          {
            name: "Ashish",
            text: "great man",
            replies: [],
          },
        ],
      },
      {
        name: "Shanaya ",
        text: "great man",
        replies: [],
      },
    ],
  },
  {
    name: "Shanaya Srivastava",
    text: "Was waiting for this .. Thank you",
    replies: [],
  },
  {
    name: "Prachi Singh",
    text: "Awesome 🫡",
    replies: [
      {
        name: "varsha",
        text: "Finally! the wait is over ..",
        replies: [],
      },
      {
        name: "varsha",
        text: "Was waiting for this .. Thank you ",
        replies: [],
      },
      {
        name: "varsha",
        text: "great man",
        replies: [],
      },
    ],
  },
  {
    name: "varsha",
    text: "great man",
    replies: [
      {
        name: "varsha",
        text: "Awesome 🫡",
        replies: [],
      },
      {
        name: "Prachi Singh",
        text: "Was waiting for this .. Thank you ",
        replies: [],
      },
      {
        name: "varsha",
        text: "great man",
        replies: [
          {
            name: "varsha",
            text: "great man",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "varsha",
    text: "great man",
    replies: [
      {
        name: "Indrajeet",
        text: "great man",
        replies: [],
      },
    ],
  },
  {
    name: "varsha",
    text: "Was waiting for this .. Thank you ",
    replies: [
      {
        name: "Prachi Singh",
        text: "great man",
        replies: [],
      },
      {
        name: "Indrajeet",
        text: "Hats off to you .. 💫💫",
        replies: [],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-7">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm rounded-sm my-1">
      <img
        className="w-6 h-6"
        src="https://tse3.mm.bing.net/th?id=OIP.Mydkhl0AW3QEPAB9FkR46AHaHa&pid=Api&P=0&h=180"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">@{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 pl-5 p-2">
      <h1 className="text-2xl font-bold mb-3">Comments..</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
