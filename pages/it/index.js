import {fetchLatest} from "@/lib/fetchLatest";
import HomeComponent from "@/components/HomeComponent";

export default function HomeIt ({posts}) {
    return (
        <HomeComponent language={"it"} posts={posts} />
    );
}

export async function getStaticProps () {
    const {latest} = await fetchLatest(null, "it");

    if (!latest) {
        return {notFound: true};
    }

    return {
        props: {
            posts: latest
        },
        revalidate: 60,
    };
}
