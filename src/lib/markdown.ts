import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "markdown/projects");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getProjectsBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    // [key: string]: string;
    [key: string]: string | object;
  };

  const items: any = {};

  function processImages(content: string) {
    // You can modify this function to handle image processing
    // For example, replace image paths with actual HTML image tags
    return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      // You can modify the content here to include images
      items[field] = processImages(content);
    }

    if (field === "metadata") {
      // Include metadata, including the image information
      items[field] = { ...data, coverImage: data.coverImage || null };
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getProjectsBySlug(slug, fields))

  return posts;
}
