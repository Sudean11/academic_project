import React from "react";

function PostDetail(props) {
  return (
    <div className="detail-box">
      <div>
        <h3>
          <u>MIU</u>
        </h3>
      </div>
      <div>
        {props?.post?.author}
      </div>

      <div>
        {props?.post?.content}
      </div>
    </div>
  );
}

export default PostDetail;
