import axios from "axios";
export async function getPostList() {
  "use server";
  const { data } = await fetchPostList();
  console.debug({ data });
  return data;
}

function fetchPostList() {
  return axios.get("https://api.github.com/issues");
}
