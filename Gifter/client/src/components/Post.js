import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


export const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <Link to={`/users/${post.userProfileId}`}>
        <p className="text-left px-2">Posted by: {post?.userProfile?.name}</p>
      </Link>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
          </Link>
        </p>
        <p>{post.caption}</p>
        <p>Comments:</p>
        <div>
            {post.comments?.map((singleComment) => (
                <>
                <p>{singleComment.message}</p>
                <p>{singleComment?.userProfile?.name}</p>
                </>
            ))}
        </div>
      </CardBody>
    </Card>
  );
};