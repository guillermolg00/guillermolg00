import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Posts sobre arquitectura de software, ingeniería y tecnología.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
