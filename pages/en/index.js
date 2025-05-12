import HomeComponent from "@/components/HomeComponent";
import {fetchLatest} from "@/lib/fetchLatest";

export default function HomeEn ({posts}) {
    return (
        <HomeComponent language={"en"} posts={posts} />
    );
}

export async function getStaticProps () {
    const {latest} = await fetchLatest(null, "en");

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