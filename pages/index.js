export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/it",
            permanent: true,
        },
    };
}

export default function Home() {
    return null;
}