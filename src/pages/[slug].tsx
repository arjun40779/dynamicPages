export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "page1" } }, { params: { slug: "page2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: { slug: params.slug },
  };
}
const dynamicPage = ({ slug }: { slug: string }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-4xl">{slug}</h1>{" "}
    </div>
  );
};
export default dynamicPage;
