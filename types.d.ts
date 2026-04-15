type BlogPost = {
  id: string;
  title: string;
  date: string;
};

type BlogPostWithHtml = BlogPost & {
  contentHtml: string;
};
