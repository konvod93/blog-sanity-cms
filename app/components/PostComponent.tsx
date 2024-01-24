import Link from "next/link";
import { Post } from "../utils/interface";

interface Props {
    post: Post;
    
}

const PostComponent = ({post}: Props) => {
  return (
    <div>
        <Link href={`/posts/${post?.slug?.current}`}>
            <h2>{post?.title}</h2>
            <p>{post?.publishedAt}</p>
            <p>{post?.excerpt}</p>
        </Link>
    </div>
  )
}

export default PostComponent