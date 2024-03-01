"use client";

import { Comment } from "react-loader-spinner";

export function Loading() {
  return (
    <Comment
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      color="#fff"
      backgroundColor="#F4442E"
    />
  );
}
