import Trending from "app/(home)/Trending";
import Basics from "@/app/(home)/Basics";
import People from "@/app/(home)/People";
// import Other from "app/(shared)/Other";
import Subscribe from "app/(shared)/Subscribe";
import Sidebar from "app/(shared)/Sidebar";
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );

  return formattedPosts;
};

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const basicsPosts: Array<Post> = [];
    const peoplePosts: Array<Post> = [];
    // const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, index: number) => {
      if (index < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Basics") {
        basicsPosts.push(post);
      } else if (post?.category === "People") {
        peoplePosts.push(post);
      }
      // else if (post?.category === "Interior Design") {
      //   otherPosts.push(post);
      // }
    });

    return [trendingPosts, basicsPosts, peoplePosts];
  };

  const [trendingPosts, basicsPosts, peoplePosts] = formatPosts();

  return (
    <main className="px-10 leading-7">
      <Trending trendingPosts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Basics basicsPosts={basicsPosts} />
          <People peoplePosts={peoplePosts} />
          {/* <Other otherPosts={otherPosts} /> */}
          {/* <div className="md:hidden block">
            <Subscribe />
          </div> */}
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
