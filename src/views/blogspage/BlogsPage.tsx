import React from "react";
import BlogsPageHero from "./components/BlogsPageHero";
import RecentPosts
    from "./components/RecentPosts";
const BlogsPage = () => {
    return (
        <>
            <BlogsPageHero />
            <RecentPosts />
        </>
    );
};

export default BlogsPage;